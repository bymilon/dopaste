# Validation: Cache

How to know Phase 5 is complete and ready to merge.

---

## Manual Testing Checklist

### Setup
- [ ] Deploy to Cloudflare preview to test CF cache
- [ ] Create test paste (note ID)

### CF Cache Headers
- [ ] First request to `/{id}`: check Response Headers → `Cache-Control: public, max-age=31536000, immutable` present
- [ ] Second request (refresh after a few seconds): check `cf-cache-status: HIT`
- [ ] Home/editor routes have NO long‑term cache headers (check headers)

### KV Cache (If Implemented)
- [ ] After first read, verify KV has key `paste:${id}`
- [ ] KV TTL set to 31536000 seconds
- [ ] KV value is correct (full rendered HTML or paste data)
- [ ] Second request uses KV (verify with logs or debug code)

### Regression Check
- [ ] Paste creation still works
- [ ] Paste read still works
- [ ] Phase 4 share UX still works
- [ ] No console errors
- [ ] Home page loads correctly

---

## Automated Checks

### Build
- [ ] `bun run build` passes
- [ ] `tsc --noEmit` passes (strict mode)

### Linting
- [ ] `bunx oxlint src/` returns no errors/warnings
- [ ] `bunx oxfmt --check src/` passes

---

## Code Review

### Requirements Coverage
- [ ] All acceptance criteria met
- [ ] D1 remains source of truth (no writes to KV on create)
- [ ] Only read routes cached
- [ ] Cache headers correct

### Architecture
- [ ] Uses Cloudflare KV correctly (if implemented)
- [ ] Cache headers set via Astro response API
- [ ] No breaking changes to existing code

---

## Merge Readiness
- [ ] All manual/automated tests pass
- [ ] Code review approved
- [ ] No regressions
- [ ] Commit message: "Phase 5: Add brutal 1‑year cache for paste reads"
- [ ] Ready for Phase 6 (Hardening)
