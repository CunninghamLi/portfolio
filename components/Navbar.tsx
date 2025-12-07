import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          My Portfolio<span className="text-blue-600"></span>
        </Link>

        <div className="flex gap-4 text-sm font-medium">
          <Link href="/#about" className="hover:text-blue-600">
            About Me
          </Link>
          <Link href="/#experience" className="hover:text-blue-600">
            Experience
          </Link>
          <Link href="/#projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link
            href="/admin/login"
            className="text-xs text-gray-500 hover:text-blue-600"
          >
            Admin Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
