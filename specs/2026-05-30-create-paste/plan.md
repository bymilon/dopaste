# Plan

## 1. Context

1. Read mission, stack, roadmap.
2. Read Phase 1 paste model.
3. Read referenced mdpaste components.
4. Inspect current Astro app structure.

## 2. Model Handoff

1. Use `id` from `key.ts` pattern.
2. Use `paste` form field as Markdown source.
3. Store `created_at`.

## 3. Modular UI

1. Add editor header component.
2. Add editor form component.
3. Add footer component.
4. Keep components small and Astro-native.

## 4. Create Flow

1. Render minimal editor form.
2. Submit Markdown via server action/API.
3. Validate `paste` content.
4. Generate `id`.
5. Persist `id`, `paste`, `created_at` to D1.
6. Redirect to paste URL.

## 5. Merge Readiness

1. Build passes.
2. Dev route renders.
3. Create action rejects blank paste.
4. Create action persists valid paste.
5. Valid submit redirects to read URL.

## 6. Linear TODO Tracking

1. [x] DOP-201 Context check: mission, stack, roadmap Phase 2, Phase 1 model.
2. [x] DOP-202 Component refs: extract useful header/editor/footer boundaries from mdpaste.
3. [x] DOP-203 UI spec: modular Astro components for editor header, editor form, footer.
4. [x] DOP-204 Form contract: `textarea name="paste"` posts Markdown.
5. [x] DOP-205 ID contract: implement `key.ts`-style ID generation.
6. [x] DOP-206 Storage contract: D1 insert fields `id`, `paste`, `created_at`.
7. [x] DOP-207 Redirect contract: valid create redirects to paste read URL.
8. [x] DOP-208 Validation contract: blank paste rejected, 64 KiB limit enforced.
9. [ ] DOP-209 Verification: build, route render, create success/failure paths.
