import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <section className="w-full h-full text-base flex flex-col justify-center items-center text-primary-font">
      <h2 className="mb-10 text-2xl text-center">Accede a tu cuenta</h2>
      <LoginForm />
    </section>
  );
}
