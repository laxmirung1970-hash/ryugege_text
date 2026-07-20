# Development, Verification and Deployment

## Prerequisites

- Node.js 22 (matches GitHub Actions)
- npm
- Git
- GitHub CLI for publishing workflows

Install exactly from the lockfile:

```bash
npm ci
```

## Local development

```bash
npm run dev
```

Default URL: <http://localhost:3000/ryugege/>

To use another port:

```bash
npm run dev -- --port 3002
```

For access from another device on the LAN, use the computer's current IPv4 address and ensure the server/firewall permits it. The address can change; do not record a LAN IP as a production URL.

## Required checks

Run before every commit intended for deployment:

```bash
npm run check
git diff --check
```

`npm run check` performs:

1. ESLint
2. `next typegen`
3. `tsc --noEmit`
4. optimized production build

Also verify the GitHub Pages path mode:

```powershell
$env:GITHUB_PAGES='true'
npm run build
```

The expected routes are all marked static (`○`).

## Production-style local server

After `npm run build`:

```bash
npm start
```

`scripts/serve-static.mjs` serves `out/` and implements:

- GET and HEAD only
- HTML `no-cache`
- immutable cache only for hashed `/_next/static/` assets
- revalidation for stable public assets
- ETag and Last-Modified
- MP4 byte ranges (`206 Partial Content`)

## Browser smoke checklist

### Main page

- Hero image loads and changes slide
- Mobile selects a `-mobile.webp` source; medium width selects `-tablet.webp`
- first hero image is eager/high priority
- navigation dropdown and mobile menu work
- trip cards point to the correct route or LINE
- TikTok preview is visible and link opens the correct video
- inquiry form validation works and generated LINE message contains the entered brief

### Xi'an

- all 9 highlight cards render
- Read More opens the correct modal/drawer
- backdrop/close control/Escape close it and focus remains usable
- vehicle badges describe customers, with guide clarification visible
- itinerary meals align B/L/D columns
- price anchor `#price` works
- customer gallery images load without distortion

### Under Construction

- Chaozhou, Guangzhou and Yunnan titles contain the brand suffix only once
- poster appears before video
- back link works under local and GitHub Pages base paths

## GitHub Pages deployment

Workflow: `.github/workflows/deploy-github-pages.yml`

Trigger:

- push to `master`
- manual `workflow_dispatch`

Pipeline:

1. checkout
2. Node 22 setup
3. `npm ci`
4. `npm run check` with `GITHUB_PAGES=true`
5. upload `out/`
6. deploy with `actions/deploy-pages`

Production URL:

<https://laxmirung1970-hash.github.io/ryugege_text/ryugege/>

After merge/push, verify the Actions run and then inspect the production page. GitHub Pages/CDN may briefly show the previous version; use a hard refresh or a temporary query such as `?v=<commit>` for verification.

## Git hygiene

Never commit:

- `tmp/`
- `.next/`
- `out/`
- `*.log`
- `.env*`
- downloaded source files outside the curated asset folders

Before staging:

```bash
git status -sb
git diff --check
```

Review image deletions and replacements carefully. A renamed binary appears as delete + add until Git detects the rename.

## Adding or replacing media

1. Inspect actual dimensions and format
2. Crop/resize for the display ratio, preserving important subjects
3. Convert to WebP and strip metadata
4. Use descriptive lowercase filenames
5. Import through `media.ts` or the owning data/component file
6. Add accurate alt text
7. Verify mobile/tablet/desktop
8. Confirm usage with `rg` before deleting the old asset

Recommended hero variants:

- 2560×1440 Desktop
- 1536×864 Tablet
- 768×432 Mobile

Avoid shipping a 2560px image to a phone when a responsive source can be provided.

## Troubleshooting

### Local IP cannot be reached

- confirm the dev/static server process is running
- confirm the port matches the URL
- test `http://127.0.0.1:<port>/ryugege/` on the host first
- then verify current IPv4 address and firewall access

### GitHub page shows old content

- confirm the branch was merged/pushed to `master`
- inspect GitHub Actions status
- verify the deployed commit
- hard refresh or use a cache-busting query

### Images work locally but not on GitHub Pages

- check for a hardcoded root path
- use static imports, `withSiteBasePath`, or `tripRouteHref`
- rebuild with `GITHUB_PAGES=true` and inspect `out/`

### Metadata title contains the brand twice

Route metadata should provide only the page-specific title. The root metadata template adds `| Ryu Gege Tour` automatically.
