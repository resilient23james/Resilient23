# Resilient Commercial Solutions — Master Shell

Next.js 14 (App Router) + TailwindCSS. Netlify deploy with `@netlify/plugin-nextjs` (SSR enabled).

## Build
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Functions**: `netlify/functions`
- **Node**: `.nvmrc` (v18.20.3)

## Env
See `.env.example` and configure in Netlify:
`SENDGRID_API_KEY`, `FROM_EMAIL`, `LEADS_TO`, `SITE_PHONE`.

## Dev
```bash
npm i
npm run dev
```

## Deploy
Push to GitHub; connect repo to Netlify; confirm build/publish/functions per above.
