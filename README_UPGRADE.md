# RCS Visual + UX Upgrades (Drop‑in)
Safe, shell‑preserving files you can upload directly in GitHub.
**Overwrites** only the matching files below if they already exist.

**Adds/Updates**
- components/ServiceCard.tsx
- components/ShayButton.tsx
- components/ShayModal.tsx
- app/page.tsx
- app/es/page.tsx
- app/globals.upg.css  (optional import in layout.tsx)
- public/shay-avatar.webp
- public/robots.txt, public/sitemap.xml
- netlify/functions/sendLead.js (stub)

**Use**
1. Download this ZIP and extract.
2. In GitHub: Add files › Upload files (to repo root). Drag folders to upload; accept overwrite.
3. Optional: import './globals.upg.css' in `app/layout.tsx` below your existing globals.
4. Netlify will rebuild automatically.

Tailwind note: ensure your `tailwind.config.js` has `darkMode: 'class'` for best visuals.
