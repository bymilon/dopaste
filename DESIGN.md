---
version: alpha
name: Minimal Charcoal Slate
description: Compact dark product UI for Dopaste, optimized for fast paste creation and low-friction AI agent handoffs.
colors:
  surface-primary: "#060707"
  surface-app: "#0C0D0E"
  surface-panel: "#090A0B"
  surface-secondary: "#101112"
  surface-elevated: "#121314"
  surface-overlay: "#121314"
  border-subtle: "#161718"
  border-handle: "#151617"
  border-strong: "#2B2E31"
  border-interactive: "#34373A"
  text-primary: "#F7F7F7"
  text-secondary: "#D1D5DB"
  text-tertiary: "#9CA3AF"
  text-muted: "#6B7280"
  text-disabled: "#53585D"
  text-placeholder: "#5F666D"
  accent: "#F7F7F7"
  accent-strong: "#FFFFFF"
  accent-contrast: "#060707"
  danger: "#D07A73"
  kbd-surface: "#101112"
  kbd-border: "#282A2C"
  kbd-text: "#E2E8F0"
typography:
  title-caps:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.08em
  label-caps:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 10px
    fontWeight: 650
    lineHeight: 1
    letterSpacing: 0.18em
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0
  body-small:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  data:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: 0
  keycap:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: 9px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
rounded:
  xs: 2px
  sm: 2px
  md: 2px
  lg: 2px
spacing:
  xs: 0.25rem
  sm: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  2xl: 2rem
  3xl: 3rem
components:
  app-shell:
    backgroundColor: "{colors.surface-primary}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
  panel-active:
    backgroundColor: "{colors.surface-panel}"
    borderColor: "{colors.border-subtle}"
    rounded: "{rounded.md}"
  panel-inactive:
    backgroundColor: "{colors.surface-elevated}"
    borderColor: "{colors.border-subtle}"
    rounded: "{rounded.md}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-contrast}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 0.75rem 1.5rem
    height: 40px
  button-secondary:
    backgroundColor: "{colors.surface-secondary}"
    textColor: "{colors.text-primary}"
    borderColor: "{colors.border-strong}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 0.75rem 1.5rem
    height: 38px
  input:
    backgroundColor: "{colors.surface-panel}"
    textColor: "{colors.text-primary}"
    borderColor: "{colors.border-subtle}"
    typography: "{typography.data}"
    rounded: "{rounded.md}"
    padding: 0.5rem 0.75rem
  input-focus:
    backgroundColor: "{colors.surface-secondary}"
    borderColor: "{colors.text-muted}"
  table-cell:
    backgroundColor: "{colors.surface-secondary}"
    textColor: "{colors.text-secondary}"
    borderColor: "{colors.border-subtle}"
    typography: "{typography.data}"
    padding: 0.75rem
  table-header:
    backgroundColor: "{colors.surface-panel}"
    textColor: "{colors.text-primary}"
    borderColor: "{colors.border-subtle}"
    typography: "{typography.label-caps}"
    padding: 0.75rem
  keycap:
    backgroundColor: "{colors.kbd-surface}"
    textColor: "{colors.kbd-text}"
    borderColor: "{colors.kbd-border}"
    typography: "{typography.keycap}"
    rounded: "{rounded.xs}"
    padding: 0.125rem 0.375rem
---

# Dopaste Design System

## Overview

Dopaste is a quiet, fast Markdown pastebin. The interface should feel like a precise writing surface: compact, dark, keyboard-friendly, and free of publishing-platform decoration.

Use this file as the shared contract for AI coding agents. Frontmatter tokens are normative. Prose explains intent and workflow. Prefer the nearest existing token or component before adding anything new.

## Colors

Minimal Charcoal Slate is a high-contrast dark neutral system.

- App backgrounds use `surface-primary` and `surface-app`.
- Control panels use `surface-panel`.
- Inactive surfaces use `surface-secondary`, `surface-elevated`, or `surface-overlay`.
- Borders use `border-subtle` for separators and `border-strong` for interactive outlines.
- Active accents are white or soft gray only.
- `danger` is reserved for validation errors and destructive states.

Avoid vibrant purple, green, or blue gradients. Do not add decorative color ramps. If a new semantic state is required, add one restrained token and document its use.

## Typography

Use a two-role type system.

- `title-caps`: display headers and compact panel titles. Uppercase, strong weight, tracked.
- `label-caps`: metadata, helper labels, form labels, and small UI tags.
- `body` and `body-small`: readable prose and support copy.
- `data`: Markdown editors, code blocks, SQL, tables, counters, timestamps, and inputs.
- `keycap`: keyboard shortcut badges.

Do not use fluid type. Keep product headings low-profile. Data and editor text should stay monospaced.

## Layout

Prioritize the writing task. Use dense spacing, stable dimensions, and predictable structure.

- Use the spacing tokens directly; do not invent one-off spacing unless needed for a viewport edge case.
- Keep the editor dominant on create screens.
- Use `border-subtle` to divide action rows, panels, and markdown tables.
- Split-pane viewports should use percentage sizing. Handles idle at `border-handle` and highlight to `border-interactive` while dragging.
- Mobile layouts should preserve the same hierarchy with fewer columns, not larger typography.

## Elevation & Depth

Depth is tonal, not shadow-heavy.

- Prefer surface contrast plus 1px borders.
- Use shadows only for floating controls that must separate from content, such as a fixed action button.
- Do not use glassmorphism, blur panels, or decorative glow.

## Shapes

The shape language is sharp and utilitarian.

- Rectangular UI uses 2px radius.
- Avoid pill buttons unless the existing primitive explicitly requires it.
- Keep cards, panels, inputs, and buttons visually consistent.

## Components

Buttons:
Primary buttons are white with black text. Secondary buttons use `surface-secondary` with `border-strong`. Ghost buttons are text-first and should stay quiet.

Inputs and textareas:
Default state uses `surface-panel`, `border-subtle`, and `data` typography. Focus state uses `surface-secondary`, transparent inner border behavior, and a soft gray ring. Disabled text uses `text-disabled`.

Markdown content:
Code and tables use `data`. Table headers use `label-caps`. Blockquotes use subtle borders, not colored side stripes.

Keycaps:
Render shortcuts as small `kbd` badges using `keycap`, `kbd-surface`, `kbd-border`, and `kbd-text`.

Agent workflow:
Read tokens first, then components, then prose. Reuse the closest component token before creating a new variant. When adding a variant, add only the minimum token set needed for implementation and future reuse.

## Do's and Don'ts

- Do keep UI quiet, compact, and task-focused.
- Do use white only for the primary action or active focus signal.
- Do use `data` typography for tables, code, inputs, counters, and timestamps.
- Do preserve WCAG AA contrast for normal text and controls.
- Do make agent-facing changes small, named, and token-backed.
- Don't add vibrant purple, green, or blue gradients.
- Don't introduce decorative cards, glow, glass, or brand-marketing hero patterns.
- Don't create a new palette for one component.
- Don't refactor unrelated UI while applying these tokens.
- Don't overfit this document to one page; keep it as the shared design contract.
