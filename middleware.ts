import { verifyTokenFromRequest } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/login", "/signup", "/"];
const authRoutes = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);

  const token = request.cookies.get("games_hub_session")?.value;
  const session = token ? await verifyTokenFromRequest(request) : null;

  // Se está autenticado e tenta acessar auth routes, redireciona para home
  if (session && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Se não está autenticado e tenta acessar rota protegida, redireciona para login
  if (!session && !isPublicRoute && !pathname.startsWith("/api")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
