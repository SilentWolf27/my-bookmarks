import { EmailLoginForm } from "./EmailLoginForm";
import { GithubFilled } from "@ant-design/icons";
import { SocialLoginForm } from "./SocialLoginForm";
import Link from "next/link";
import { SignInWithGithub } from "@/auth/actions/github";

export function LoginForm() {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-8">
      <SocialLoginForm action={SignInWithGithub}>
        <GithubFilled className="text-lg" />
        Inicia Sesión con GitHub
      </SocialLoginForm>

      <div className="flex items-center gap-4 my-6">
        <span className="inline-block border-b border-gray-200 w-full"></span>
        <p className="text-sm text-gray-500">o</p>
        <span className="inline-block border-b border-gray-200 w-full"></span>
      </div>

      <EmailLoginForm />

      <p className="text-sm text-gray-600 text-center mt-6">
        ¿Aún no tienes una cuenta?{" "}
        <Link
          href="registro"
          className="text-blue-600 hover:text-blue-700 font-medium">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}
