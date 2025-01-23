"use client";

import { emailSignUp } from "@/actions/auth/emailSignUp";
import { signUpSchema, signUpFormValues } from "@/schemas/auth/signup";
import { LoadingOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { FocusEventHandler } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export function EmailRegisterForm() {
  const {
    handleSubmit,
    register,
    trigger,
    setError,
    formState: { errors: formErrors, isSubmitting },
  } = useForm<signUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<signUpFormValues> = async (data) => {
    const result = await emailSignUp(data);

    if (result?.error) setError("root", { message: result.error.message });
  };

  const onBlur: FocusEventHandler<HTMLInputElement> = async ({ target }) => {
    const name = target.name as keyof signUpFormValues;
    await trigger(name);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="name">Nombre</label>
        {formErrors.name && (
          <span className="text-red-600 text-sm">
            {formErrors.name.message}
          </span>
        )}
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Nombre"
          className={`w-full border border-zinc-300 rounded-md py-1 px-3 min-h-[32px] ${
            formErrors.name ? "border-red-600" : ""
          }`}
          onBlur={onBlur}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email">Correo electrónico</label>
        {formErrors.email && (
          <span className="text-red-600 text-sm">
            {formErrors.email.message}
          </span>
        )}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="example@email.com"
          className={`w-full border border-zinc-300 rounded-md py-1 px-3 min-h-[32px] ${
            formErrors.email ? "border-red-600" : ""
          }`}
          onBlur={onBlur}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="password">Contraseña</label>
        {formErrors.password && (
          <span className="text-red-600 text-sm">
            {formErrors.password.message}
          </span>
        )}
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="********"
          className={`w-full border border-zinc-300 rounded-md py-1 px-3 min-h-[32px] ${
            formErrors.password ? "border-red-600" : ""
          }`}
          onBlur={onBlur}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600 active:bg-indigo-700 transition-[background-color] duration-300">
        {isSubmitting ? <LoadingOutlined /> : "Registrarse"}
      </button>
      {formErrors.root && (
        <span className="text-red-600 text-sm">{formErrors.root.message}</span>
      )}
    </form>
  );
}
