"use server";

import { createClient } from "@/supabase/clients/server";
import { redirect } from "next/navigation";

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  redirect("/auth/login");
}
