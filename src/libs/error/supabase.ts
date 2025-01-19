export function buildErrorFromSupabase(code: unknown): Error {
  console.error("Supabase error code:", code);
  switch (code) {
    case "user_already_exists":
      return new Error("El correo electrónico ya se encuentra registrado");
    default:
      console.error("Unhandled error code:", code);
      return new Error(
        "Ocurrió un error inesperado. Por favor, intenta de nuevo"
      );
  }
}
