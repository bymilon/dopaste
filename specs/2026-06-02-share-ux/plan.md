# Plan: Share UX

Numbered task groups. Each group shippable and testable.

## 1. URL Display

**Depends on**: Phase 3 (read view template finalized)

1. Add URL display to `src/pages/[id].astro`
2. Build canonical URL: `Astro.url.origin` + `"/" + paste.id`
3. Style URL with existing tokens (monospace type, `ui-control-shell` optional)
4. Ensure URL is selectable by users

**Acceptance:**
- Canonical absolute URL visible on page
- URL uses monospace for readability
- URL is selectable for manual copy

---

## 2. Copy Button

**Depends on**: Task 1 (URL displayed)

1. Add `Button` component labeled "Copy Link" (variant: `secondary` for low emphasis)
2. Add client‑side script to handle clipboard API call
3. On success: show temporary feedback (text change, visual cue)
4. Feedback resets after ~2 seconds
5. Fallback to manual copy hint if clipboard fails

**Acceptance:**
- Button renders with design tokens
- Clicking copies URL to clipboard
- Success feedback is visible and temporary
- Accessible (screen‑reader announcement, keyboard operation)

---

## 3. Layout & Responsiveness

**Depends on**: Tasks 1 + 2 (URL + button implemented)

1. Place URL + copy button in read view layout
2. Stack vertically on mobile, align horizontally on desktop
3. Ensure touch targets ≥44px
4. Maintain spacing with existing content (use tokens)

**Acceptance:**
- No layout shift
- Mobile layout correct (no horizontal scroll, readable text)
- Desktop layout sensible
- All touch targets ≥44px

---

## 4. Accessibility & States

**Depends on**: Tasks 1–3

1. Add semantic labels (ARIA label for copy button if needed)
2. Handle focus states (visible, follows design tokens)
3. Screen‑reader feedback on successful copy (use `aria-live` region)
4. Test keyboard navigation (Tab to button, Enter/Space to click)

**Acceptance:**
- Focus states visible and accessible
- Screen‑reader announces success
- Keyboard‑only operation works
- Color contrast ≥4.5:1 for all text

---

## 5. Integration Test

**Depends on**: Tasks 1–4 complete

1. Create test paste (via Phase 2 form)
2. Navigate to read view
3. Verify URL is correct absolute URL
4. Click copy button → verify URL copied to clipboard
5. Verify success feedback shows and resets
6. Test on mobile/tablet/desktop viewports
7. Test keyboard navigation + screen‑reader feedback

**Acceptance:**
- All manual tests pass
- No console errors
- Visual regression: matches existing design language

---

## 6. Cleanup & Rollback

**Depends on**: Task 5 passing

1. Remove any test code/comments
2. Confirm git status (only Phase 4 files modified/added)
3. Ready for merge to main
4. Document commit message with acceptance criteria met

**Acceptance:**
- Feature branch clean (no leftover test data)
- Code review checklist ready
- No regressions in Phase 1–3 features
