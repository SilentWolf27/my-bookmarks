import { RegisterForm } from "@/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-2">
          My Bookmarks
        </h1>
        <p className="text-sm text-gray-600 text-center mb-8">
          Crea una cuenta para empezar a gestionar tus marcadores
        </p>
        <RegisterForm />
      </div>
    </main>
  );
}
