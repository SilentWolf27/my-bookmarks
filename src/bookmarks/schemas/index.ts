import { z } from "zod";

export const createBookmarkSchema = z.object({
  url: z.string().url({ message: "La URL no es válida" }),
  collectionId: z.string().optional(),
});

export type CreateBookmarkFormValues = z.infer<typeof createBookmarkSchema>;

export const editBookmarkSchema = z.object({
  title: z.string().min(1, "El título es requerido"),
  description: z.string().optional(),
  url: z.string().url("URL inválida"),
});

export type EditBookmarkFormValues = z.infer<typeof editBookmarkSchema>;
