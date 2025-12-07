import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const featured = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-4 py-16 scroll-mt-20"
    >
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Projects
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
  {featured.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>

    </section>
  );
}
