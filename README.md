# Resilient Chronicle Shell — v5402

- Next.js 14 (App Router, SSR on Netlify)
- Shay avatar + chat (session feed, typing indicator)
- EN/ES pages with correct service cards
- Netlify Functions: send-email (SendGrid), saveLead (Supabase)

## Netlify
Build command: `npm run build`
Publish: `.next`
Functions: `netlify/functions`

## Env Vars
FROM_EMAIL=you@example.com
LEADS_TO=resilient23.james@gmail.com
SENDGRID_API_KEY=*****
SUPABASE_URL=*****
SUPABASE_ANON_KEY=*****