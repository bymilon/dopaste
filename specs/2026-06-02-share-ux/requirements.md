# Phase 4: Share UX

**Feature**: Make pastes easy to share with a visible canonical URL and one‑tap copy button.

## Scope

- Display canonical URL (full absolute URL: `https://dopaste.com/{id}`) on paste read page
- Add a "Copy Link" button that copies the URL to clipboard
- Show clear feedback on successful copy
- Keep layout mobile‑friendly (touch targets ≥44px)
- Do not add any other features (no social sharing buttons)
- Use existing design‑system components and tokens

## Design Decisions

### URL Display

- Place URL in a read‑only text field or as a clearly labeled text element
- Show full absolute URL (not just path)
- Use monospace font for URL (to improve readability)
- Apply `ui-control-shell` for consistent border/focus states if using a text field
- URL must be selectable by users for manual copying too

### Copy Button

- Use existing `Button` component (variant: `primary` or `secondary`?)
- Button text: "Copy Link"
- On success: temporary feedback (text change: "Copied!", color change, or a small check icon)
- Feedback should reset after ~2 seconds (use client‑side JS)
- Handle clipboard API errors gracefully (fallback to manual copy hint)

### Layout

- Place URL + copy button near the top of read view, or near timestamp
- Responsive: stack on mobile, align on desktop
- Maintain spacing from existing content (use design tokens `--space-*`)

### Data Flow

- Canonical URL built from `Astro.url.origin` + paste ID
- No changes to D1 or KV (Phase 5 adds caching)
- No new dependencies unless required by clipboard feedback (keep minimal)

## Context

**Mission alignment:**
- Speed: one‑tap copy is fast
- Simplicity: only share link, no other options
- Mobile: touch targets and responsive layout
- Quiet UI: no distracting social buttons

**Technical constraints (from tech-stack.md):**
- Astro + TypeScript
- Use existing `Button` component and design tokens
- No new dependencies unless absolutely necessary
- Client‑side JS okay for clipboard interaction (keep minimal)
- Semantic HTML for accessibility

**Assumptions:**
- Read view from Phase 3 is finalized and accessible
- Clipboard API is available in target browsers (modern browsers support it)
- Fallback for older browsers or blocked clipboard access (show URL clearly)

## Acceptance Criteria

- ✅ Canonical absolute URL shown on paste read page (`https://dopaste.com/{id}`)
- ✅ "Copy Link" button present and accessible (keyboard, screen reader)
- ✅ Clicking copy button copies URL to clipboard
- ✅ Clear success feedback shown after copy
- ✅ Mobile responsive layout with ≥44px touch targets
- ✅ No console errors or TypeScript violations
- ✅ Uses existing design tokens/components
- ✅ No new social/extra features added
