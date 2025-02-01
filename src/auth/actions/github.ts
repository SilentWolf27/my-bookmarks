"use server";

import { createClient } from "@/supabase/clients/server";
import { redirect } from "next/navigation";

export async function SignInWithGithub() {
  const supabase = await createClient();

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: process.env.AUTH_GITHUB_REDIRECT_URI,
    },
  });

  if (error || !data.url) return redirect("auth-error");

  return redirect(data.url);
}
