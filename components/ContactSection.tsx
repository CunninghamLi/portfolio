// components/ContactSection.tsx
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-900/40 p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight mb-2">
        Contact
      </h2>
      <p className="text-sm text-slate-300 mb-4">
        Interested in working together, or want to talk about a project or
        internship opportunity Reach out.
      </p>

      <div className="flex flex-wrap items-center gap-3 text-sm">
        <Link
          href="mailto:snipercunni4399@gmail.com"
          className="rounded-md bg-blue-500 px-4 py-2 font-medium text-slate-950 hover:bg-blue-400 transition"
        >
          Email me
        </Link>

        <Link
          href="https://github.com/CunninghamLi"
          target="_blank"
          className="text-slate-300 hover:text-blue-400"
        >
          GitHub
        </Link>

        {/* Add LinkedIn when ready */}
        {/* <Link
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          className="text-slate-300 hover:text-blue-400"
        >
          LinkedIn
        </Link> */}
      </div>
    </section>
  );
}
