# TODO

## Current UI Refactor

- [x] UI-001 Refactor `index.astro` into a calmer home shell.
  - Acceptance: page structure removes the header, centers the editor, and preserves the paste creation flow.
- [x] UI-002 Refine zen/minimal dark dashboard tokens.
  - Acceptance: surfaces, borders, text, accents, spacing, and radii feel brutally minimal and cohesive with the attached dark dashboard direction.
- [x] UI-003 Polish the editor experience.
  - Acceptance: textarea/editor states, placeholder tone, focus treatment, helper/error text, and content density feel intentional across empty and filled states.
- [x] UI-004 Polish the create button.
  - Acceptance: primary action has clear hierarchy, refined hover/focus/disabled states, and remains tactile without visual noise.
- [x] UI-005 Polish the footer.
  - Acceptance: footer navigation and metadata align with the minimal shell, keep low emphasis, and do not distract from the editor.
- [x] UI-008 Remove homepage header.
  - Acceptance: the first screen has no visible product/header band; the editor is the primary object.
- [x] UI-009 Reverse-engineer ultra-minimal paste screen.
  - Acceptance: homepage matches the provided reference structure with a full-width editor plane, bottom-right create action, centered footer links, and no decorative chrome.
- [ ] UI-006 Verify responsive and accessible behavior.
  - Acceptance: desktop and mobile layouts avoid overlap, preserve readable text, maintain keyboard focus visibility, and keep form relationships intact.
  - Status: automated form relationships preserved; browser verification still needed because dev-server approval was declined.
- [ ] UI-007 Run build, lint, and visual checks.
  - Acceptance: build and lint pass, and desktop/mobile visual review confirms the dark dashboard-inspired refactor renders as intended.
  - Status: lint and build pass; desktop/mobile visual review still pending.

## Design System Refactor

- [x] DS-001 Create semantic dark-mode token groups for surfaces, borders, typography, semantic colors, radius, and type scale.
- [x] DS-002 Replace direct `zinc-*` and `neutral-*` classes in the active paste UI with semantic token-backed primitives.
- [x] DS-003 Add layered `Surface` and seam-like `Divider` primitives for constructed panel depth.
- [x] DS-004 Refactor the markdown textarea into an elevated editor surface with tokenized focus, placeholder, and disabled states.
- [x] DS-005 Refactor primary submit action into a tactile token-backed `Button` primitive.
- [x] DS-006 Restore accessible form relationships with visible labels, helper text, `aria-describedby`, `aria-invalid`, and alert errors.
- [x] DS-007 Add an `Input` primitive sharing the same control shell as `Textarea` before new form fields are introduced.
- [x] DS-008 Add secondary and ghost button variants for navigation, destructive actions, and low-emphasis commands.
- [x] DS-009 Add visual regression screenshots for desktop and mobile editor states.
- [x] DS-010 Audit WCAG contrast after real content pages (`/what`, `/how`, `/privacy`, `/tos`, `/contacts`) are implemented.
- [x] DS-011 Document usage rules for tokens and primitives in `README.md` or `specs/tech-stack.md`.
- [x] DS-012 Add lint or review guardrails to prevent future `zinc-*`, `slate-*`, `neutral-*`, and `gray-*` usage in application components.
