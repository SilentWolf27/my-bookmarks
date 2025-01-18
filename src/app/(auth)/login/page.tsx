import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="w-full h-full px-6 py-12 text-base flex flex-col justify-center items-center text-primary-font">
      <h2 className="mb-10 text-2xl text-center">Accede a tu cuenta</h2>
      <LoginForm />
    </main>
  );
}
