<div align="center">

#  ClimateLenz

**Fixed-price, fixed-timeline CSRD & ESRS reports — without the Big 4 invoice.**

The public marketing site for ClimateLenz. A fast, fully static website (HTML · CSS · vanilla JS)
with **no build step**, designed for **GitHub Pages**.

`Static Site` · `GDPR-ready` · `GTM + Consent Mode v2` · `Zero dependencies`

</div>

---

## Overview

| | |
|---|---|
| **Type** | Static website (no framework, no build) |
| **Pages** | Home, Privacy Policy, Terms of Service, Cookie Notice, 404 |
| **Hosting** | GitHub Pages (serves from repo root) |
| **Consent** | Silktide Consent Manager + Google Consent Mode v2 |
| **Domain** | www.climatelenz.com |

---

## Project structure

> All files sit at the **repository root** — GitHub Pages serves `/index.html` and expects
> `robots.txt`, `sitemap.xml`, favicons, and `.well-known/` at the root.

```
.
├── index.html              Home / landing page
├── privacy-policy.html     Privacy Policy (GDPR)
├── terms.html              Terms of Service
├── cookies.html            Cookie Notice
├── 404.html                Custom not-found page
│
├── lenz.css                Shared styles + design tokens
├── silktide-consent.js     Cookie-consent config (Silktide + Consent Mode v2)
│
├── site.webmanifest        PWA / installable-icon manifest
├── favicon.ico             ┐
├── favicon-16x16.png       │
├── favicon-32x32.png       │ Favicons & app icons
├── favicon-48x48.png       │
├── apple-touch-icon.png    │ (iOS, 180×180)
├── android-chrome-192x192.png
├── android-chrome-512x512.png  ┘
│
├── brand-mark.png          Logo mark (nav/footer)
├── world-map.png           Source for the animated "worldwide" canvas
│
├── robots.txt              Search-engine directives
├── sitemap.xml             Sitemap
├── .nojekyll               Disables Jekyll on GitHub Pages
└── .well-known/
    └── security.txt        Security contact (RFC 9116)
```

---

## Deploy to GitHub Pages

```bash
git clone https://github.com/Climatelenz/Climatelenz.git
cd Climatelenz
# copy all site files into the repo root (including .nojekyll and .well-known/)
git add -A
git commit -m "Launch ClimateLenz site"
git push origin main
```

> ⚠️ The GitHub **web uploader skips dotfiles** — use `git` (above) so `.nojekyll` and
> `.well-known/security.txt` are committed.

Then:

1. **Settings → Pages** → Source: *Deploy from a branch* → Branch: **`main` / `(root)`** → **Save**
2. Site goes live at `https://climatelenz.github.io/Climatelenz/` within ~1 minute.

### Custom domain

1. **Settings → Pages → Custom domain** → `www.climatelenz.com` → **Save** (writes a `CNAME` file).
2. At your DNS provider, add a **CNAME** record: `www` → `climatelenz.github.io`.
3. Enable **Enforce HTTPS** once the certificate provisions.

---

## Analytics & consent

- **Google Tag Manager** (`GTM-PRTLDT72`) is installed on every page (head + `<body>` noscript).
- **Consent Mode v2** denies all storage by default; **Silktide** grants it only after opt-in.
- **GA4** (`G-KNP3YWYREK`) is delivered **through GTM** — publish the GA4 Configuration tag in
  your container for data to start flowing.
- A footer **"Cookie preferences"** link reopens the consent panel at any time.

---

## Privacy & security

- ✅ **No third-party requests before consent** — fonts are system fonts (no Google Fonts call).
- ✅ Per-page **Content-Security-Policy**, `Permissions-Policy`, strict referrer policy.
- ✅ **SRI** on the single external (CDN) script; `rel="noopener noreferrer"` on outbound links.
- ℹ️ HSTS / clickjacking headers require a proxy (e.g. Cloudflare) — GitHub Pages can't set them.

---

## Editing

Plain HTML/CSS/JS — open a file and edit; there is **no build step**. Shared look-and-feel and
design tokens live at the top of `lenz.css`. If you add or rename pages, update `sitemap.xml`
and the footer navigation links.

---

<div align="center">

© ClimateLenz · Based in Mumbai · Serving the EU
**Caring for the world we share.**

</div>
