#!/bin/sh
# Build and prepare docs/ folder for GitHub Pages deploy
rm -rf docs
cp -r dist docs
rm -f docs/NIP.md docs/og-image.svg docs/og-image.jpg docs/robots.txt docs/_redirects docs/*.map
# Fix absolute paths for GitHub Pages subpath
sed -i 's|src="/|src="/MindfulSats/|g; s|href="/|href="/MindfulSats/|g' docs/index.html docs/404.html 2>/dev/null
echo "Done. Commit and push docs/ to deploy."
