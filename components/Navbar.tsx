// components/Navbar.tsx
import Link from "next/link";
import { cookies } from "next/headers";

export default async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_auth")?.value;
  const expected = process.env.ADMIN_TOKEN_SECRET;
  const isAuthed = Boolean(token && expected && token === expected);

  const linkClass = "text-sm font-medium hover:text-blue-600";

  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Cunningham Li<span className="text-blue-600"></span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="#experience" className={linkClass}>
            Experience
          </Link>
          <Link href="#projects" className={linkClass}>
            Projects
          </Link>

          {isAuthed ? (
            <>
              <Link href="/admin/dashboard" className={linkClass}>
                Dashboard
              </Link>

              <form action="/admin/logout" method="POST">
                <button
                  type="submit"
                  className={linkClass}
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <Link href="/admin/login" className={linkClass}>
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
