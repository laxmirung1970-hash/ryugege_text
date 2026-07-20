# Architecture and Code Map

## Runtime model

The application is a Next.js 16 App Router project exported as static files.

```text
typed data + local media
          ↓
React Server Components
          ↓
small Client Components for interaction
          ↓
next build → out/
          ↓
GitHub Pages or scripts/serve-static.mjs
```

There is no backend runtime. Do not add Server Actions, Route Handlers, database calls or secrets that require server execution.

## Framework configuration

`next.config.ts` defines:

- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`
- GitHub Pages `basePath` and `assetPrefix` of `/ryugege_text` only when `GITHUB_PAGES=true`

Because image optimization is unavailable at runtime, committed source images must already be sized and compressed appropriately.

## Directory map

```text
src/app/
  layout.tsx                     global fonts and metadata template
  globals.css                    Tailwind v4 import, design tokens, global effects
  page.tsx                       root entry page
  ryugege/
    page.tsx                     landing-page composition
    home-data.ts                 landing-page content and JSON-LD
    media.ts                     central static media imports
    constants.ts                 LINE URL and form options
    site-paths.ts                GitHub Pages-safe path helpers
    HeroCarousel.tsx             client carousel
    SiteHeader.tsx               client navigation/dropdowns/mobile panel
    InquiryForm.tsx              client form → LINE
    TikTokClipGallery.tsx        client clip interaction
    PageEffects.tsx              client scroll progress and reveal effects
    CtaLink.tsx                  shared presentational component
    SectionLabel.tsx             shared section label
    UnderConstructionPage.tsx    shared destination placeholder page
    xian/
      page.tsx                   Xi'an page composition
      xian-page-data.ts          itinerary, vehicles, rates, inclusions
      highlight-data.ts          9 highlight records
      XianHighlights.tsx         highlight section wrapper
      XianHighlightExplorer.tsx  client cards and modal/drawer behavior
      XianCustomerStories.tsx    real-customer image gallery
public/videos/                  under-construction video and poster
src/assets/                     statically imported brand/site/clip/Xi'an media
scripts/serve-static.mjs        production-style static file server
```

## Server and client boundaries

Default to Server Components. Add `"use client"` only when browser state or events are required.

Current Client Components:

- `HeroCarousel.tsx`
- `SiteHeader.tsx`
- `InquiryForm.tsx`
- `TikTokClipGallery.tsx`
- `PageEffects.tsx`
- `XianHighlightExplorer.tsx`

Keep static copy, metadata, cards and route composition outside client boundaries to minimize JavaScript.

## Data ownership

- Home copy/configuration: `home-data.ts`
- Inquiry choices and contact constants: `constants.ts`
- Media imports: `media.ts`
- Xi'an trip information: `xian/xian-page-data.ts`
- Xi'an highlight copy and images: `xian/highlight-data.ts`

Do not duplicate the same business value in JSX. Update the owning data file and let the component render it.

## URL and base-path rules

GitHub Pages production is nested below `/ryugege_text`.

- Use `tripRouteHref("xian")` for destination routes
- Use `withSiteBasePath("/videos/file.mp4")` for `public/` assets
- Use relative fragment links for sections on the same page
- Static imports handled by Next.js already receive the correct asset path
- Never hardcode `/ryugege/...` for a link that must work on GitHub Pages unless it passes through the helper

## Media pipeline

### Home hero

Each of the 4 slides has:

- Desktop: 2560×1440 WebP
- Tablet: 1536×864 WebP
- Mobile: 768×432 WebP

`HeroCarousel` renders a `<picture>` with media queries. The first slide is eager with high fetch priority; later slides remain lazy and mount progressively.

### Other images

- Use local static imports and `next/image`
- Provide accurate Thai alt text when the image carries meaning
- Use empty alt only for decorative images
- Provide `sizes` when using `fill`
- Check `object-position` at phone, tablet and desktop widths
- Strip metadata and prefer WebP; use AVIF only after verifying browser/build behavior

### Under Construction video

- `public/videos/under-construction.mp4`: 1280×720 H.264, muted autoplay loop
- `public/videos/under-construction-poster.webp`: immediate visual fallback
- Static server supports byte ranges so browsers can seek/load metadata efficiently

## Performance decisions

- Scroll progress updates DOM transform through a ref inside `requestAnimationFrame`; it does not trigger a React render per scroll event
- Prompt loads only weights 600/700 and does not preload; Sarabun loads 400/600/700
- Stable public assets revalidate instead of receiving immutable cache forever
- Only hashed assets under `/_next/static/` receive one-year immutable cache
- HTML uses `no-cache`
- ETag and Last-Modified allow conditional requests

## Styling system

- Tailwind CSS 4; no `tailwind.config.js`
- Global tokens live in `src/app/globals.css`
- Heading font: Prompt
- Body font: Sarabun
- Brand colors: red, dark red/maroon, gold, espresso, cream and LINE green
- Main content uses a warm cream canvas with dark sections reserved for hero/founder/closing moments
- Prefer existing tokens/utilities over new arbitrary hex values

## Accessibility expectations

- Preserve semantic headings and landmarks
- All controls require visible focus states
- Modal/drawer must support keyboard activation, close control, backdrop close and focus recovery
- Respect `prefers-reduced-motion`
- Keep small body copy at WCAG AA contrast; image-credit copy currently uses `text-white/60`
- Do not hide essential content behind JavaScript-only progressive effects

## SEO structure

- Root metadata template appends `| Ryu Gege Tour`
- Route titles must not include the suffix themselves or the brand will duplicate
- Main route emits TravelAgency JSON-LD
- Static export generates crawlable HTML
- Do not add canonical/metadataBase until the owner confirms the primary domain
