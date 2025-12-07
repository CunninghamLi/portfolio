// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-black px-6 py-10">
      {/* glow */}
      <div className="pointer-events-none absolute -right-24 -top-32 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
          Full-stack developer in training
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Building clean, practical{" "}
          <span className="text-sky-400">full-stack apps</span>.
        </h1>

        <p className="max-w-xl text-sm text-slate-300">
          I’m a Computer Science Technology student in Québec focused on
          React, Next.js, Spring Boot, and modern cloud tooling. I like
          shipping real projects that solve real problems.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm transition hover:bg-sky-400 hover:-translate-y-0.5"
          >
            View my projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-700 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-sky-400 hover:text-sky-300 hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
