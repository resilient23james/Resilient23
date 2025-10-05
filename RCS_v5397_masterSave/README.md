# RCS v5397 MasterSave (Deploy-ready)
- Next.js App Router (EN & ES)
- Floating Shay orb (transparent WEBP + red glow)
- Careers forms (EN/ES) -> Netlify Function (SendGrid multipart)
- Tailwind base styles; images unoptimized to avoid squoosh WASM errors
- Node 18 (`.nvmrc`); build command `npm run build`

## Netlify environment
- SENDGRID_API_KEY=******
- FROM_EMAIL=no-reply@resilientcs.com
- LEADS_TO=resilient23.james@gmail.com

## Deploy
1) Upload this ZIP in Netlify > Deploys > "Upload deploy".
2) Ensure env vars above are set.
3) Build should pass cleanly and site will be live.
