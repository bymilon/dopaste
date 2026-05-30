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
