# Validation: Share UX

How to know Phase 4 is complete and ready to merge.

---

## Manual Testing Checklist

### Test Setup
- [ ] Create test paste (via home form, note ID and URL)
- [ ] Navigate to test paste read view: `/{id}`

### URL Display
- [ ] Full canonical absolute URL is shown (e.g., `https://dopaste.com/12345`)
- [ ] URL uses monospace font for readability
- [ ] URL is selectable and copyable by manual selection
- [ ] URL has sufficient contrast (≥4.5:1)
- [ ] No layout issues (no overflow on mobile)

### Copy Button
- [ ] "Copy Link" button visible (correct variant/style)
- [ ] Button responds to click/tap
- [ ] On click, URL copies to clipboard (verify by pasting somewhere)
- [ ] Temporary success feedback appears (e.g., "Copied!" text or visual cue)
- [ ] Feedback resets after ~2 seconds
- [ ] Button has visible focus state for keyboard users
- [ ] Button can be activated with Enter/Space keys
- [ ] Screen‑reader announces copy success

### Mobile Responsive
- [ ] View on small screen (375px)
  - [ ] All elements fit (no horizontal scroll)
  - [ ] Copy button touch target ≥44px
  - [ ] URL readable without zooming
- [ ] View on tablet (768px)
  - [ ] Layout sensible
- [ ] View on desktop (1024px+)
  - [ ] Layout sensible (not too wide, correct spacing)

### Design Consistency
- [ ] Uses existing design tokens from `src/styles/global.css`
- [ ] Uses `Button` component, no custom button styles
- [ ] No raw Tailwind gray utilities (`zinc-*`, `slate-*`, etc.)
- [ ] Spacing matches existing pages
- [ ] Typography matches design system

---

## Automated Checks

### Build
- [ ] `bun run build` succeeds (no TypeScript errors, no warnings)

### Linting
- [ ] `bunx oxlint src/pages/` returns no errors/warnings
- [ ] `bunx oxfmt --check src/pages/` passes

### Type Safety
- [ ] `tsc --noEmit` passes (strict TypeScript mode)
- [ ] No `any` types
- [ ] Canonical URL built correctly

---

## Code Review

### Requirements Coverage
- [ ] All acceptance criteria from `requirements.md` met
- [ ] No console errors during normal use
- [ ] No extra features added (no social buttons, etc.)

### Architecture
- [ ] Uses existing components (`Button`, `Surface`, etc.)
- [ ] Client‑side JS is minimal and focused
- [ ] No unnecessary re‑renders or layout shifts

### Dependencies
- [ ] No new dependencies added (or minimal ones justified)

### Accessibility
- [ ] Semantic HTML used
- [ ] `aria-live` for success feedback if needed
- [ ] All interactive elements have accessible labels
- [ ] Color contrast passes WCAG AA (≥4.5:1)

---

## Regression Check

### Phase 1–3 Features Still Work
- [ ] Home page still loads
- [ ] Paste creation still works
- [ ] Paste read view still works (Markdown renders, timestamp shows)
- [ ] No regressions in error handling (404 still shows)

---

## Merge Readiness

- [ ] All manual tests pass
- [ ] All automated checks pass
- [ ] Code review approved
- [ ] No regressions in previous features
- [ ] Commit message: "Phase 4: Add share UX (copy link button)"
- [ ] Ready for Phase 5 (Cache)

---

## Known Limitations (Acceptable for Phase 4)

- No QR code
- No share-to-social buttons
- No custom slug/short URL (future phase if needed)
- No copy button on editor (only on read view)
