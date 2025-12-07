type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  description: string;
};

const experience: ExperienceItem[] = [
  {
    period: "2023 – PRESENT",
    title: "Computer Science Technology Student",
    place: "Champlain College Saint-Lambert",
    description:
      "Coursework and projects in full-stack web development, databases, mobile apps, and cloud.",
  },
  {
    period: "ONGOING",
    title: "Full-Stack Project Work",
    place: "VladTech, PathFinder AI, others",
    description:
      "Built multi-page web apps with authentication, REST APIs, and modern frontend stacks.",
  },
  {
    period: "ONGOING",
    title: "Personal Learning",
    place: "",
    description:
      "Studying design patterns, deployment, and deeper backend concepts to become a stronger full-stack dev.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-4 py-16 scroll-mt-20"
    >
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">
        Experience
      </h2>

      <div className="relative border-l border-slate-700/70 pl-6">
        {experience.map((item, index) => (
          <article
            key={item.title}
            className={`relative pb-10 ${index === experience.length - 1 ? "pb-0" : ""}`}
          >
            

            <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
              {item.period}
            </p>
            <h3 className="mt-1 text-base font-semibold text-slate-50">
              {item.title}
            </h3>
            {item.place && (
              <p className="text-xs text-slate-400">{item.place}</p>
            )}
            <p className="mt-2 text-sm text-slate-300 max-w-3xl">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
