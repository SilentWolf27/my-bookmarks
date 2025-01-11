import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);

  const code = searchParams.get("code");
  const next = searchParams.get("next") || "/";

  if (!code) return NextResponse.redirect(`${origin}/auth-error`);

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  console.log(error);

  if (error) return NextResponse.redirect(`${origin}/auth-error`);

  return NextResponse.redirect(`${origin}${next}`);
}
