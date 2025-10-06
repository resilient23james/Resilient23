# Resilient Commercial Solutions — Master Shell v5402

**Stack:** Next.js 14 (App Router) + TailwindCSS + Netlify Functions (SendGrid)  
**Bilingual:** EN + ES mirrors for all 15 pages (30 total).  
**Brand:** Black / Red / White. Logos & Shay baked in `/public`.

## Deploy (Netlify)
1. New Site → Import from Git or Upload this ZIP.
2. Set env vars:
   - `SENDGRID_API_KEY`
   - `FROM_EMAIL` (verified sender in SendGrid)
   - `LEADS_TO` (recipient mailbox)
3. Deploy. Functions available at `/.netlify/functions/*`.

## Funnels
- Quote (`type=lead`), Vendor (`type=vendor`), Restoration (`type=restoration`), Mechanic (`type=mechanic`).
- Shay Assistant opens funnels automatically; Spanish on `/es/*` pages.

## Scripts / Commands
```bash
npm install
npm run dev
npm run build && npm start
```

## Customize
- Replace `/public/logo-*.png` and `/public/shay.png` with final assets.
- Update copy in pages under `app/` and `app/es/`.
- Edit `netlify.toml` for CSP and caching as needed.
