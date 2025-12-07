import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <p className="text-sm text-slate-300 mb-4">
          Interested in working together, or want to talk about a project or
          internship opportunity? Reach out.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="snipercunni4399@gmail.com"
            className="rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition"
          >
            Email me
          </a>

          <Link
            href="https://github.com/CunninghamLi"
            target="_blank"
            className="text-sm text-slate-300 hover:text-sky-400"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/your-link"
            target="_blank"
            className="text-sm text-slate-300 hover:text-sky-400"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
