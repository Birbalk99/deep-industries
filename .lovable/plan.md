# Deepindustries — Graphite Cinema build

A dark, cinematic, Apple-grade marketing site for an automation-machine manufacturer. Built on TanStack Start with file-based routes, Inter + JetBrains Mono, scroll-driven reveals, and generated machine photography.

## Pages & routes

```
src/routes/
  __root.tsx         shared dark shell, sticky blurred nav, footer
  index.tsx          / — homepage
  about.tsx          /about — story, philosophy, facility
  products.index.tsx /products — grid of machines
  products.$slug.tsx /products/:slug — detail page
  contact.tsx        /contact — form + HQ info
```

Each route gets its own `head()` (title, description, og:title, og:description). Product detail also sets og:image to the machine hero.

## Design system (src/styles.css)

Port the prototype's tokens verbatim into the project's `@theme inline` + `:root`/`.dark` token system:

- `--background: 240 10% 3.5%`, `--foreground: 0 0% 98%`
- `--muted: 240 5% 60%`, `--border: 0 0% 100% / 0.1`
- `--accent: 199 89% 48%` (electric blue)
- Fonts: Inter (400/700/800) display, JetBrains Mono captions — loaded via `<link>` in `__root.tsx` head per Tailwind v4 rule
- Custom keyframe `reveal-up` + `.animate-reveal` utility, easing `cubic-bezier(0.16, 1, 0.3, 1)`

Default to dark mode (apply `.dark` on `<html>`).

## Homepage (index)

Matches prototype exactly: full-viewport hero with cinematic machine image + gradient overlay, scroll-bounce indicator, then alternating machine showcase (3 machines, image/copy swap sides), capabilities 3-col grid with hairline dividers, client logo strip, footer CTA. Scroll-reveal via IntersectionObserver applying `.animate-reveal`.

## Products page

Three-column refined grid of machine cards. Hover: slow scale (1.0 → 1.02) on the image tile, accent-colored caption fade-in. Each card is a `<Link to="/products/$slug">`.

## Product detail

- Hero: large square machine image, name, one-line tagline, two CTA buttons (Request quote / Download spec)
- Overview paragraph
- Spec grid (2×N) using mono labels + bold values
- Gallery: 3 secondary images, scroll-reveal staggered
- "Related machines" strip (2 cards)
- Shared footer CTA

Data: single `src/data/machines.ts` exporting 4–5 machines (slug, name, tagline, overview, specs array, hero prompt, gallery prompts, related slugs). Routes read from it directly — no backend needed.

## Shared components

```
src/components/
  site-nav.tsx        sticky blurred nav with 4 links, accent square logo mark
  site-footer.tsx     CTA + contact + copyright
  machine-card.tsx    grid card used on /products and "related"
  reveal.tsx          wraps children, toggles .animate-reveal on intersect
```

Nav uses `<Link activeProps={{ className: 'text-accent' }}>`. Wordmark "DEEPINDUSTRIES" with accent square.

## Imagery

Every `data-lov-image-placeholder` becomes a `generate_image` call saved to `src/assets/` and imported. Targets:
- Hero (1920×1080) — cinematic robot arm, low-key lighting
- Hyperion-G5 (1200×1200) — dark CNC milling machine
- Omniscan AI (1200×1200) — optical sensor unit with blue indicators
- 2 additional products for the grid (CNC press, conveyor cell)
- Facility shot for About (1600×900)
- Per-product gallery shots (3 each, 1024×1024) generated as needed

Use `model: "standard"` for hero, `fast` for gallery.

## Contact page

Two-column: left = headline + HQ address/phone/email in mono labels; right = form (name, company, email, message) styled with dark inputs, accent focus ring, hairline borders. Form submit is a no-op `toast.success` for now (sonner already in template).

## About page

- Editorial intro statement
- 3-column "Principles" with mono numerals
- Facility image full-bleed
- Timeline/numbers strip (Founded, Engineers, Machines deployed, Countries)

## Tech notes

- All colors via semantic tokens — no `text-white`/`bg-black` hex literals in components
- No external CSS @import for fonts (use `<link>` in `__root.tsx`)
- `index.tsx` placeholder replaced fully
- Tailwind v4 utility tokens drive everything; mono font as `font-mono`
- Scroll reveal: lightweight IntersectionObserver hook, no framer-motion needed for v1

## Out of scope (this build)

- CMS / backend
- Real client logos (text wordmarks shown grayscale)
- Live form submission backend
- i18n
