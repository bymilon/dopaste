# Dopaste

Minimal Markdown pastebin. Fast writing, permanent links, no accounts.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/bymilon/dopaste)

[![Astro](https://img.shields.io/badge/Astro-6-ff5d01.svg)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6.svg)](https://www.typescriptlang.org/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-f38020.svg)](https://workers.cloudflare.com/)
[![Bun](https://img.shields.io/badge/package_manager-Bun-f9f1e1.svg)](https://bun.sh/)

Dopaste is a small, edge-first pastebin for people who want to write Markdown, save it quickly, and share a read-only URL. The product stays intentionally narrow: no accounts, no feeds, no teams, no publishing-suite scope.

## Features

- Markdown-first paste creation with a quiet dark writing surface.
- Anonymous sharing through permanent read-only paste URLs.
- Mobile-friendly editor and content pages.
- Server-side validation with a 64 KiB paste limit.
- Cloudflare Workers target with D1 persistence and KV-ready configuration.
- Token-backed UI primitives for buttons, fields, surfaces, and content layout.

## Status

- Current scope: Markdown paste creation and static product/legal pages.
- Persistence: Cloudflare D1 through the paste storage slice.
- Not included: accounts, private pastes, social discovery, team workspaces, or a complex editor.
- Release readiness: add `LICENSE`, `CONTRIBUTING.md`, and `SECURITY.md` before a public OSS launch.

## Stack

- Astro 6
- TypeScript 6
- Tailwind CSS 4
- Cloudflare Workers
- Cloudflare D1
- Cloudflare KV
- Bun
- oxlint

## Quick Start

```bash
git clone git@github.com:bymilon/dopaste.git
cd dopaste
bun install
bun run dev
```

Open `http://localhost:4321`.

## Scripts

```bash
bun run dev
bun run build
bun run preview
bun run lint
bun run db:migrate:local
bun run db:migrate:remote
```

## Project Structure

```txt
src/
  components/
    ui/                Shared UI primitives
  features/
    pastes/            Paste model, storage, key generation, editor UI
  layouts/             Base and content page layouts
  pages/               Astro routes
  styles/
    global.css         Tailwind import, tokens, component classes

migrations/            Cloudflare D1 schema migrations
scripts/               Repository quality checks
specs/                 Product, technical, and verification notes
```

## Design System

The interface uses semantic tokens in `src/styles/global.css` rather than direct neutral color utilities in application components.

- Surfaces: `--surface-primary`, `--surface-secondary`, `--surface-elevated`, `--surface-overlay`
- Text: `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-disabled`
- States: `--accent`, `--success`, `--warning`, `--danger`
- Shared primitives: `Button`, `ButtonLink`, `FormField`, `Input`, `Textarea`, `Surface`, `Divider`

Run `bun run lint` before shipping UI changes. The lint command includes `scripts/check-color-classes.mjs`, which guards against direct `zinc-*`, `slate-*`, `neutral-*`, and `gray-*` utility classes in application files.

## Cloudflare Setup

The project targets Cloudflare Workers through `@astrojs/cloudflare`. Configure bindings in `wrangler.jsonc` and apply D1 migrations before testing persistence against a real database.

```bash
bun run db:migrate:local
bun run dev
```

Use the remote migration command only when the target Cloudflare project and database binding are correct.

## Roadmap

- Add a public license and contributor docs.
- Add CI for Bun install, lint, and production build verification.
- Add paste read routes with rendered Markdown output.
- Add visual release screenshots to the repository root or docs.
- Re-run accessibility and contrast audits before the first public release.

Tracked in [TODO.md](TODO.md) and `specs/`.

## Contributing

Contributions are welcome after the OSS release files are added. Until then, keep changes focused:

- Prefer the smallest diff that solves the issue.
- Keep feature logic inside the owning vertical slice.
- Reuse existing UI primitives and semantic tokens.
- Include screenshots for visible UI changes.
- Run build and lint checks before opening a PR.

## Support

- Follow updates: [x.com/milonspace](https://x.com/milonspace)
- Source owner: [github.com/bymilon](https://github.com/bymilon)

## License

No license file is present yet. Add one before publishing this repository as open source.
