import { z } from "zod";

export const createCollectionSchema = z.object({
  name: z.string().nonempty({ message: "El nombre es requerido" }),
  description: z.string().optional(),
});

export type CollectionFormValues = z.infer<typeof createCollectionSchema>;
