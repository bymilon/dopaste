# Dopaste

A minimal Markdown pastebin built for speed, simplicity, and focus.

No accounts.
No distractions.
Just write, paste, share.

---

## Features

### Writing Experience

- Markdown-first editor
- Clean, distraction-free interface
- Dark mode by default
- Fast page loads
- Keyboard-friendly workflow

### Sharing

- Instant paste creation
- Permanent shareable URLs
- Read-only rendered views
- Mobile-friendly experience

### Platform

- Edge-first architecture
- Global delivery via Cloudflare
- Serverless infrastructure
- Low operational overhead

---

## Tech Stack

### Frontend

- Astro
- TypeScript

### Infrastructure

- Cloudflare Workers
- Cloudflare D1
- Cloudflare KV

### Tooling

- Bun
- oxlint
- oxfmt

---

## Architecture

```text
Browser
   │
   ▼
Astro Application
   │
   ├── UI Layer
   ├── Feature Slices
   ├── API Routes
   │
   ▼
Cloudflare Workers
   │
   ├── D1 (Persistence)
   └── KV (Caching / Metadata)
```

---

## Vertical Slices

The application is organized around features rather than technical layers.

```text
src/
├── features/
│   ├── pastes/
│   └── markdown/
│
├── shared/
│   ├── components/
│   ├── lib/
│   ├── types/
│   └── utils/
│
├── pages/
└── layouts/
```

Each slice owns:

- UI
- Business logic
- Validation
- Types
- Tests

Avoid cross-slice coupling.

---

## AI Agent Native Development

This repository is optimized for:

- OpenAI Codex
- Claude Code

### Development Rules

- KISS
- YAGNI
- DRY
- Smallest possible change
- Vertical slice ownership
- No speculative abstractions
- Prefer existing patterns
- Prefer additive changes

### Agent Workflow

```text
Request
   │
   ▼
Understand Scope
   │
   ▼
Identify Slice
   │
   ▼
Implement Smallest Change
   │
   ▼
Validate
   │
   ▼
Stop
```

Agents should:

- Touch only required files
- Reuse existing patterns
- Avoid unrelated refactors
- Avoid architecture changes unless requested

---

## Getting Started

### Install

```bash
bun install
```

### Development

```bash
bun run dev
```

### Type Check

```bash
bun run typecheck
```

### Lint

```bash
bun run lint
```

### Build

```bash
bun run build
```

---

## Environment

Target Platform:

- Cloudflare Workers
- Cloudflare D1
- Cloudflare KV

Development Environment:

- Windows 11
- Bun

---

## Engineering Principles

### Simplicity First

Prefer the simplest implementation that solves the problem.

### Vertical Slice Architecture

Organize by feature, not by file type.

### Edge Native

Optimize for Cloudflare Workers runtime constraints.

### Maintainability

Code is read more often than it is written.

---

## Status

Active development.
