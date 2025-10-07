import { globby } from 'globby';
import fs from 'node:fs/promises';

const files = await globby(['app/**/*.{js,jsx,ts,tsx}']);
for (const file of files) {
  let src = await fs.readFile(file, 'utf8');
  src = src.replace(/(['"])\.\.\/\.\.\/components\//g, '$1@/components/');
  src = src.replace(/(['"])\.\.\/components\//g, '$1@/components/');
  await fs.writeFile(file, src);
}
console.log('Imports fixed.');
