"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  emailSignInFormValues,
  emailSignInSchema,
} from "@/schemas/auth/signIn";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSignIn } from "@/actions/auth/emailSignIn";
import { FocusEventHandler, useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

export function EmailLoginForm() {
  const {
    handleSubmit,
    register,
    trigger,
    setError,
    formState: { errors: formErrors, isSubmitting },
  } = useForm<emailSignInFormValues>({
    resolver: zodResolver(emailSignInSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<emailSignInFormValues> = async (data) => {
    const result = await emailSignIn(data);

    if (result?.error) setError("root", { message: result.error.message });
  };

  const onBlur: FocusEventHandler<HTMLInputElement> = async ({ target }) => {
    const name = target.name as keyof emailSignInFormValues;
    await trigger(name);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
          className="w-full border border-zinc-300 rounded-md py-1 px-3 min-h-[32px]"
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
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            placeholder="********"
            className="h-full w-full py-1 px-3 border border-zinc-300 rounded-md min-h-[32px]"
            onBlur={onBlur}
          />
          <button
            className="absolute right-2 top-0 bottom-0 flex items-center text-zinc-700"
            type="button"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600 active:bg-indigo-700 transition-[background-color] duration-300">
        Inicia sesión
      </button>

      {formErrors.root && (
        <span className="text-red-600 text-sm">{formErrors.root.message}</span>
      )}
    </form>
  );
}
