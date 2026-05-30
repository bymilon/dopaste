# AGENTS.md

## Purpose

Single source of truth for coding agents in this repo.

Stack:
- Astro (latest stable)
- Cloudflare D1
- Cloudflare KV
- Bun

---

## Operating Principles

- Prefer simplest solution that satisfies requirement.
- KISS, YAGNI, DRY.
- Smallest change.
- Do not refactor unrelated code.
- No abstraction without proven need.
- Maintainable > clever.
- Preserve architecture unless explicitly told otherwise.

---

## Communication

- Be concise.
- Do not explain obvious implementation details.
- No long reasoning.
- Ask only when requirement ambiguous or unsafe.
- Multiple valid approaches: choose simplest.
- Do not create unrequested work.

---

## Code Changes

- Touch only files required for the task.
- Reuse patterns before adding new.
- Prefer existing dependencies over adding new packages.
- New package: use Bun.

Example:

```bash
bun add <package>
```

---

## Environment

OS:
- Windows 11

Shell:
1. PowerShell
2. Bash (if explicitly available)
3. Command Prompt

Commands:

- Prefer PowerShell-compatible commands.
- Use Windows-compatible paths.
- Avoid Linux/macOS commands unless requested.
- Do not assume WSL.
- Do not assume Docker.

---

## RTK

Ref: `C:\Users\alpha\.codex\RTK.md`

- Prefix shell commands with `rtk`.
- Need raw output: `rtk proxy <cmd>`.
- Check savings/version: `rtk gain`, `rtk --version`.

---

## Learned User Preferences
- Finish implementation tasks: respond `**DONE**` only.
- Responses/reviews: concise, action-focused.

---

## opensrc — source lookup for agents

Use `bunx opensrc path <pkg>` for cached dependency source path. Read/search source, not just types.

**Cached deps (use immediately, no network):**
```text
opensrc path astro
opensrc path zod               # Zod schema/validator source
opensrc path typescript        # TypeScript compiler source + lib types
```

**Usage patterns:**
```bash
# Find Hono middleware types
rtk rg "MiddlewareHandler" $(opensrc path hono)

# Check libsql Client interface
rtk bat (rg --files "$(opensrc path zod)" -g "*types.ts")

# Search Zod for a specific validator
rtk rg -r "safeParse" $(opensrc path zod)
```
