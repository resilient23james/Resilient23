# RCS v5401 – fix duplicate import & keep shell

This patch fixes the Netlify error "the name `ServiceCard` is defined multiple times"
by ensuring each page imports the component only once with the correct relative path.

Included (replace in your repo):
- components/ServiceCard.tsx
- app/page.tsx
- app/es/page.tsx

## Upload steps (no Codespaces)
1) Download `RCS_v5401_fix_imports.zip` below.
2) In GitHub → your repo → **Add files → Upload files**.
3) Drag the folders `app/` and `components/` from the ZIP into the repo root.
4) Commit directly to `main`. Netlify will redeploy.
5) If Netlify still shows an error, click **Clear cache and deploy site** in Netlify.
