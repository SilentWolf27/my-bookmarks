import { z } from "zod";

export const emailSignInSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Este campo es requerido" })
    .email({ message: "La dirección de correo electrónico no es válida" }),
  password: z.string().nonempty({ message: "Este campo es requerido" }),
});

export type emailSignInFormValues = z.infer<typeof emailSignInSchema>;
