"use server";

import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { signUpFormValues } from "@/auth/schemas/signup";
import { createClient } from "@/supabase/clients/server";
import { redirect } from "next/navigation";

type RegisterFormResult = {
  error: Error;
};

export async function emailSignUp(
  values: signUpFormValues
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
