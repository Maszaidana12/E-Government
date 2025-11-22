import withAuth from "@/middlewares/withAuth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function mainmiddleware(request: NextRequest) {
  const res = NextResponse.next();
  res.headers.set("Cache-Control", "no-store");
  return res;
}

export default withAuth(
  mainmiddleware,
  
  // 1. Path yang wajib login (semua user)
  [
    "/dashboard",
    "/profile",
  ],

  // 2. Path yang khusus untuk RT
  [
    { path: "/akun/penduduk", roles: ["RT"] },
    { path: "/rt/rekap", roles: ["RT"] },
    { path: "/rt", roles: ["RT"] },
    { path: "/admin", roles: ["RT"] },
  ]
);
