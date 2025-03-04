"use client";

import { emailSignUp } from "@/auth/actions/emailSignUp";
import { signUpSchema, signUpFormValues } from "@/auth/schemas/signup";
import { LoadingOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { FocusEventHandler } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const baseInputStyles = "w-full py-2 px-3 rounded-md bg-white border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-sm";

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
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Nombre
        </label>
        {formErrors.name && (
          <span className="text-sm text-red-600">
            {formErrors.name.message}
          </span>
        )}
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Nombre"
          className={`${baseInputStyles} ${
            formErrors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
          }`}
          onBlur={onBlur}
        />
      </div>

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
          className={`${baseInputStyles} ${
            formErrors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
          }`}
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
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="********"
          className={`${baseInputStyles} ${
            formErrors.password ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
          }`}
          onBlur={onBlur}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed text-sm font-medium cursor-pointer"
        disabled={isSubmitting}>
        {isSubmitting ? (
          <LoadingOutlined className="text-base" />
        ) : (
          "Registrarse"
        )}
      </button>

      {formErrors.root && (
        <span className="text-sm text-red-600">{formErrors.root.message}</span>
      )}
    </form>
  );
}
