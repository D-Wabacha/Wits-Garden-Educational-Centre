# Wits Garden Educational Centre — Website

A responsive 5-page website for **Wits Garden Educational Centre**, a Play Group–Grade 8 school (with French) in Dandora Phase 5, Nairobi, Kenya. Built with plain **HTML, CSS and JavaScript** — no frameworks, no build step.

Motto: *"Forward ever, backward never."*

---

## Live structure

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero banner, why-us highlights, vision/mission/values, media teaser, map teaser |
| Services | `services.html` | Classes offered, daily care, teaching approach, FAQ |
| School life | `school-life.html` | Full photo gallery, learning displays, video gallery |
| Contact | `contact.html` | Phone, WhatsApp, Facebook, embedded map, contact form |
| Donate | `donate.html` | Impact story, ways to help, use-of-funds, donor/partner interest form, FAQ |

All five pages share the same header (logo + navigation) and footer (contact links, map link, site links, credit line), defined once in each page's markup and styled from a single shared stylesheet.

---

## Project structure

```
.
├── index.html
├── services.html
├── school-life.html
├── contact.html
├── donate.html
├── style.css              # all shared styles (colors, layout, components)
├── script.js               # nav toggle, form handling, image lightbox
├── robots.txt
├── sitemap.txt
├── favicon.ico
├── favicon-16.png / 32 / 48 / 180 / 192 / 512.png
├── images/
│   ├── logo-badge.png       # circular crest used in the nav & footer
│   ├── logo-photo.jpg       # original embroidered crest photo
│   ├── banner-photo.jpg     # school signage photo used as the homepage hero
│   ├── home-1.jpg … home-3.jpg
│   ├── classroom-1.jpg … classroom-6.jpg
│   └── display-1.jpg … display-6.jpg
└── videos/
    ├── video-1.mp4 … video-7.mp4
    └── video-1-poster.jpg … video-7-poster.jpg
```

No HTML file lives inside a subfolder — only images and videos are grouped into `images/` and `videos/` for tidiness. Everything works by opening `index.html` directly, or by serving the folder with any static web server.

---

## Features

- **Fully responsive** — works from small phones up to desktop, with a collapsible hamburger menu below ~860px.
- **Consistent nav & footer** across every page, including click-to-call, click-to-WhatsApp, Facebook, and a map link.
- **Real school photos & videos** throughout the homepage and the School life gallery, with a lightweight **lightbox** (click any gallery photo to view it larger) and native HTML5 `<video>` players with poster thumbnails.
- **Favicon set** generated from the school's own crest, covering browser tabs, Android home-screen icons, and Apple touch icons.
- **SEO basics**: per-page `<title>`/description, canonical tags, Open Graph tags, `robots.txt`, and `sitemap.txt`.
- **Accessible forms**: labeled fields, inline validation messages, and a confirmation note on submit (no backend — forms are front-end only, see below).
- **No donation payment processing** — the Donate page captures donor/sponsor interest through a form; the school follows up personally. See the note in that section of the page.

---

## Important: things to update before going live

1. **Domain name** — every canonical link, Open Graph `og:url`/`og:image`, `robots.txt`, and `sitemap.txt` currently uses the placeholder domain `https://www.witsgardenedu.co.ke/`. Replace this with the real domain once one is registered and the site is hosted (a simple find-and-replace across all files).
2. **Google Maps** — the map embed on the Home and Contact pages currently uses a generic "Dandora Phase 5, Nairobi" search. Once you have the exact Google Maps link/place for the school, replace the `src` of both `<iframe class="map-frame">` elements with the real embed URL (Google Maps → Share → Embed a map → copy the `src` from the `<iframe>` code Google gives you).
3. **Contact form & donor form** — these currently show an on-page confirmation message but do not send an email anywhere (there's no backend). To actually receive submissions, connect the two `<form>` elements (`#contactForm` in `contact.html`, `#donateForm` in `donate.html`) to a form service such as Formspree, Getform, or a simple backend endpoint.
4. **Fees, hours, term dates** — these were intentionally left as "contact us" answers in the Services FAQ, since exact figures weren't provided. Fill them in once confirmed.
5. **More media** — the site currently uses a curated subset of the supplied photos and videos. Additional photos/videos can be dropped into `images/` or `videos/` and added to `school-life.html` following the existing markup pattern.

---

## Colors & type

| Token | Hex | Used for |
|---|---|---|
| Red | `#c0392b` | Primary accent, buttons, motto strip |
| Sky blue | `#2e6da4` | Headings, links, secondary buttons |
| White | `#ffffff` | Backgrounds, text on dark sections |
| Black / ink | `#1a1a1a` | Body text |

Headings use **Baloo 2** (via Google Fonts) for a friendly, rounded feel appropriate for a children's school; body text uses **Inter** for readability.

---

## Running locally

No build tools are needed. Either:

- Open `index.html` directly in a browser, or
- Serve the folder locally for a closer-to-production experience, e.g.:
  ```bash
  python3 -m http.server 8000
  ```
  then visit `http://localhost:8000`.

## Deploying

Any static host works — Netlify, Vercel, GitHub Pages, or standard shared hosting. Upload the contents of this folder as-is (no build step required).

---

## Credits

Website built by **Sonath Solutions**.
🌐 [sonathsolutions.com](https://sonathsolutions.com) · 📞 [+254 768 426 579](tel:+254768426579) · 💬 [WhatsApp](https://wa.me/254768426579) · ✉️ [sonathsolutions@gmail.com](mailto:sonathsolutions@gmail.com)

Photos and videos courtesy of Wits Garden Educational Centre.
