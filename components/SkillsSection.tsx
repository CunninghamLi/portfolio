// components/SkillsSection.tsx
type SkillGroup = {
  title: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "ASP.NET Core",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "SQLite",
      "Prisma",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "Docker",
      "Vercel",
      "Render",
      "Linux",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight mb-4">
        Skills
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold mb-2 text-slate-200">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
