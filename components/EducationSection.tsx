export default function EducationSection() {
  return (
    <section
      id="education"
      className="mx-auto max-w-5xl px-4 py-16 scroll-mt-20"
    >
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">
        Education
      </h2>

      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
          2023 – 2026 · In progress
        </p>
        <h3 className="mt-1 text-sm font-semibold">
          Computer Science Technology
        </h3>
        <p className="text-xs text-slate-400">
          Champlain College Saint-Lambert, Québec
        </p>
        <p className="mt-3 text-sm text-slate-300">
          Focus on full-stack development, databases, cloud, and mobile apps.
          Coursework includes Java / Spring Boot, .NET, React / Next.js,
          SwiftUI, and database administration.
        </p>
      </div>
    </section>
  );
}
