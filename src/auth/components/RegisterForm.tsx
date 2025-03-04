import { EmailRegisterForm } from "./EmaiRegisterForm";
import { GithubFilled } from "@ant-design/icons";
import { SocialLoginForm } from "./SocialLoginForm";
import Link from "next/link";

export function RegisterForm() {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-8">
      <SocialLoginForm>
        <GithubFilled className="text-lg" />
        Regístrate con GitHub
      </SocialLoginForm>

      <div className="flex items-center gap-4 my-6">
        <span className="inline-block border-b border-gray-200 w-full"></span>
        <p className="text-sm text-gray-500">o</p>
        <span className="inline-block border-b border-gray-200 w-full"></span>
      </div>

      <EmailRegisterForm />

      <p className="text-sm text-gray-600 text-center mt-6">
        ¿Ya tienes una cuenta?{" "}
        <Link
          href="login"
          className="text-blue-600 hover:text-blue-700 font-medium">
          Inicia sesión aquí
        </Link>
      </p>
    </div>
  );
}
