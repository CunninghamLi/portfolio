import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-4 py-16 scroll-mt-20"
    >
      <h2 className="text-2xl font-semibold tracking-tight mb-4">
        Contact
      </h2>
      <p className="text-sm md:text-base text-slate-300 mb-4 max-w-2xl">
        Want to talk about internships, collaborations, or projects?
        Feel free to reach out.
      </p>

      <div className="flex flex-wrap items-center gap-3 text-sm">
        <a
          href="mailto:snipercunni4399@gmail.com"
          className="inline-flex items-center rounded-md border border-sky-500 bg-sky-500/10 px-4 py-2 font-medium text-sky-300 hover:bg-sky-500/20 transition"
        >
          Email me
        </a>

        <Link
          href="https://github.com/CunninghamLi"
          target="_blank"
          className="text-slate-400 hover:text-slate-100 underline underline-offset-4"
        >
          GitHub
        </Link>

        <Link
          href="https://www.linkedin.com/in/cunningham-li-7b3672382"
          target="_blank"
          className="text-slate-400 hover:text-slate-100 underline underline-offset-4"
        >
          LinkedIn
        </Link>
      </div>
    </section>
  );
}
