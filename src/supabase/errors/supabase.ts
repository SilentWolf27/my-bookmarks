export function buildErrorFromSupabase(code: unknown): Error {
  console.error("Supabase error code:", code);
  switch (code) {
    case "user_already_exists":
      return new Error("El correo electrónico ya se encuentra registrado");
    case "invalid_credentials":
      return new Error("El correo electrónico o la contraseña son incorrectos");
    default:
      console.error("Unhandled error code:", code);
      return new Error(
        "Ocurrió un error inesperado. Por favor, intenta de nuevo"
      );
  }
}
