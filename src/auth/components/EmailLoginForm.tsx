"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  emailSignInFormValues,
  emailSignInSchema,
} from "@/auth/schemas/signIn";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSignIn } from "@/auth/actions/emailSignIn";
import { FocusEventHandler, useState } from "react";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

const baseInputStyles = "w-full py-2 px-3 rounded-md bg-white border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-sm";

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
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        {formErrors.email && (
          <span className="text-sm text-red-600">
            {formErrors.email.message}
          </span>
        )}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="example@email.com"
          className={baseInputStyles}
          onBlur={onBlur}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Contraseña
        </label>
        {formErrors.password && (
          <span className="text-sm text-red-600">
            {formErrors.password.message}
          </span>
        )}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            placeholder="********"
            className={baseInputStyles}
            onBlur={onBlur}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            type="button"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed text-sm font-medium cursor-pointer"
        disabled={isSubmitting}>
        {isSubmitting ? (
          <LoadingOutlined className="text-base" />
        ) : (
          "Iniciar sesión"
        )}
      </button>

      {formErrors.root && (
        <span className="text-sm text-red-600">{formErrors.root.message}</span>
      )}
    </form>
  );
}
