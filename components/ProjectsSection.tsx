import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const featured = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="space-y-4"
    >
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        {/* if you want a full /projects page later, keep this */}
        {/* <Link ...>View all</Link> */}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
