# Requirements

## Scope

Phase 2: Create Paste.

Goal: build minimal Markdown editor form, create action/API, D1 persistence, and redirect to paste URL.

## Decisions

- Feature name: `create-paste`.
- Branch: `codex/phase-2-create-paste`.
- Flow: server action/API first.
- UI: modular components based on referenced mdpaste files.
- Component refs: inspiration, adapted to Astro/Dopaste.
- ID: use `key.ts` pattern.
- Markdown field name: `paste`.
- Storage timestamp field: `created_at`.

## Context

Mission: minimal Markdown pastebin.

Must preserve:

- No accounts.
- No social features.
- Fast create.
- Permanent share URL.
- Quiet UI.
- Low ops.

Locked stack:

- Astro latest stable.
- TypeScript.
- Cloudflare Workers.
- Cloudflare D1.
- Cloudflare KV for future metadata/cache only.
- Bun.

Phase 1 model:

- `id`: `key.ts`-style public string.
- `paste`: Markdown source.
- `created_at`: creation timestamp.
- D1 source of truth.

## References

- `https://raw.githubusercontent.com/bymilon/mdpaste/refs/heads/opensource/v1.0.0/src/components/editor-header.html`
- `https://raw.githubusercontent.com/bymilon/mdpaste/refs/heads/opensource/v1.0.0/src/components/editor.html`
- `https://raw.githubusercontent.com/bymilon/mdpaste/refs/heads/opensource/v1.0.0/src/components/footer.html`

Reference takeaways:

- Header: compact title plus small action links.
- Editor: autofocus textarea, `name="paste"`, Markdown placeholder, submit button.
- Footer: quiet nav/meta links.

Use ideas, not direct copy, unless implementation benefits from close structure.

## UI Contract

Create modular Astro components:

- Editor header.
- Markdown editor form.
- Footer.

Editor form:

- Uses `method="post"`.
- Textarea name is `paste`.
- Textarea label communicates Markdown paste creation.
- Submit button creates paste.
- No account fields.
- No title required.

## Create Contract

On valid submit:

1. Read `paste` from form body.
2. Trim only for validation; preserve original Markdown for storage unless all blank.
3. Validate non-empty and <= 64 KiB UTF-8.
4. Generate `id` via `key.ts` pattern.
5. Set `created_at` as ISO timestamp.
6. Insert into D1.
7. Redirect to read URL for the paste.

On invalid submit:

- Do not write to D1.
- Return visible error state.
- Preserve submitted Markdown when possible.

## ID Contract

Use `D:/PROJECTS/PHOTOSAPI/core/key.ts` as source reference:

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

Collision handling:

- Retry insert with incremented `index`.
- Keep retry count bounded.

## Storage Contract

D1 table fields needed:

- `id TEXT PRIMARY KEY`.
- `paste TEXT NOT NULL`.
- `created_at TEXT NOT NULL`.

Create insert writes exactly these required fields for Phase 2.

Existing prototype tables with `title`, `content`, or `language` are reset during Phase 2 migration.

KV is not required for Phase 2.

## Out Of Scope

- Read page implementation beyond redirect target shape.
- Paste listing.
- Random paste.
- History.
- Accounts.
- Editing/deleting paste.
- Client-side fetch enhancement.
