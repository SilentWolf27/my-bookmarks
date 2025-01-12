import { NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middlewareClient";

export async function middleware(request: NextRequest) {
  const { user, supabaseResponse } = await updateSession(request);
  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
