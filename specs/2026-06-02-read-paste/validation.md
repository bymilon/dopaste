# Validation: Read Paste

How to know Phase 3 is complete and ready to merge.

---

## Manual Testing Checklist

### Create Test Data
- [ ] Use Phase 2 create form or API to save a test paste with ID (note it)
- [ ] Paste content: simple Markdown with headers, code block, bold/italic, list

### Valid Paste Read
- [ ] Navigate to `/{id}` with valid ID
- [ ] Page loads (no 5xx errors)
- [ ] Markdown renders as HTML (headers bold, lists bulleted, code block styled)
- [ ] Creation timestamp displays (human-readable format)
- [ ] No console errors (F12 → Console tab)
- [ ] Home link/nav present and clickable

### Invalid Paste Read
- [ ] Navigate to `/paste/99999` (non-existent ID)
- [ ] HTTP 404 status (Network tab in DevTools)
- [ ] Error message displays: "Paste not found" or similar
- [ ] Home link present
- [ ] No console errors

### Mobile Responsive
- [ ] View on small screen (DevTools mobile emulation, 375px width)
  - [ ] Text readable (no overflow)
  - [ ] Links/buttons touch-friendly (≥44px tap target)
  - [ ] Markdown content wraps correctly
- [ ] View on tablet (768px width)
  - [ ] Layout sensible
- [ ] View on desktop (1024px+)
  - [ ] Line length reasonable (not too wide)

### Design Consistency
- [ ] Page follows Phase 2 color palette (tokens from `src/styles/global.css`)
- [ ] Typography matches heading/body sizes from design system
- [ ] Spacing/margins consistent with other pages
- [ ] No raw Tailwind gray utilities (`zinc-*`, `slate-*`, etc.)

---

## Automated Checks

### Build
- [ ] `bun run build` succeeds (no TypeScript errors, no bundle warnings)

### Linting
- [ ] `bunx oxlint src/pages/paste/` returns no errors or warnings
- [ ] `bunx oxfmt --check src/pages/paste/` passes (if formatting applied)

### Type Safety
- [ ] `tsc --noEmit` passes (strict TypeScript mode)
- [ ] `[id].astro` route params typed correctly
- [ ] Paste query result typed (Paste | null)
- [ ] No `any` types

### Markdown Rendering Safety
- [ ] Test with XSS payload in Markdown (e.g., `<script>alert('xss')</script>`)
- [ ] Output is escaped (payload rendered as text, not executed)
- [ ] No HTML injection vulnerability

---

## Code Review

### Requirements Coverage
- [ ] All acceptance criteria from `requirements.md` met
- [ ] No console warnings during normal use
- [ ] Error handling matches design (404 page, missing paste)

### Architecture
- [ ] Route uses Astro standard patterns
- [ ] D1 query is minimal and indexed (no N+1)
- [ ] No blocking operations (async/await correct)

### Dependencies
- [ ] No new dependencies added (or minimal ones justified)
- [ ] Markdown rendering library choice documented in comments

### Accessibility
- [ ] Semantic HTML (`<article>`, `<time>`, `<a>`)
- [ ] Form/button focus states visible
- [ ] Color contrast ≥ 4.5:1 for text (verify with audit tool or manual check)

---

## Regression Check

### Phase 2 Features Still Work
- [ ] Create paste form still submits
- [ ] Paste created and stored in D1
- [ ] Redirect to paste URL works
- [ ] No build errors after Phase 3 changes

### Phase 1 Model Still Valid
- [ ] Paste type unchanged
- [ ] D1 schema unchanged (only SELECT queries added)

---

## Merge Readiness

- [ ] All manual tests pass
- [ ] All automated checks pass
- [ ] Code review approved
- [ ] No regressions in Phase 1–2 features
- [ ] Commit message follows convention: "Phase 3: Add read paste route"
- [ ] Ready for Phase 4 (Share UX)

---

## Known Limitations (Acceptable for Phase 3)

- No slug/canonical URL (Phase 4 feature)
- No syntax highlighting (Phase 6 hardening)
- No caching (Phase 5 feature)
- No private/auth paste (future phase, not in scope)

These are intentional Phase 3 boundaries. Document in commit if any arise during implementation.
