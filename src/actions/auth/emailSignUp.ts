"use server";

import { buildErrorFromSupabase } from "@/libs/error/supabase";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
};

type RegisterFormResult = {
  error: Error;
};

export async function emailSignUp(
  values: RegisterFormValues
): Promise<void | RegisterFormResult> {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      emailRedirectTo: process.env.EMAIL_CONFIRMATION_REDIRECT_URI,
    },
  });

  if (error)
    return {
      error: buildErrorFromSupabase(error.code),
    };

  return redirect("/");
}
