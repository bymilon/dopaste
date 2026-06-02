# Phase 5: Cache

**Feature**: Brutal caching strategy (1‑year TTL) to get consistent `cf-cache-status: HIT` for paste read views; keep D1 as source of truth.

## Scope

- Set aggressive cache headers on paste read route (`/[id]`)
  - `Cache-Control: public, max-age=31536000, immutable` (1‑year TTL)
- Use Cloudflare KV as secondary cache for paste data (optional, but keep D1 as source of truth)
- DO NOT cache home page or editor
- Ensure cache invalidation strategy exists (for future use, even if not used now)
- Keep minimal; no premature optimization
- No changes to Phase 1–4 features

## Design Decisions

### Cache Strategy

- **Brutal cache for read views**: Pastes are immutable once created, so 1‑year TTL is safe
- Use `public, max-age=31536000, immutable` header on read view responses
- Add `ETag` or `Last-Modified` headers (optional but recommended for validation)
- Home/editor routes must NOT be cached

### KV Cache (Optional)

- Use KV to cache full rendered HTML or paste data
- KV key: `paste:${id}`
- KV value: rendered HTML (or paste object)
- KV TTL: 1 year same as CF cache
- On read request: try KV first, fallback to D1, then write to KV
- Keep D1 as source of truth (always write to D1 first, never KV alone)

### Data Flow

- Read request → check CF cache → if HIT, serve from edge
- If MISS: check KV → if exists serve from KV, refresh CF cache
- If KV miss: query D1 → render → write to KV → serve → set CF cache header

## Context

**Mission alignment**:
- Speed: CF edge cache makes global reads fast
- Simplicity: immutable pastes mean no cache invalidation complexity
- Low ops: minimal changes needed

**Technical constraints (from tech-stack.md)**:
- Cloudflare Workers + Astro
- D1 (source of truth)
- KV (cache/metadata)
- No new dependencies

**Assumptions**:
- Pastes are immutable after creation (no edit/delete features in current roadmap)
- Cloudflare cache will respect headers
- KV operations are fast enough for edge

## Acceptance Criteria

- ✅ Paste read responses have `Cache-Control: public, max-age=31536000, immutable`
- ✅ Paste read route gets consistent `cf-cache-status: HIT` after first request
- ✅ Home/editor routes NOT cached
- ✅ D1 remains source of truth
- ✅ KV used as secondary cache (optional but preferred)
- ✅ No regressions in Phase 1–4 features
- ✅ Build passes; no TypeScript errors
