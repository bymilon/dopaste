# Validation

## Merge Gate

Phase 2 can merge when users can create a Markdown paste and land on its paste URL.

## Required Checks

1. Feature spec directory exists.
2. Plan has numbered task groups.
3. Requirements define UI, create, ID, validation, storage, redirect contracts.
4. Implementation uses modular components.
5. Form posts `paste` Markdown.
6. ID generation follows `key.ts`.
7. D1 writes `id`, `paste`, `created_at`.
8. Valid submit redirects to paste URL.
9. Invalid submit does not persist.

## Evidence To Record

- Branch name.
- Files created/changed.
- Referenced component files reviewed.
- Commands run.
- Create success path result.
- Create failure path result.
- Redirect URL shape.

## Pass Criteria

- Editor route renders.
- Textarea is named `paste`.
- Blank paste rejected.
- Oversized paste rejected.
- Valid paste creates D1 row.
- Created row has `id`, `paste`, `created_at`.
- Redirect target includes generated `id`.
- Build passes.

## Fail Criteria

- ID does not follow `key.ts` alphabet/pattern.
- Create path requires account/title.
- D1 persistence missing.
- Blank paste persists.
- Redirect missing or ambiguous.
- UI is monolithic when modular components were required.
