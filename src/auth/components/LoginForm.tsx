import { EmailLoginForm } from "./EmailLoginForm";
import { GithubFilled } from "@ant-design/icons";
import { SocialLoginForm } from "./SocialLoginForm";
import Link from "next/link";
import { SignInWithGithub } from "@/auth/actions/github";

export function LoginForm() {
  return (
    <div className="w-full max-w-sm flex flex-col gap-6 bg-white py-12 px-10 rounded-md">
      <SocialLoginForm action={SignInWithGithub}>
        <GithubFilled />
        Inicia Sesión con GitHub
      </SocialLoginForm>

      <div className="flex items-center gap-4">
        <span className="inline-block border-b border-zinc-300 w-full"></span>
        <p className="text-md">o</p>
        <span className="inline-block border-b border-zinc-300 w-full"></span>
      </div>

      <EmailLoginForm />

      <p className="text-sm text-right">
        ¿Aún no tienes una cuenta?{" "}
        <Link
          href="registro"
          className="text-indigo-500 hover:underline decoration-indigo-600">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}
