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
      emailRedirectTo: "http://localhost:3000",
    },
  });

  if (error) {
    console.error("Sign up error:", error);
    return { error: error.message };
  }

  return redirect("/");
}
