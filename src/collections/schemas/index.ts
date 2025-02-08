import { z } from "zod";

export const CreateCollectionSchema = z.object({
  name: z.string().nonempty({ message: "El nombre es requerido" }),
});

export type CreateCollectionFormValues = z.infer<typeof CreateCollectionSchema>;
