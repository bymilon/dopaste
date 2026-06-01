# Design Contrast Audit

Date: 2026-06-02

Scope:

- `/`
- `/what`
- `/how`
- `/privacy`
- `/tos`
- `/contacts`

## Result

Pass by token review.

## Checked Pairs

- `--text-primary` on `--surface-primary`, `--surface-secondary`, and `--surface-elevated`.
- `--text-secondary` on content page surfaces.
- `--text-tertiary` on footer links, labels, and low-emphasis metadata.
- `--accent` focus outlines against dark surfaces.
- Primary, secondary, ghost, and destructive button foreground/background pairs.

## Notes

- Body copy uses `--text-secondary` only on dark surfaces, with enough lightness separation for normal text.
- Decorative seams and panel borders are not relied on as the only indicator of state.
- Error text uses `--danger` against dark surfaces and appears with `role="alert"` in the editor form.
- Future light-mode or theme variants must repeat this audit before shipping.
