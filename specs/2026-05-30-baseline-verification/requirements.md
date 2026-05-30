# Requirements

## Scope

Phase 0: Baseline.

Goal: prove current repo can boot, build, and expose current routes before feature work.

## Decisions

- Feature name: `baseline-verification`.
- Branch: `codex/phase-0-baseline`.
- Scope: verify only.
- No product behavior changes.
- No architecture changes.
- No new dependencies.

## Context

Mission: minimal Markdown pastebin. Fast create, permanent share URL, rendered read view, quiet UI, low ops.

Stack locked:

- Astro latest stable.
- TypeScript.
- Bun.
- Cloudflare Workers.
- Cloudflare D1.
- Cloudflare KV.
- oxlint.
- oxfmt.

Environment:

- Windows 11.
- Prefer PowerShell-compatible commands.
- No Docker assumption.
- No WSL assumption.

## Constraints

- Keep changes documentation-only unless validation exposes blocker.
- If blocker appears, document it before fix work.
- Do one phase at time.
- Stop after validation.
