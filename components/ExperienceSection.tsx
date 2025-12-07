type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  description: string;
  tech: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Computer Science Tutor",
    org: "Champlain College Saint-Lambert",
    period: "September 2025 - December 2025",
    description: "Supported about 20 second year students each week with SQL topics including joins, filtering and relational design and held weekly tutoring sessions to guide students through labs and assignments and help clarify difficult concepts", 
    tech: [
      "SQL",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight">
        Experience
      </h2>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <ol className="relative border-l border-slate-700 pl-5 space-y-6">
          {experiences.map((item, idx) => (
            <li key={idx} className="relative">
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
