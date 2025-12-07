// components/Navbar.tsx
import Link from "next/link";
import { cookies } from "next/headers";

export default async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_auth")?.value;
  const expected = process.env.ADMIN_TOKEN_SECRET;
  const isAuthed = Boolean(token && expected && token === expected);

  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Cunningham<span className="text-blue-600">.dev</span>
        </Link>

        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="#about" className="hover:text-blue-600">
            About Me
          </Link>
          <Link href="#experience" className="hover:text-blue-600">
            Experience
          </Link>
          <Link href="#projects" className="hover:text-blue-600">
            Projects
          </Link>

          {isAuthed ? (
            <>
              <Link
                href="/admin/dashboard"
                className="text-xs text-gray-500 hover:text-blue-600"
              >
                Dashboard
              </Link>
              <form action="/admin/logout" method="POST">
                <button
                  type="submit"
                  className="text-xs text-gray-500 hover:text-blue-600"
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/admin/login"
              className="text-xs text-gray-500 hover:text-blue-600"
            >
              Admin Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
