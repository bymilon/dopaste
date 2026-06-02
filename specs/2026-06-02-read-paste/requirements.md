# Phase 3: Read Paste

**Feature**: Display saved pastes at permanent URLs.

## Scope

- Add route `/[id]` to fetch and render a saved paste
- Fetch paste by ID from D1
- Render Markdown as read-only HTML
- Handle missing/invalid pastes with clear error state
- Keep read view mobile-friendly per mission rules

## Design Decisions

### Paste Identifier
- Use paste ID (primary key) from Phase 2 model
- Future Phase 4 will add slug/canonical URL
- Read route: `/{id}` (numeric or UUID depending on Phase 2 choice)

### Read View Content
- Render Markdown to HTML (via library TBD in plan)
- Show rendered view only (raw Markdown available via API in later phase if needed)
- Display creation timestamp
- Minimal metadata—no edit/delete buttons (read-only guarantee)

### Missing Paste Handling
- 404 page with message "Paste not found"
- Link back to home
- No error logging for 404s (expected behavior)

### Data Flow
- GET `/{id}` → fetch from D1 → render template → HTTP 200
- Invalid ID → HTTP 404 with error page
- No caching yet (Phase 5 adds KV)

## Context

**Mission alignment:**
- Speed: Direct D1 lookup, render on demand
- Simplicity: Read-only view, no edit/social features
- Markdown-first: Rendered as primary view
- Mobile-friendly: CSS/layout matches Phase 2 constraints

**Technical constraints (from tech-stack.md):**
- Astro + TypeScript
- Cloudflare D1 (source of truth)
- No new dependencies unless required
- Design tokens from `src/styles/global.css`
- Use semantic HTML for accessibility

**Assumptions:**
- Paste model from Phase 2 is finalized
- Markdown rendering library is available or minimal
- Astro routing handles dynamic segments `[id].astro`

## Acceptance Criteria

- ✅ Route `/{id}` exists and responds to GET
- ✅ Valid paste ID → 200 response with rendered Markdown
- ✅ Invalid/missing paste ID → 404 with user-friendly message
- ✅ Page renders correctly on mobile (touch-friendly links, readable typography)
- ✅ No console errors or TypeScript violations
- ✅ Markdown rendering produces safe, escaped HTML (no XSS)
- ✅ Validation suite in Phase 6 passes for this feature
