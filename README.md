# Resilient Commercial Solutions — Master Shell v5402

## Netlify Settings
- Build command: `npm run build`
- Publish directory: `.next`
- Functions directory: `netlify/functions`
- Plugin: `@netlify/plugin-nextjs` (declared in `netlify.toml`)
- Node bundler for functions: `esbuild` (bundles `@sendgrid/mail`)

## Env Vars
- SENDGRID_API_KEY
- FROM_EMAIL
- LEADS_TO
- SITE_PHONE

## Develop
```bash
npm install
npm run dev
```
