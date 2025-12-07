import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const username = formData.get("username")?.toString();
  const password = formData.get("password")?.toString();

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;
  const tokenSecret = process.env.ADMIN_TOKEN_SECRET;

  if (
    username === validUsername &&
    password === validPassword &&
    tokenSecret
  ) {
    const res = NextResponse.redirect(
      new URL("/admin/dashboard", req.url)
    );

    res.cookies.set("admin_auth", tokenSecret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  }

  return NextResponse.redirect(
    new URL("/admin/login?error=1", req.url)
  );
}
