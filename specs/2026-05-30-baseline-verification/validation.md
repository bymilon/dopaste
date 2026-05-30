# Validation

## Merge Gate

Implementation can merge when Phase 0 baseline is known and recorded.

## Required Checks

1. `bun install` completed or existing lock/install state confirmed.
2. Package scripts reviewed.
3. Type check passes, or missing script is recorded.
4. Lint passes, or missing script is recorded.
5. Production build passes.
6. Dev server starts.
7. Home route renders.

## Evidence

Record:

- Commands run.
- Pass/fail result.
- Relevant output summary.
- Any blocker.

## Results

Date: 2026-05-30.

Branch: `codex/phase-0-baseline`.

Routes:

- `src/pages/index.astro` -> `/`.

Tooling:

- `node_modules` present.
- `package.json` scripts: `dev`, `build`, `preview`, `astro`, `db:migrate:local`, `db:migrate:remote`.
- No `typecheck` script.
- No `lint` script.
- Astro config load is implied by successful out-of-sandbox build/dev.

Commands:

- `rtk git branch --show-current` -> `codex/phase-0-baseline`.
- `rtk git status --short` -> docs/spec working tree changes present.
- `rtk powershell -NoProfile -Command Get-ChildItem src/pages -Recurse` -> `src/pages/index.astro`.
- `rtk powershell -NoProfile -Command Test-Path node_modules` -> `True`.
- `rtk bun run build` in sandbox -> failed with `spawn EPERM`.
- `rtk bun run build` outside sandbox -> passed, including Astro config load.
- `bun run dev -- --host 127.0.0.1 --port 4321` in sandbox -> failed with `spawn EPERM`.
- `bun run dev -- --host 127.0.0.1 --port 4321` outside sandbox -> server ready at `http://127.0.0.1:4321/`.
- `Invoke-WebRequest http://127.0.0.1:4321/` -> `200`.
- In-app browser opened `/` -> page rendered. Title: `Astro Pastes - Tailwind v4 Edge Console`. Markdown content present.

Non-blocking Findings:

- Sandbox blocks Astro/Vite config load via child process spawn. Out-of-sandbox build/dev works.
- Missing `typecheck` and `lint` package scripts. Recorded only; Phase 0 scope is verify-only.
- Reviewer agent found wording issues; corrected in this file and `plan.md`.

Decision:

- Phase 0 baseline is known.
- No product behavior fix needed.
- Next phase can begin from this baseline.

## Pass Criteria

- No uninvestigated failure remains. Passed.
- Current routes are understood. Passed.
- Build path is known. Passed.
- Next phase can begin from stable baseline. Passed.

## Fail Criteria

- Build fails with unknown cause.
- App cannot boot.
- Home route cannot render.
- Required environment binding missing and undocumented.
