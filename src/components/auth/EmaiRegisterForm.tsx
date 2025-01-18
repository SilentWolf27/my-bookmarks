export function EmailRegisterForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          placeholder="Nombre"
          className="w-full border border-zinc-300 rounded-md py-1 px-3 min-h-[32px]"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email">Correo electrónico</label>

        <input
          type="email"
          id="email"
          placeholder="example@email.com"
          className="w-full border border-zinc-300 rounded-md py-1 px-3 min-h-[32px]"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="********"
          className="w-full border border-zinc-300 rounded-md py-1 px-3 min-h-[32px]"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="confirm-password">Confirmar contraseña</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="********"
          className="w-full border border-zinc-300 rounded-md py-1 px-3 min-h-[32px]"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600 active:bg-indigo-700 transition-[background-color] duration-300">
        Registrate
      </button>
    </form>
  );
}
