import { z } from "zod";

export const createBookmarkSchema = z.object({
  url: z.string().url({ message: "La URL no es válida" }),
  title: z.string().nonempty({ message: "El título es requerido" }),
  description: z.string().optional(),
  collection_id: z
    .number()
    .int()
    .positive({ message: "La colección seleccionada no es válida" })
    .optional(),
  category: z.string().optional(),
});

export type CreateBookmarkFormValues = z.infer<typeof createBookmarkSchema>;
