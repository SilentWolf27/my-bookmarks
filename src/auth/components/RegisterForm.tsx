import { EmailRegisterForm } from "./EmaiRegisterForm";
import { GithubFilled } from "@ant-design/icons";
import { SocialLoginForm } from "./SocialLoginForm";
import Link from "next/link";

export function RegisterForm() {
  return (
    <div className="w-full max-w-sm flex flex-col gap-6 bg-white py-12 px-10 rounded-md">
      <SocialLoginForm>
        <GithubFilled />
        Regístrate con GitHub
      </SocialLoginForm>

      <div className="flex items-center gap-4">
        <span className="inline-block border-b border-zinc-300 w-full"></span>
        <p className="text-md">o</p>
        <span className="inline-block border-b border-zinc-300 w-full"></span>
      </div>

      <EmailRegisterForm />

      <p className="text-sm text-right">
        ¿Ya tienes una cuenta?{" "}
        <Link
          href="login"
          className="text-indigo-500 hover:underline decoration-indigo-600">
          Inicia sesión aquí
        </Link>
      </p>
    </div>
  );
}
