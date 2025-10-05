# Resilient23 – Quick Fix Patch

This patch fixes the Netlify/Next.js build errors:

```
Module not found: Can't resolve '@/components/ServiceCard'
Module not found: Can't resolve '@/components/ShayButton'
```

## What's inside
- `tsconfig.json` — adds the `@/*` path alias.
- `components/ServiceCard.tsx` — presentational card used by `/app/page.tsx` and `/app/es/page.tsx`.

## How to apply (no Codespaces required)
1) Download this ZIP and extract it over your repo so these files **replace / add** to your repo:
   - `/tsconfig.json`
   - `/components/ServiceCard.tsx`
2) Commit to GitHub:
   - In GitHub UI, click **Add file → Upload files**, drag BOTH files above to the root of the repo, then **Commit changes**.
3) Netlify will rebuild automatically. If your pages import like `@/components/...`, they will now resolve.

> If you still see errors, make sure the imports in `app/page.tsx` and `app/es/page.tsx` are *exactly*:
>
> ```ts
> import ServiceCard from '@/components/ServiceCard';
> import ShayButton from '@/components/ShayButton';
> ```

No other changes to your shell are required.
