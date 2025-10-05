
# Resilient Commercial Solutions — Netlify SSR (v5401)

Deploy-ready Next.js SSR site with Netlify Functions for SendGrid and Supabase.

## Deployment Instructions
1. Add these Environment Variables in Netlify (Site Settings → Environment):
   - FROM_EMAIL
   - LEADS_TO
   - SENDGRID_API_KEY
   - SUPABASE_URL
   - SUPABASE_ANON_KEY

2. Build Command: `npm run build`
3. Publish Directory: `.next`
4. Functions Directory: `netlify/functions`
