# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Read `AGENTS.md` first.** This is Next.js 16 — APIs, conventions, and file structure may differ from training data. Before writing framework code, read the relevant guide under `node_modules/next/dist/docs/` (`01-app`, `03-architecture`, etc.) and heed deprecation notices.

## What this is

A single-page marketing landing page for **RyuGeGe Tour** — a founder-led China business-trip / factory-visit / Thai-Chinese interpretation service. Content is primarily in **Thai**. There is no backend, database, or auth: the page is fully static and every contact CTA opens the RyuGeGe LINE Official account with a prefilled message.

## Commands

```bash
npm run dev      # local dev server at http://localhost:3000
npm run build    # static export -> ./out  (output: "export")
npm run lint     # eslint (flat config, eslint-config-next)
```

There is **no test suite**. `npm start` is not meaningful here because the site is a static export, not a running Node server — verify production output via `npm run build` and serving `./out`.

## Architecture & structure

- **Static export only.** `next.config.ts` sets `output: "export"`, so there are **no** Server Actions, Route Handlers, API routes, or runtime `next/image` optimization (`images.unoptimized: true`). Any new feature must work as static HTML/CSS/JS. Form submission is client-side only.
- **GitHub Pages deploy.** Push to `master` triggers `.github/workflows/deploy-github-pages.yml`, which builds with `GITHUB_PAGES=true`. That env var switches on `basePath`/`assetPrefix` of `/ryugege_text` in `next.config.ts`. **Consequence:** internal links must be relative (note `page.tsx` links to `./ryugege/`, not `/ryugege`) or they break under the base path. `trailingSlash: true` is on.
- **App Router, two routes:**
  - `src/app/page.tsx` — a thin redirect/splash that links into the real page.
  - `src/app/ryugege/page.tsx` — the actual landing page. **This is the file you edit for UX/UI work.** It's one large server component holding every section (hero, trips, services, clips, testimonials, founder, process, inquiry, FAQ, footer) plus local presentational sub-components (`CtaLink`, `SectionHeading`, `TripCardView`, `HeroVisual`, etc.) and all page copy as in-file `const` data arrays.
  - `src/app/ryugege/InquiryForm.tsx` — the only `"use client"` component. It collects lead fields into local state and, on submit, opens LINE with the answers encoded as `?text=...` (no network request; see `buildLineUrl`).
- **Content vs. layout.** Page copy lives in typed data arrays near the top of `ryugege/page.tsx` (`tripCards`, `serviceCards`, `faqs`, `credentials`, `navItems`, `socialLinks`, etc.) and in `ryugege/constants.ts` (`LINE_URL`, inquiry dropdown options). Editing copy usually means editing these arrays, not JSX.

## Conventions for UX/UI changes

- **Styling is Tailwind v4** (`@import "tailwindcss"` in `globals.css`; `@tailwindcss/postcss`). No `tailwind.config.js` — theme tokens are declared in `globals.css` via `:root` CSS variables and `@theme inline`. The current design hardcodes hex colors inline (e.g. `bg-[#ef2f37]`, `text-[#ffe09a]`) rather than using the tokens. For a full redesign, prefer consolidating the palette into the CSS variables / `@theme` and referencing them, so colors aren't scattered across dozens of arbitrary-value classes.
- **Brand palette (current):** tour red `#ef2f37` / dark `#8b1118`, gold `#f4c35f` / `#ffe09a`, charcoal `#171717`, paper `#fbfbfb`, line/border `#ead6a3`.
- **Fonts** are loaded in `layout.tsx` via `next/font/google`: **Prompt** (headings, exposed as `.font-heading` / `--font-prompt`) and **Sarabun** (body). Both include the `thai` subset — keep that when changing fonts.
- **Imports** use the `@/*` alias → `./src/*` (tsconfig).
- **Contact channel:** every contact CTA uses the LINE Official URL in `ryugege/constants.ts`. Do not add phone or email contact CTAs. Testimonials and review clips are intentionally empty "slots"; trip/hero images are external Unsplash URLs.
