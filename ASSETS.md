# Otter Roofing - Client Asset Checklist

Every placeholder on the site maps to one file below. Drop each file at the
exact path listed and the site picks it up with no code changes (except the
hero video, which needs one uncomment - see README.md).

## 1. Logo

| File | Path | Specs | Appears |
|---|---|---|---|
| Final logo | `public/logo.svg` | SVG preferred (or 240x240 PNG named `logo.svg` replaced accordingly) | Header on every page, schema markup |
| Favicon | `public/favicon.svg` | Simplified mark, readable at 16px | Browser tab |

A geometric placeholder (diamond + roofline in brand colors) ships in both
slots today. Replace the files; keep the filenames.

## 2. Photos of Mark

| File | Path | Specs | Appears |
|---|---|---|---|
| Headshot | `public/assets/about/mark-headshot.jpg` | Square, at least 800x800, face clearly lit, plain or job-site background | Home "Meet Mark" section, About page hero |
| Truck decal photo | `public/assets/about/truck-decal.jpg` | Landscape, at least 1600x1000, truck with Otter Roofing decal visible | About page |

After dropping these in, swap the `.placeholder-media` divs for `<img>` tags.
Each placeholder div in the code has a comment with the exact path and the
alt text is already written on the placeholder's `aria-label`.

## 3. Hero slideshow photos

| File | Path | Specs | Appears |
|---|---|---|---|
| Photo 1 | `public/assets/hero/hero-1.jpg` | Landscape, at least 1600px wide, JPG | Home page hero background (first slide) |
| Photo 2 | `public/assets/hero/hero-2.jpg` | Landscape, at least 1600px wide, JPG | Home page hero background (second slide) |
| Photo 3 | `public/assets/hero/hero-3.jpg` | Landscape, at least 1600px wide, JPG | Home page hero background (third slide) |

Three licensed stock photos (roofer at work, two shingle-roof homes) ship in
these slots today. To use Mark's real job photos, replace the files and keep
the filenames - no code changes needed. The slideshow crossfades every 6
seconds; reduced-motion users see a static first photo.

## 4. Social share image (optional upgrade)

| File | Path | Specs | Appears |
|---|---|---|---|
| OG card | `public/assets/og-cover.png` | 1200x630 PNG | Link previews on Facebook, iMessage, LinkedIn, etc. |

A branded placeholder is already generated and in place (source:
`og-source.svg` in the project root). Replace it with a designed card with a
real photo whenever ready.

## 5. Still needed from Mark (not files)

- [ ] Real phone number (one-line swap in `src/config.ts`, see README.md)
- [ ] Florida roofing contractor license number, if he wants it displayed in
      the footer (recommended for trust)
- [ ] Google Business profile URL once created (unlocks the reviews section,
      see README.md)
