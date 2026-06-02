import { generateKey } from "./key";
import type { PasteRecord } from "./model";

const MAX_INSERT_ATTEMPTS = 5;
const KV_TTL = 31536000; // 1 year in seconds

export async function createPaste(
  db: D1Database,
  paste: string,
): Promise<PasteRecord> {
  const createdAt = new Date().toISOString();

  for (let attempt = 0; attempt < MAX_INSERT_ATTEMPTS; attempt++) {
    const id = generateKey(attempt === 0 ? undefined : attempt);

    try {
      await db
        .prepare(
          "INSERT INTO pastes (id, paste, created_at) VALUES (?, ?, ?)",
        )
        .bind(id, paste, createdAt)
        .run();

      return {
        id,
        paste,
        created_at: createdAt,
      };
    } catch (error) {
      if (!isUniqueConflict(error) || attempt === MAX_INSERT_ATTEMPTS - 1) {
        throw error;
      }
    }
  }

  throw new Error("Unable to create unique paste id.");
}

export async function getPaste(
  db: D1Database,
  id: string,
): Promise<PasteRecord | null> {
  const result = await db
    .prepare("SELECT id, paste, created_at FROM pastes WHERE id = ?")
    .bind(id)
    .first<PasteRecord>();
  
  return result || null;
}

export async function getPasteFromKV(
  kv: KVNamespace,
  id: string,
): Promise<string | null> {
  return await kv.get(`paste:${id}`);
}

export async function putPasteToKV(
  kv: KVNamespace,
  id: string,
  content: string,
): Promise<void> {
  await kv.put(`paste:${id}`, content, { expirationTtl: KV_TTL });
}

function isUniqueConflict(error: unknown): boolean {
  return error instanceof Error && /unique|constraint|primary/i.test(error.message);
}

