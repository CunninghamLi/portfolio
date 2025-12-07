// components/HeroSection.tsx
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 pt-10 pb-16">
      <p className="text-xs uppercase tracking-[0.25em] text-blue-400 mb-3">
        Full-Stack Developer · Student
      </p>

      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
        Hey, I&apos;m <span className="text-blue-400">Cunningham</span>.
      </h1>

      <p className="text-sm md:text-base text-slate-300 max-w-xl mb-6">
        I&apos;m a computer science student who loves building full-stack apps,
        from clean UIs to solid backends. This portfolio showcases the projects
        I&apos;m using to level up into a professional developer.
      </p>

      <div className="flex flex-wrap gap-3 text-sm">
        <Link
          href="#projects"
          className="rounded-md bg-blue-500 px-4 py-2 font-medium text-slate-950 hover:bg-blue-400 transition"
        >
          View my projects
        </Link>
        <Link
          href="#contact"
          className="rounded-md border border-slate-600 px-4 py-2 font-medium text-slate-100 hover:border-blue-400 hover:text-blue-300 transition"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
