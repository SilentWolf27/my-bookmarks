import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/supabase/clients/middlewareClient";

export async function middleware(request: NextRequest) {
  const { user, supabaseResponse } = await updateSession(request);

  const path = request.nextUrl.pathname;
  const isAuthRoute = path.startsWith("/auth");

  if (!user && !isAuthRoute)
    return NextResponse.redirect(new URL("/auth/login", request.url));

  if (path === "/")
    return NextResponse.redirect(new URL("/inicio", request.url));

  if (!!user && isAuthRoute)
    return NextResponse.redirect(new URL("/inicio", request.url));

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
