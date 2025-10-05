
RCS – Content + Avatar Upgrades (drop-in)

This zip adds:
  • content/resilient.ts  (single source of truth for homepage text)
  • public/shay.jpg       (avatar image; replace with the real Shay headshot when ready)
  • snippets/page.txt     (copy/paste snippet for your app/page.tsx or pages/index.tsx)
  • snippets/page.es.txt  (copy/paste snippet for app/es/page.tsx if you have Spanish page)
  • snippets/avatar.tsx   (example avatar component usage)
  • snippets/css.txt      (safe CSS to ensure the photo sits above the red pulse)

How to apply (takes ~2 minutes):
1) Commit this folder at the project root of your repo.
   └── content/resilient.ts
   └── public/shay.jpg
   └── snippets/* (snippets are for copy/paste; do not import them)

2) Open your homepage file and paste the snippet:
   • If you use App Router -> app/page.tsx
   • If you use Pages Router -> pages/index.tsx
   Paste the code from snippets/page.txt inside your component, replacing the hero title + subtitle and (optionally) adding the divisions grid.

3) If you have a Spanish page:
   • app/es/page.tsx -> paste snippets/page.es.txt similarly.

4) Make the avatar show:
   • Put /public/shay.jpg in the repo (the file is included in this zip).
   • In the component that renders the floating assistant bubble, pass avatar='/shay.jpg' OR render an <Image src='/shay.jpg' .../>.
     Common files: components/ShayWidget.tsx, components/Assistant.tsx, components/ChatBubble.tsx, components/ui/Fab.tsx
   • If you can’t find the spot easily, add the CSS from snippets/css.txt to your global stylesheet so the image sits above any red pulse.

5) Commit and push. Netlify will rebuild.

When you obtain Shay's real photo, replace public/shay.jpg with it (same filename).
