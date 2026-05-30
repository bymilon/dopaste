import { z } from "zod";

export const MAX_PASTE_BYTES = 64 * 1024;
export const PASTE_ID_PATTERN = /^[abcdefghjkmnpqrstuvwxyz23456789]+$/;

export type PasteRecord = {
    id: string;
    paste: string;
    created_at: string;
};

export type CreatePasteInput = {
    paste: string;
};

export const CreatePasteSchema = z.object({
    paste: z
        .string()
        .refine((value) => value.trim().length > 0, {
            message: "Paste cannot be blank.",
        })
        .refine((value) => new TextEncoder().encode(value).byteLength <= MAX_PASTE_BYTES, {
            message: "Paste must be 64 KiB or less.",
        }),
});

export const PasteIdSchema = z.string().regex(PASTE_ID_PATTERN);

