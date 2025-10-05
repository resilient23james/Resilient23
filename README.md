# Resilient Commercial Solutions — Netlify SSR (v5401)

Dynamic Next.js (SSR) on Netlify with Functions for email (SendGrid) and Supabase lead capture.
Shay (virtual consultant) renders globally and handles free-text routing + one-time quick pills.

## Deploy
1) Netlify → Site settings → Environment:
   - FROM_EMAIL
   - LEADS_TO
   - SENDGRID_API_KEY
   - SUPABASE_URL
   - SUPABASE_ANON_KEY
2) Build command: `npm run build`
3) Publish directory: `.next`
4) Functions directory: `netlify/functions`

## Local
```bash
npm i
npm run dev
```