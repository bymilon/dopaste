# Tech Stack

Current stack locked unless explicit project decision changes it.

## Runtime

- Astro latest stable.
- TypeScript.
- Cloudflare Workers.

## Data

- Cloudflare D1 for persistence.
- Cloudflare KV for cache/metadata.

## Tooling

- Bun for package manager/scripts.
- oxlint for lint.
- oxfmt for format.

## Constraints

- Edge-first.
- Serverless.
- Windows-friendly dev.
- PowerShell-compatible commands.
- No Docker assumption.
- No WSL assumption.

## Dependency Rule

- Prefer existing dependencies.
- Add package only when required.
- New package via Bun.

## Design System Rules

- Use semantic CSS tokens from `src/styles/global.css` for surfaces, borders, type, radius, and status colors.
- Build form fields from `FormField` plus `Input` or `Textarea`; both share the `ui-control-shell` focus and disabled states.
- Use `Button` for button actions and `ButtonLink` for navigational actions.
- Button variants are `primary`, `secondary`, `ghost`, and `destructive`; choose the lowest-emphasis variant that still communicates the action.
- Do not use raw Tailwind gray palette utilities such as `zinc-*`, `slate-*`, `neutral-*`, or `gray-*` in application components.
- Record content-page contrast checks in `specs/design-contrast-audit.md` when tokens or page templates change.
