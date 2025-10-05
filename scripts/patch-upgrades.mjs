// scripts/patch-upgrades.mjs
import fs from 'node:fs';
import path from 'node:path';

const repo = process.cwd();
const upgPublic = path.join(repo, '_upg', 'public');
const dstPublic = path.join(repo, 'public');

function copyDir(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const s = path.join(src, item);
    const d = path.join(dst, item);
    const stat = fs.statSync(s);
    if (stat.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
  console.log(`✓ Copied ${src} -> ${dst}`);
}

// 1) Copy assets (e.g., Shay’s photo) from _upg/public to /public
copyDir(upgPublic, dstPublic);

// 2) Ensure tsconfig paths alias @/*
const tsconfigPath = path.join(repo, 'tsconfig.json');
if (fs.existsSync(tsconfigPath)) {
  const raw = fs.readFileSync(tsconfigPath, 'utf8');
  const data = JSON.parse(raw);
  data.compilerOptions = data.compilerOptions || {};
  if (!data.compilerOptions.baseUrl) data.compilerOptions.baseUrl = '.';
  data.compilerOptions.paths = data.compilerOptions.paths || {};
  data.compilerOptions.paths['@/*'] = data.compilerOptions.paths['@/*'] || ['./*'];
  fs.writeFileSync(tsconfigPath, JSON.stringify(data, null, 2) + '\n');
  console.log('✓ Ensured tsconfig baseUrl + @/* path alias');
}

// 3) Add content/resilient.ts if missing
const contentDir = path.join(repo, 'content');
const contentFile = path.join(contentDir, 'resilient.ts');
if (!fs.existsSync(contentFile)) {
  fs.mkdirSync(contentDir, { recursive: true });
  fs.writeFileSync(
    contentFile,
    `export type Division = {
  id: string;
  name: string;
  tagline: string;
  bullets: string[];
};

export const hero = {
  en: { title: "Resilient Commercial Solutions", subtitle: "One team. Three divisions. Total resilience." },
  es: { title: "Soluciones Comerciales Resilient", subtitle: "Un equipo. Tres divisiones. Resiliencia total." },
};

export const divisions: Division[] = [
  { id: "facilities", name: "Resilient Facilities", tagline: "Daily janitorial, floor care, day-porter, high-dusting.", bullets: ["Commercial janitorial programs","Post-construction cleaning","Healthcare & education compliant"] },
  { id: "projects", name: "Resilient Projects",   tagline: "One-time deep cleans and specialty work at scale.",      bullets: ["Turnkey project crews","Night & weekend availability","Rapid mobilization"] },
  { id: "restoration", name: "Resilient Restoration", tagline: "Emergency response for water, fire, mold & biohazard.", bullets: ["24/7 dispatch","Certified technicians","Insurance coordination"] },
];

export const contact = { emailFromKey: "FROM_EMAIL", leadsToKey: "LEADS_TO" };
`
  );
  console.log('✓ Created content/resilient.ts');
} else {
  console.log('• content/resilient.ts already exists (skipped)');
}

// 4) Make sure ShayButton.tsx references /shay.jpg (or /avatars/shay.jpg if that’s what you copied)
const shayBtn = path.join(repo, 'components', 'ShayButton.tsx');
if (fs.existsSync(shayBtn)) {
  let src = fs.readFileSync(shayBtn, 'utf8');
  // If there is any src="...shay..." swap to /shay.jpg
  src = src.replace(/src\s*=\s*["'][^"']*shay\.(png|jpg|jpeg|webp)["']/i, 'src="/shay.jpg"');
  // If there is no image yet, add a safe default snippet after the first return (
  if (!/src\s*=\s*["'][^"']*["']/.test(src) && src.includes('return (')) {
    src = src.replace(
      /return\s*\(/,
      `return (
  <img src="/shay.jpg" alt="Shay" width={56} height={56} className="rounded-full object-cover" />`
    );
  }
  fs.writeFileSync(shayBtn, src);
  console.log('✓ Ensured Shay avatar uses /shay.jpg');
} else {
  console.log('• components/ShayButton.tsx not found (skipped avatar patch)');
}

console.log('\nAll done. Commit & push your changes, then redeploy.');
