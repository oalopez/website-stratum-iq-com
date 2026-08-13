# StratumIQ Website

Landing page for StratumIQ - AI-powered data intelligence platform.

## Stack

- Pure HTML/CSS/JS (no build step)
- Inter + JetBrains Mono typography
- Dark theme with glassmorphism
- Canvas particle mesh hero

## Development

Open `index.html` in a browser. No build tools required.

For local development with hot reload:

```bash
npx serve .
```

## Deploy

Deployed on **GitHub Pages** from this repo (`oalopez.github.io`), served at
`www.stratumiq.com` via the `CNAME` file.

### Domain & DNS

- **Registrar:** Wix (account `oscar.lopez@fitideas.co`) — renews Aug 25 each year
  (~CAD 29/yr, auto-renew on)
- **DNS zone:** hosted by Wix nameservers (`ns12/ns13.wixdns.net`)
- **Apex** `stratumiq.com` → A records to GitHub Pages
  (`185.199.108-111.153`), 301-redirects to `www`
- **`www`** → CNAME to `oalopez.github.io`
- **Email:** Google Workspace (`aspmx.l.google.com`), unrelated to the site

Wix is **only** the registrar and DNS host — it serves no site content. A Wix
Premium "Light Plan" (CAD 252/yr, billed to `oalopez@gmail.com`) was cancelled in
Aug 2026 after verifying it hosted nothing; the site has always been served by
GitHub Pages. Do not re-subscribe to a Wix hosting plan for this domain.

If DNS ever needs rebuilding, the records above are the full set required.

## Structure

```
index.html          — Main page
css/                — Modular CSS (variables, reset, base, components, sections, animations)
js/                 — Main interactivity + particle system
assets/             — Logo SVG and icons
```
