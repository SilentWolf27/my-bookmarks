"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
};

type RegisterFormResult = {
  error: string;
};

export async function emailSignUp(
  values: RegisterFormValues
): Promise<void | RegisterFormResult> {
  const supabase = await createClient();

  const { error, data } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      emailRedirectTo: process.env.EMAIL_CONFIRMATION_REDIRECT_URI,
    },
  });

  if (error) {
    console.error("Sign up error:", error);
    return { error: error.message };
  }

  return redirect("/");
}
