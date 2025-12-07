const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C#"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & DB",
    items: ["Spring Boot", "Node.js", "ASP.NET Core", "SQL Server", "PostgreSQL"],
  },
  {
    label: "DevOps & Tools",
    items: ["Git", "Docker", "Vercel", "Render"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl px-4 py-16 scroll-mt-20"
    >
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">
        Skills
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {group.label}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-800 px-3 py-1 text-[11px] text-slate-200 transition hover:bg-sky-500/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
