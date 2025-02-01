"use server";

import { buildErrorFromSupabase } from "@/libs/error/supabase";
import { emailSignInFormValues } from "@/schemas/auth/signIn";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

type RegisterFormResult = {
  error: Error;
};

export async function emailSignIn({
  email,
  password,
}: emailSignInFormValues): Promise<void | RegisterFormResult> {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return { error: buildErrorFromSupabase(error.code) };

  return redirect("/");
}
