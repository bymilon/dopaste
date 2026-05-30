# Roadmap

High-level order. Micro phases. Each phase small, shippable, agent-friendly.

## Phase 0: Baseline

- Confirm app boots.
- Confirm build passes.
- Confirm current routes.

## Phase 1: Paste Model

- Define paste type.
- Define paste validation.
- Define paste storage contract.

## Phase 2: Create Paste

- Build minimal editor form.
- Add create action/API.
- Persist paste in D1.
- Redirect to paste URL.

## Phase 3: Read Paste

- Add paste read route.
- Fetch paste by ID/slug.
- Render Markdown read-only.
- Handle missing paste.

## Phase 4: Share UX

- Show canonical URL.
- Add copy link button.
- Keep page mobile-friendly.

## Phase 5: Cache

- Add KV metadata/cache where useful.
- Keep D1 source of truth.
- Avoid premature caching.

## Phase 6: Hardening

- Add input limits.
- Add safe Markdown rendering.
- Add error states.
- Add basic tests.

## Phase 7: Deploy

- Verify Cloudflare bindings.
- Build for Workers.
- Document deploy command.

## Rule

Do one phase at time. Stop after validation.
