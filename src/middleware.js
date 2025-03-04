import { NextResponse } from "next/server";
 

export function middleware(request) {
  // Extract the token from cookies
  // const token = request.cookies.get("token");
  const token = " "
 
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
