#!/usr/bin/env bash
set -e
git add -A
git commit -m "Drop-in: homepage EN+ES, Shay avatar button, helper script"
git push origin HEAD
echo "✅ Pushed. Netlify will rebuild automatically."
