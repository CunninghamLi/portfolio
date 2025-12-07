// components/ExperienceSection.tsx
type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  description: string;
  tech: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Computer Science Technology student",
    org: "Champlain College Saint-Lambert",
    period: "2022 - 2026",
    description:
      "DEC",
    tech: ["Java", "JavaScript", "TypeScript", "SQL", "Spring Boot", "React", "Angular"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight mb-4">
        Experience
      </h2>

      <ol className="relative border-l border-slate-700 pl-5 space-y-6">
        {experiences.map((item, idx) => (
          <li key={idx} className="relative">

            <div>
              <h3 className="text-sm font-semibold">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400">
                {item.org} • {item.period}
              </p>
              <p className="mt-2 text-xs text-slate-300">
                {item.description}
              </p>

              <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-800 px-2 py-1 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
