import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="w-full h-full px-6 py-12 text-base flex flex-col justify-center items-center text-primary-font">
      <h2 className="mb-10 text-2xl text-center"> Crea una cuenta </h2>
      <RegisterForm />
    </main>
  );
}
