# Resilient Commercial Solutions — Netlify SSR (v5400)

Dynamic Next.js deployment on Netlify with Netlify Functions for email (SendGrid) and Supabase lead capture.

## Deploy
1. Add environment variables in Netlify UI (`Site settings → Environment`):
   - FROM_EMAIL
   - LEADS_TO
   - SENDGRID_API_KEY
   - SUPABASE_URL
   - SUPABASE_ANON_KEY
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Functions directory: `netlify/functions`

## Local dev
```bash
npm i
npm run dev
```
