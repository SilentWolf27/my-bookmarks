import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middlewareClient";

export async function middleware(request: NextRequest) {
  const { user, supabaseResponse } = await updateSession(request);

  const path = request.nextUrl.pathname;

  if (!!user && (path === "/login" || path === "/"))
    return NextResponse.redirect(new URL("/dashboard", request.url));

  if (!user && path !== "/login")
    return NextResponse.redirect(new URL("/login", request.url));

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
