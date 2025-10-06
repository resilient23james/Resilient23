# RCS v5402 PATCH — Chronicle Shell

Drop these files into your repo root and **Allow overwrite** when GitHub asks.

What's inside:
- `package.json` — fixes `@sendgrid/mail` to `^7.7.1` (Netlify ETARGET solved).
- `components/ServiceCard.tsx` — shared typed card used by EN + ES.
- `components/ShayButton.tsx` — avatar uses `/shay-avatar.jpg?v=2`.
- `app/page.tsx` — EN homepage with new intro line and the 3 service cards.
- `app/es/page.tsx` — ES homepage with same content in Spanish.

## Apply
1. Download the ZIP and unzip.
2. In GitHub → your repo:
   - Navigate to each destination folder and **Upload files** (drag the matching files). Confirm overwrite.
3. Commit directly to `main` with message: `v5402 Chronicle PATCH — tagline + cards + sendgrid fix`.
4. Netlify will rebuild automatically.

## Notes
- We did **not** touch your Netlify Functions, configs, or images. Keep `/public/shay-avatar.jpg` as is.
- If your functions import SendGrid, they'll now resolve the stable version.
