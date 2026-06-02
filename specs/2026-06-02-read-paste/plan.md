# Plan: Read Paste

Numbered task groups. Each group is shippable and testable.

## 1. Route & Fetch

**Depends on**: Phase 2 (Paste model + D1 schema finalized)

1. Create dynamic route file `src/pages/[id].astro`
2. Accept `id` from URL params
3. Query D1 for paste where `id` matches
4. Return paste object or null
5. Type the response (Paste or null) with TypeScript

**Acceptance:**
- Route responds to GET `/{id}` with HTTP 200
- Query returns paste data or null without errors
- TypeScript strict mode passes (no `any`)

---

## 2. Error Handling

**Depends on**: Task 1 (route + fetch working)

1. Create error layout/component for 404 and 5xx
2. If paste is null, return 404 status + error template
3. Error page: "Paste not found" message + link home
4. Test with missing ID: `/99999` → 404

**Acceptance:**
- Missing paste → 404 status code
- Error page displays user-friendly message
- Mobile layout correct (no overflow, readable text)

---

## 3. Markdown Rendering

**Depends on**: Task 1 (paste data available)

1. Evaluate Markdown library: check if Astro bundles one, else use `marked` or minimal alternative
2. Create render function in utils
3. Render paste.content as Markdown → HTML
4. Escape/sanitize output (no XSS)
5. Apply design tokens from `src/styles/global.css` to output

**Acceptance:**
- Markdown renders to HTML without errors
- HTML is safe (no raw `<script>` tags)
- Rendered content respects design tokens (color, spacing, typography)
- No Markdown-specific package added unless required

---

## 4. Read View Template

**Depends on**: Task 3 (Markdown rendering)

1. Create page template: header + metadata + rendered content
2. Show: rendered Markdown, creation timestamp (from Phase 2 model)
3. Minimal UI: no edit/delete/share buttons (read-only contract)
4. Use semantic HTML (`<article>`, `<time>`, `<h1>` for title)
5. Link home button or breadcrumb

**Acceptance:**
- Template renders without layout shift (CSS sizing correct)
- Mobile layout wraps correctly, no horizontal scroll
- All interactive elements keyboard-accessible (if any)
- Timestamp displays in user-friendly format

---

## 5. Integration Test

**Depends on**: Task 4 (template working)

1. Create a test paste in D1 (manual or via Phase 2 API)
2. GET `/{id}` for valid ID → page renders
3. GET `/{id}` for invalid ID → 404 page
4. Verify no console errors (browser dev tools)
5. Test on mobile viewport (320px, 768px, desktop)

**Acceptance:**
- Valid paste loads and displays correctly
- Invalid paste shows 404
- No TypeScript errors
- Visual regression: matches Phase 2 design language

---

## 6. Cleanup & Rollback

**Depends on**: Task 5 passing

1. Remove test paste if created
2. Confirm git status (only phase 3 files added)
3. Ready for merge to main
4. Document commit message with acceptance criteria met

**Acceptance:**
- Feature branch clean (no leftover test data)
- Code review checklist passed
- Ready for Phase 4 (Share UX)
