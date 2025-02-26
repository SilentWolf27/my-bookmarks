import { z } from "zod";

export const createBookmarkSchema = z.object({
  url: z.string().url({ message: "La URL no es válida" }),
  collectionId: z.string().optional(),
});

export type CreateBookmarkFormValues = z.infer<typeof createBookmarkSchema>;
