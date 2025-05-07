import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/protected-route/:path*", "/dashboard/:path*"], // Define valid route patterns
};
