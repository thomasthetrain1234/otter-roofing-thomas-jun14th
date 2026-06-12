# Otter Roofing LLC - otterroofingllc.com

Static marketing site for Otter Roofing, built with Astro. Three pages
(Home, Services, About), no CMS, no backend, deploys to Vercel.

## Quick start

```bash
npm install
npm run dev        # local dev at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## The swaps you will actually need to make

### 1. Phone number (one line)

Everything reads from `src/config.ts`:

```ts
export const PHONE_DISPLAY = 'JAX-PHONE-PLACEHOLDER'; // what people see
export const PHONE_TEL = 'JAX-PHONE-PLACEHOLDER';     // what tel: links dial
```

Set them like:

```ts
export const PHONE_DISPLAY = '(904) 555-0123';
export const PHONE_TEL = '+19045550123';
```

That updates the header, hero, every CTA, the footer, and the JSON-LD schema
on all pages at once.

### 2. Logo

Replace `public/logo.svg` (header) and `public/favicon.svg` (browser tab)
with the final files. Keep the filenames. Full asset list with dimensions:
see `ASSETS.md`.

### 3. Brand colors

All colors are CSS variables at the top of `src/styles/global.css`:

```css
--brick: #a8423d;   /* primary red */
--slate: #2e3e42;   /* dark teal/charcoal */
--tan:   #d9b98a;   /* warm secondary */
--cream: #f7f4ee;   /* page background */
```

Adjust these when the final logo locks the palette. `--brick-dark` is the
hover/text variant; keep it dark enough to pass WCAG AA on cream (the
shipped value does).

### 4. Hero video

1. Drop the loop at `public/assets/hero/hero-loop.mp4` and the poster at
   `public/assets/hero/hero-poster.jpg` (specs in `ASSETS.md`).
2. In `src/pages/index.astro`, uncomment the marked `<video>` block.

Reduced-motion users automatically get the poster instead of autoplay; that
logic is already wired.

### 5. Un-hide the reviews section

The Google reviews section on the home page is fully built but renders
nothing until enabled:

1. In `src/components/Reviews.astro`, replace the placeholder entries with
   real Google reviews (verbatim) and set `googleProfileUrl`.
2. In `src/config.ts`, set `SHOW_REVIEWS = true`.

Do not enable it with the placeholder content in place, and never paraphrase
or invent reviews.

## Deploying to Vercel

```bash
npm i -g vercel   # if needed
vercel            # preview deploy
vercel --prod     # production deploy
```

Vercel auto-detects Astro; no config file is needed. Framework preset:
Astro, build command `astro build`, output directory `dist`.

## Pointing GoDaddy DNS at Vercel

1. In the Vercel project: Settings > Domains > add `otterroofingllc.com`
   and `www.otterroofingllc.com`. Vercel shows the records it wants.
2. In GoDaddy: My Products > otterroofingllc.com > DNS, then:
   - **A record**: Name `@`, Value `76.76.21.21` (use the IP Vercel
     displays if it differs)
   - **CNAME record**: Name `www`, Value `cname.vercel-dns.com`
   - Delete GoDaddy's default "Parked" A record and any conflicting
     CNAME/forwarding on `@` or `www`.
3. Back in Vercel, wait for the domain checks to go green (minutes to a few
   hours for DNS propagation). Vercel issues the SSL certificate
   automatically.
4. Set `otterroofingllc.com` as the primary domain in Vercel so `www`
   redirects to the apex.

## Project layout

```
src/
  config.ts             phone number, business constants, reviews flag
  styles/global.css     brand variables, typography, shared components
  layouts/Base.astro    head/SEO/JSON-LD, header, footer wrapper
  components/           Header, Footer, CtaBand, Reviews (flagged off)
  pages/                index, services, about, 404
public/
  logo.svg favicon.svg robots.txt
  assets/               image/video slots (see ASSETS.md)
```

`sitemap-index.xml` is generated at build time by `@astrojs/sitemap` and is
already referenced in `robots.txt` and each page head.

## Copy rules (for future edits)

- No em dashes in site copy, anywhere. The client checks for this.
- No invented numbers: no years in business, review counts, or project
  totals. Mark is new, solo, and licensed; the copy says so plainly.
- Every CTA is a phone call: "Talk to Mark" or a close variant, always with
  the phone number visible as plain text next to it.
- Body text stays at 18px or larger.
