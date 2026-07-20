# CLAUDE.md

Guidance for Claude Code and other coding agents working in this repository.

## Mandatory reading

1. Read `AGENTS.md` first.
2. This project uses Next.js 16. Before changing framework behavior, read the relevant guide under `node_modules/next/dist/docs/` and follow current deprecation guidance.
3. Read `docs/AGENT_HANDOFF.md` and the documents it links before editing content or architecture.

## Project summary

Ryu Gege Tour is a Thai-language static marketing and lead-generation website for China business trips, factory/fair visits, interpretation and private leisure tours.

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4
- static export only; no backend/database/auth/API routes
- GitHub Pages base path `/ryugege_text`
- contact and inquiry flow opens LINE Official
- main landing page: `/ryugege/`
- complete destination page: `/ryugege/xian/`
- Chaozhou, Guangzhou and Yunnan currently use a shared Under Construction page

## Commands

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run check
npm start
```

Before committing deployable work, run `npm run check`, a `GITHUB_PAGES=true` build and `git diff --check`.

## Core rules

- Preserve unrelated user changes in a dirty worktree.
- Use `apply_patch` for file edits.
- Keep Client Components limited to interaction.
- Keep copy/configuration in `home-data.ts`, `constants.ts`, `media.ts` and Xi'an data files rather than duplicating it in JSX.
- Use `withSiteBasePath` and `tripRouteHref` where required; root-absolute paths can break on GitHub Pages.
- Do not invent prices, testimonials, credentials, licenses, customer counts or business outcomes.
- Spell the public brand **Ryu Gege**.
- Do not commit `tmp/`, `.next/`, `out/`, logs or environment files.

## Documentation map

- `docs/AGENT_HANDOFF.md` — current state and safe continuation
- `docs/PROJECT_OVERVIEW.md` — product, audience, routes and content journey
- `docs/ARCHITECTURE.md` — code ownership, client boundaries, paths and media
- `docs/CONTENT_MODEL.md` — current home and Xi'an product data
- `docs/DEVELOPMENT_AND_DEPLOYMENT.md` — local workflow, checks and GitHub Pages
- `docs/redesign-reference.md` — historical blueprint only
