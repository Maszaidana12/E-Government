import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse, NextMiddleware } from "next/server";

interface RoleProtection {
  path: string;
  roles: string[];
}

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
  roleProtection: RoleProtection[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    // 1. Cek apakah butuh login
    if (requireAuth.includes(pathname)) {
      const token = await getToken({ req, secret: process.env.AUTH_SECRET });

      if (!token) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }
    }

    // 2. Cek role untuk halaman tertentu
    for (const rule of roleProtection) {
      if (pathname.startsWith(rule.path)) {
        const token = await getToken({ req, secret: process.env.AUTH_SECRET });

        if (!token || !rule.roles.includes(token.role as string)) {
          return new NextResponse("FORBIDDEN", { status: 403 });
        }
      }
    }

    return middleware(req, next);
  };
}
