import { GithubFilled } from "@ant-design/icons";

export default function LoginPage() {
  return (
    <main className="w-full px-6 py-12">
      <div className="">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="example@email.com" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="********" />
          </div>

          <button type="submit">Iniciar sesión</button>
        </form>
        <form>
          <button type="submit">
            <GithubFilled />
            GitHub
          </button>
        </form>
      </div>
    </main>
  );
}
