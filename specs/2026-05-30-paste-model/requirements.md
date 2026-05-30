# Requirements

## Scope

Phase 1: Paste Model.

Goal: define paste type, validation, and storage contract before create/read implementation.

This is spec-only. No product behavior change.

## Decisions

- Feature name: `paste-model`.
- Branch: `codex/phase-1-paste-model`.
- Paste ID: `key.ts`-style generated key.
- Scope: spec only.
- External `key.ts` must be used as ID strategy reference.
- Source reference: `D:/PROJECTS/PHOTOSAPI/core/key.ts`.
- No accounts.
- No title-derived slug.
- No new dependency.

## Context

Mission: minimal Markdown pastebin.

User promise:

- Write Markdown.
- Save paste fast.
- Share permanent URL.
- Read rendered output.

Locked stack:

- Astro latest stable.
- TypeScript.
- Cloudflare Workers.
- Cloudflare D1.
- Cloudflare KV.
- Bun.
- oxlint.
- oxfmt.

## Paste Model

Required fields:

- `id`: `key.ts`-style public string for permanent URL.
- `markdown`: source Markdown text.
- `createdAt`: creation timestamp.

Optional future fields:

- `updatedAt`: only if edit support exists later.
- `metadata`: only if needed for cache/read optimization.

Public read model:

- `id`.
- `markdown`.
- `createdAt`.

Do not expose internal storage details.

## ID Contract

Use the `key.ts` pattern:

```ts
const ALPHABET = 'abcdefghjkmnpqrstuvwxyz23456789'
const BASE = ALPHABET.length

export function generateKey(index?: number): string {
  let val = Date.now()
  if (index !== undefined) val = val * 1000 + index

  const chars: string[] = []
  while (val > 0) {
    chars.push(ALPHABET[val % BASE]!)
    val = Math.floor(val / BASE)
  }
  return chars.reverse().join('')
}
```

Rules:

- Alphabet: `abcdefghjkmnpqrstuvwxyz23456789`.
- ID generated from current timestamp.
- Optional `index` supports same-millisecond multiple creates.
- Accepted pattern: `^[abcdefghjkmnpqrstuvwxyz23456789]+$`.
- Do not derive ID from title, content, or user input.
- On collision, retry with incremented `index`.

## Validation

- Markdown content required.
- Blank/whitespace-only paste rejected.
- Maximum Markdown size: 64 KiB UTF-8.
- ID must match `key.ts` alphabet.
- Validation returns structured errors.
- No account/user ownership rules.

Error shape:

```ts
type PasteValidationError = {
  field: "id" | "markdown";
  code: "required" | "too_large" | "invalid_format";
  message: string;
};
```

## Storage Contract

D1 is source of truth.

D1 fields:

- `id TEXT PRIMARY KEY`.
- `markdown TEXT NOT NULL`.
- `created_at TEXT NOT NULL`.

Contract must support:

- `createPaste(input: { markdown: string }): Promise<PasteRecord>`.
- `getPasteById(id: string): Promise<PasteRecord | null>`.
- Create validates input before write.
- Read validates ID before lookup.
- Not found returns `null`, not thrown error.

KV may later cache metadata/read artifacts, but must not replace D1 persistence.

## Constraints

- Keep model small.
- Avoid speculative fields.
- Avoid social/publishing features.
- Keep Phase 2 create flow unblocked.
