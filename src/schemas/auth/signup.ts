import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().nonempty({ message: "Este campo es requerido" }),
  email: z
    .string()
    .nonempty({ message: "Este campo es requerido" })
    .email({ message: "La dirección de correo electrónico no es válida" }),
  password: z
    .string()
    .nonempty({ message: "Este campo es requerido" })
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});
