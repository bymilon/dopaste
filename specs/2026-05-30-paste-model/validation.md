# Validation

## Merge Gate

Phase 1 spec can merge when paste model decisions are clear enough for implementation.

## Required Checks

1. Feature spec directory exists.
2. Plan has numbered task groups.
3. Requirements define type, validation, storage contract.
4. Validation defines merge criteria.
5. Spec follows mission: minimal pastebin, no accounts, no publishing scope.
6. Spec follows stack: Astro, TypeScript, Cloudflare Workers, D1, KV, Bun.

## Evidence To Record

- Branch name.
- Files created.
- Chosen ID strategy.
- Scope decision.
- Any deferred decisions.

## Results

Date: 2026-05-30.

Branch: `codex/phase-1-paste-model`.

Files:

- `specs/2026-05-30-paste-model/plan.md`.
- `specs/2026-05-30-paste-model/requirements.md`.
- `specs/2026-05-30-paste-model/validation.md`.

Context checked:

- `specs/mission.md`.
- `specs/tech-stack.md`.
- `specs/roadmap.md`.
- Current app structure: `src/pages/index.astro`, `src/styles/global.css`, `src/env.d.ts`.
- Mentioned external file: `D:/PROJECTS/PHOTOSAPI/core/key.ts`.

Decisions:

- ID strategy: use `D:/PROJECTS/PHOTOSAPI/core/key.ts` pattern.
- External `key.ts` time-derived key pattern is required reference.
- Scope: spec-only.
- Paste model: `id`, `markdown`, `createdAt`.
- Public read model: `id`, `markdown`, `createdAt`.
- Markdown size limit: 64 KiB UTF-8.
- ID format: `key.ts` alphabet string, accepted pattern `^[abcdefghjkmnpqrstuvwxyz23456789]+$`.
- Storage: D1 source of truth with `id`, `markdown`, `created_at`.
- Contract: `createPaste(input)`, `getPasteById(id)`.
- KV: optional future metadata/cache only.

Deferred:

- Exact implementation file paths.
- D1 migration filename.
- Concrete validator implementation.
- Route/API shape for Phase 2.

## Pass Criteria

- Paste fields are minimal and sufficient. Passed.
- Validation rules are explicit. Passed.
- D1 source-of-truth boundary is explicit. Passed.
- KV role is non-authoritative. Passed.
- Phase 2 can implement create paste without reopening model basics. Passed.

## Fail Criteria

- Model requires accounts.
- Model depends on title slugs.
- Storage contract bypasses D1.
- Validation behavior unclear.
- Spec introduces new dependency without need.
