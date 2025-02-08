import { z } from "zod";

export const CreateCollectionSchema = z.object({
  name: z.string().nonempty({ message: "El nombre es requerido" }),
  description: z.string().optional(),
});

export type CreateCollectionFormValues = z.infer<typeof CreateCollectionSchema>;
