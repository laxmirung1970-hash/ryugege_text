# RyuGeGe Tour — Agent Handoff

Everything an AI agent needs to continue this project. Read `CLAUDE.md` and `AGENTS.md` first (framework rules), then this file (current state + decisions).

Last updated: 2026-07-16 · Latest commit at writing: `52786fe`

---

## 1. What this is

Static marketing site for **RyuGeGe Tour** — founder-led China private business/leisure tours + Thai-Chinese interpretation. Thai-language. **Pre-launch** (first trip Sept 2026). No backend; every contact CTA and the inquiry form open the LINE Official account with a prefilled message.

- Owner: **ริว (Ryu Puriwat)**, solo founder year 1. Advisor: Phoenix.
- Live: https://laxmirung1970-hash.github.io/ryugege_text/ryugege/
- Repo: https://github.com/laxmirung1970-hash/ryugege_text

## 2. Stack & commands

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 (no config file; tokens in `globals.css`) · TypeScript · static export.

```bash
npm run dev     # dev server :3000
npm run build   # static export -> ./out
npm run lint    # eslint
```

No test suite. Verify by build + browsing `./out` or the preview browser.

## 3. Deploy

Push to `master` → GitHub Actions (`.github/workflows/deploy-github-pages.yml`) builds with `GITHUB_PAGES=true` and publishes `./out` to GitHub Pages.

- `next.config.ts`: `output:"export"`, `trailingSlash:true`, `images.unoptimized:true`. Under `GITHUB_PAGES=true` it sets `basePath`/`assetPrefix` = `/ryugege_text`.
- **Internal links must be relative** (e.g. `./xian/`, `../`, `#trips`) or they break under the base path.
- GitHub Pages has a CDN cache (~minutes). After deploy, hard-refresh (`Ctrl+Shift+R`) or add `?v=` to bust. "Old page still showing" is almost always this cache, not a build failure — confirm with the Actions run status / the GitHub API (`/repos/<owner>/<repo>/actions/runs`).

## 4. File map (`src/app/`)

| File | Role |
|---|---|
| `page.tsx` | Root splash — redirects/links to `./ryugege/`. |
| `layout.tsx` | Fonts (Prompt heading, Sarabun body, both `thai` subset), metadata. |
| `globals.css` | **Design tokens** in `@theme` + micro-interaction CSS. Edit here to change theme colors globally. |
| `ryugege/page.tsx` | **Main landing page** (server component). All sections + copy data arrays. Edit this for most content/UX work. |
| `ryugege/xian/page.tsx` | Xi'an detail page (server). Template for other destination detail pages. |
| `ryugege/InquiryForm.tsx` | `"use client"` — lead form → opens LINE with `?text=` (no network). |
| `ryugege/HeroCarousel.tsx` | `"use client"` — full-bleed hero carousel, renders `children` overlay. |
| `ryugege/SiteHeader.tsx` | `"use client"` — sticky header, dropdown nav, scroll-spy, mobile panel. |
| `ryugege/PageEffects.tsx` | `"use client"` — scroll progress bar + IntersectionObserver scroll-reveal. Mounted once in `page.tsx`. |
| `ryugege/icons.tsx` | Stroke icon set (`<Icon name=... />`). Add new icons to the `paths` map + `IconName` union. |
| `ryugege/constants.ts` | LINE Official URL and inquiry dropdown options (trip types, cities, budgets). |

## 5. Design system

- **One warm cream canvas** for the whole page; brand red + gold as accents; **three intentional dark ("espresso") moments only**: hero, founder, final CTA card. Do not reintroduce stacked full-width color bands (reads as old WordPress).
- Tokens (in `globals.css @theme`): `tour-red #ef2f37`, `maroon #8b1118`, `gold #f4c35f`/`gold-light #ffe09a`, `espresso #1b1512`, `charcoal`, `ink`/`ink-soft`, `cream #faf6ef`/`cream-deep`, `sand`, `line-green #06c755`. Shadows `--shadow-soft/-lift/-cta/-line`. Use utilities (`bg-tour-red`, `text-gold`, `border-sand`, …) — avoid new hardcoded hex.
- Radii: `rounded-2xl`/`rounded-3xl`. Cards: soft shadow, hover `-translate-y-1.5`.
- Section headers: editorial `SectionLabel`/`SplitHeading`/`CenteredHeading` with a numeric index. **If you add/remove a section on the main page, renumber the `index=` props** (currently 01 Problem → 10 FAQ).
- Fonts: keep `thai` subset when changing.
- Micro-interactions: scroll progress bar, `.reveal`/`.reveal-stagger` classes (progressive enhancement — content stays visible if JS off), destination marquee, `.text-gradient-gold`, CTA hover-lift. All respect `prefers-reduced-motion`.

## 6. Trips model (main page)

`tripCards: TripCard[]` in `page.tsx`. Type: `{ city, kind, title, subtitle, description, tags[], image, price: string|null, href? }`.

- **Whole card is clickable** via a stretched overlay anchor (`<a className="absolute inset-0 z-10">`) — the CTA text is a `span`, not a nested anchor. `href` → detail page; no `href` → LINE (opens new tab).
- `price` shows "เริ่มต้น <price> / ท่าน"; `null` shows "ราคาตามการออกแบบทริป".

Current 6 cards: **Xi'an** (culture, ฿20,900, `href:"./xian/"`) · **Chaozhou/แต้จิ๋ว** (culture, price null, no detail page yet) · **Guangzhou** (Canton Fair + factory, price null) · **Yunnan** (hybrid, price null) · **Private Tour** (private leisure, price null) · **Business Tour** (custom business, price null).

When you change destinations, **sync all of these**: trip cards, nav dropdown children (`navItems`), `marqueeWords`, footer "Service Areas", JSON-LD `areaServed`, and `constants.ts` `targetCities`/`tripTypes`.

## 7. Xi'an detail page — the template

`ryugege/xian/page.tsx` sections: compact header → espresso hero (bg image + meta pills) → Trip Highlights → Private Car (vehicle cards) → Itinerary (5D4N day cards) → Summary table → **Rate** (4 tier cards) → Included/Excluded → CTA → footer.

Current Xi'an specification (from `Untitled document.pdf`, 2026-07-16): accepts groups from **2 people**. Vehicle guide: 2 pax / 5 seats; 4 pax / 9 seats; 6 pax / 14 seats; 8–10 pax / 19 seats. Itinerary: D1 arrival + Tang West Market Hotel; D2 Terracotta Army + Huaqing Palace + Datang Xishi; D3 Yong Chun martial arts + Chang'an Twelve Hours + Bell/Drum Tower; D4 Xi'an Ski + Da Ci'en Temple/Joy City + Datang pedestrian street; D5 City God Temple + Muslim Street + onsen/spa + departure. Rate tiers: 3–4 pax / 7-seat → ฿28,900; 5–7 pax / 14-seat → ฿25,900; 8–10 pax / 19-seat → ฿22,900; 10+ pax / 19-seat+ → ฿20,900; single supplement +฿5,000. Adult = child 2–12. **Excludes airfare.** The PDF provides no 2-person rate; do not invent one.

**To add a new destination detail page** (e.g. Chaozhou, Yunnan): copy `xian/page.tsx` to `ryugege/<city>/page.tsx`, swap copy/itinerary/images/rate data, then set that trip card's `href:"./<city>/"`. Route is generated automatically by static export.

## 8. Decisions & constraints — HANDLE WITH CARE

From the owner's marketing plan (see `memory/marketing-plan-constraints.md`). These prevent overclaiming on a pre-launch site:

- **Guide license (ใบมัคคุเทศก์ / บัตรบรอนซ์เงิน): NOT yet obtained** (Sept 2026 milestone). Do not claim licensed; this status is intentionally not displayed in the current marketing copy.
- **Pricing not finalized in general** (open decision pending COGS). Only Xi'an has a real rate card. For other cities, use "ราคาตามการออกแบบทริป" or the plan's MVP ranges (Business ฿25–28K, Leisure ฿15–18K) **with a disclaimer**. Don't invent confirmed prices.
- **Testimonials / review clips are genuinely empty** (no trips run yet). Keep as slots. **Never fabricate reviews, ratings, or client counts.**
- **Brand voice** — YES: โอกาสธุรกิจ, การประสานงาน (facilitation), เจาะลึก, ประสบการณ์ท้องถิ่น, Private Business Tour. NO: ทัวร์ราคาถูก, รับประกันกำไร, รับผิดชอบการจัดซื้อทั้งหมด.
- Founder facts that ARE safe: ป.โท 2 ใบ (วิศวกรรมการบิน NWU ซีอาน + เทคโนโลยีสื่อสังคม ม.รังสิต), อยู่จีน 5+ ปี, มีประสบการณ์ติดต่อประสานงานกับจีน 10+ ปี, จีนระดับเจ้าของภาษา + Guanxi, ล่ามจีน-ไทย-อังกฤษ.
- Geography focus: Xi'an (leisure), Guangzhou (business/Canton Fair), Yunnan (hybrid), plus Chaozhou (Teochew roots). Old Yiwu/Foshan/Shenzhen were removed on purpose — don't reintroduce.

## 9. Known placeholders / pending work

1. **LINE Official is live:** all contact CTAs use `https://lin.ee/nxKOKBTR` from `constants.ts`.
2. Images are mostly Unsplash. Xi'an + Chaozhou cards use real city photos; hero/other cards + Xi'an vehicle cards are placeholders → replace with real Ryu Gege/city photos.
3. **Chaozhou** has a trip card but **no detail page and no rate** yet.
4. **Guangzhou / Yunnan** have no detail pages (build from the Xi'an template).
5. Marketing plan wants **GA4 + Facebook Pixel** (retargeting) — not embedded yet (works with static export via inline script in `layout.tsx`).
6. Real testimonials/clips once the first trip runs (Sept 2026).

## 10. Gotchas

- Static export: no server actions/route handlers/API. Client interactivity only.
- Adding/removing a main-page section → renumber `index=` props.
- New destination → sync the 6 places listed in §6.
- Preview screenshots often time out because external Unsplash images stall the load event — verify via DOM/`get_page_text`/`javascript_exec` instead; the page itself is fine.
- Commit style: Conventional Commits; end body with the `Co-Authored-By: Claude ...` trailer.
