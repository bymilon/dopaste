# Plan

## 1. Existing Context

1. Read mission and stack specs.
2. Read roadmap Phase 1.
3. Inspect current app structure.

## 2. Domain Shape

1. Define paste identity.
2. Define paste content fields.
3. Define paste timestamps.
4. Define public read fields.

## 3. Validation Rules

1. Define Markdown content limits.
2. Define accepted empty/blank behavior.
3. Define ID format rules.
4. Define validation error shape.

## 4. Storage Contract

1. Define D1 persistence fields.
2. Define create/read contract.
3. Define future KV metadata/cache boundary.
4. Keep D1 source of truth.

## 5. Merge Readiness

1. Confirm spec matches mission.
2. Confirm spec matches locked stack.
3. Confirm Phase 2 can build create flow from contract.

## 6. Linear TODO Tracking

1. [x] DOP-101 Context check: mission, stack, roadmap Phase 1.
2. [x] DOP-102 Paste type: ID, content, created timestamp, optional metadata.
3. [x] DOP-103 Public read model: expose only fields needed to render paste.
4. [x] DOP-104 Validation: content required, size limit, ID format, error shape.
5. [x] DOP-105 Storage contract: D1 fields and create/read functions.
6. [x] DOP-106 Cache boundary: KV optional, metadata/cache only, D1 source of truth.
7. [x] DOP-107 Phase handoff: Phase 2 create paste can consume contract.

## 7. Implementation Result

1. Context checked: mission, stack, roadmap, current `src` structure.
2. Mentioned external `key.ts` reviewed; required as ID strategy reference.
3. Paste type resolved: `id`, `markdown`, `createdAt`.
4. Public read model resolved: `id`, `markdown`, `createdAt`.
5. Validation resolved: required Markdown, no blank paste, 64 KiB limit, `key.ts` alphabet ID, structured errors.
6. Storage resolved: D1 source of truth, `createPaste`, `getPasteById`, KV non-authoritative.
7. Phase 2 can implement create flow from this contract.
