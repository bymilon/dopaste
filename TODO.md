# TODO

## Design System Refactor

- [x] DS-001 Create semantic dark-mode token groups for surfaces, borders, typography, semantic colors, radius, and type scale.
- [x] DS-002 Replace direct `zinc-*` and `neutral-*` classes in the active paste UI with semantic token-backed primitives.
- [x] DS-003 Add layered `Surface` and seam-like `Divider` primitives for constructed panel depth.
- [x] DS-004 Refactor the markdown textarea into an elevated editor surface with tokenized focus, placeholder, and disabled states.
- [x] DS-005 Refactor primary submit action into a tactile token-backed `Button` primitive.
- [x] DS-006 Restore accessible form relationships with visible labels, helper text, `aria-describedby`, `aria-invalid`, and alert errors.
- [ ] DS-007 Add an `Input` primitive sharing the same control shell as `Textarea` before new form fields are introduced.
- [ ] DS-008 Add secondary and ghost button variants for navigation, destructive actions, and low-emphasis commands.
- [ ] DS-009 Add visual regression screenshots for desktop and mobile editor states.
- [ ] DS-010 Audit WCAG contrast after real content pages (`/what`, `/how`, `/privacy`, `/tos`, `/contacts`) are implemented.
- [ ] DS-011 Document usage rules for tokens and primitives in `README.md` or `specs/tech-stack.md`.
- [ ] DS-012 Add lint or review guardrails to prevent future `zinc-*`, `slate-*`, `neutral-*`, and `gray-*` usage in application components.
