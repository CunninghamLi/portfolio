// components/EducationSection.tsx
export default function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight mb-4">
        Education
      </h2>

      <ol className="relative border-l border-slate-700 pl-5">
        <li className="relative">

          <h3 className="text-sm font-semibold">
            Computer Science Technology (DEC)
          </h3>
          <p className="text-xs text-slate-400">
            Champlain College Saint-Lambert • 2023 – 2026 (Expected)
          </p>

          <p className="mt-2 text-xs text-slate-300 max-w-xl">
            Focus on full-stack development, databases, cloud computing,
            and software engineering fundamentals. Built multiple
            deployable projects using modern web and backend technologies.
          </p>
        </li>
      </ol>
    </section>
  );
}
