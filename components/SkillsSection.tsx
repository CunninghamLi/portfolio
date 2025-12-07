// components/SkillsSection.tsx
const skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Spring Boot",
  "React",
  "Angular",
  "Python",
  "Docker",
  "C#",
  "HTML",
  "CSS"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-4 scroll-mt-24">
      {/* Section header */}
      <h2 className="text-2xl font-semibold tracking-tight">
        Skills
      </h2>

      {/* Single card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-800 px-3 py-1 text-[11px] text-slate-200 transition hover:bg-sky-500/20 hover:text-sky-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
