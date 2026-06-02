# Plan: Cache

Numbered task groups. Each shippable and testable.

## 1. CF Cache Headers on Read View

**Depends on**: Phase 3 (read route finalized)

1. Edit `src/pages/[id].astro` to add cache headers
2. Set:
   - `Cache-Control: public, max-age=31536000, immutable`
   - Optional: `ETag` (hash of paste content or ID + timestamp)
   - Optional: `Last-Modified` (paste created_at)
3. Ensure NO cache headers on home/editor routes
4. Verify headers in dev (Network tab → Response Headers)

**Acceptance**:
- Read view response has correct cache headers
- Home/editor have no cache headers (or `no-cache`)
- Headers visible in dev tools Network tab

---

## 2. KV Secondary Cache (Optional)

**Depends on**: Task 1 (headers working)

1. Add KV binding to `wrangler.jsonc`/`astro.config.mjs`
2. Add functions to `src/features/pastes/storage.ts`:
   - `getPasteFromKV(id)` → Promise<string | null>
   - `putPasteToKV(id, html)` → Promise<void>
3. Update read route: try KV first → fallback to D1 → write to KV
4. Use KV TTL of 31536000 seconds (1 year)
5. Keep D1 as source of truth (read path only uses KV for speed)

**Acceptance**:
- KV read/write works without errors
- KV TTL set correctly
- Fallback to D1 when KV miss
- No changes to write path (still writes to D1 only)

---

## 3. Integration Test

**Depends on**: Tasks 1 + 2 (if using KV)

1. Create test paste
2. First request to `/{id}` → check `cf-cache-status: MISS` (or `DYNAMIC` locally)
3. Second request (wait a few sec, refresh) → check `cf-cache-status: HIT` (in production/preview)
4. Test KV flow (if used): verify KV has paste data after first request
5. Verify home page still works without caching
6. Verify Phase 4 features still work (copy link button, etc.)
7. Verify no TypeScript errors

**Acceptance**:
- CF cache headers present and correct
- KV operations work (if implemented)
- No regressions
- All manual tests pass

---

## 4. Cleanup & Rollback

**Depends on**: Task 3 passing

1. Remove any test code/comments
2. Confirm git status (only Phase 5 files modified)
3. Commit message: "Phase 5: Add brutal 1‑year cache for paste reads"
4. Ready for merge

**Acceptance**:
- Branch clean
- No regressions
- Ready for Phase 6 (Hardening)
