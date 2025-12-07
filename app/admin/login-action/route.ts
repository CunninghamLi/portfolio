// app/admin/login-action/route.ts
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const username = formData.get("username")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;
  const tokenSecret = process.env.ADMIN_TOKEN_SECRET;

  if (!validUsername || !validPassword || !tokenSecret) {
    // So you see quickly if env vars are missing
    return NextResponse.json(
      { error: "Admin env vars not set" },
      { status: 500 }
    );
  }

  // Correct credentials: set cookie and go back to home page
  if (username === validUsername && password === validPassword) {
    const res = NextResponse.redirect(new URL("/", req.url));

    res.cookies.set("admin_auth", tokenSecret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return res;
  }

  // Wrong credentials: redirect back with ?error=1
  return NextResponse.redirect(
    new URL("/admin/login?error=1", req.url)
  );
}
