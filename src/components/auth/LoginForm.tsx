import { GithubFilled } from "@ant-design/icons";
import { SocialLoginForm } from "./SocialLoginForm";
import { EmailLoginForm } from "./EmailLoginForm";

export function LoginForm() {
  return (
    <div className="max-w-sm flex flex-col gap-6">
      <SocialLoginForm>
        <GithubFilled />
        Inicia Sesión con GitHub
      </SocialLoginForm>

      <div className="flex items-center gap-4">
        <span className="inline-block border-b border-zinc-300 w-full"></span>
        <p className="text-md">o</p>
        <span className="inline-block border-b border-zinc-300 w-full"></span>
      </div>

      <EmailLoginForm />
    </div>
  );
}
