import { z } from "zod";

export const CreateCollectionSchema = z.object({
  name: z.string().nonempty({ message: "El nombre es requerido" }),
  parentId: z.string().optional(),
});

export type CreateCollectionFormValues = z.infer<typeof CreateCollectionSchema>;
