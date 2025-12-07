// components/ProjectsSection.tsx
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  // show all projects for now; you can slice if you want fewer
  const featured = projects;

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-4 py-16 scroll-mt-20"
    >
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        {/* if you add a /projects page later, you can bring this back */}
        {/* <Link
          href="/projects"
          className="text-xs font-medium text-blue-600 hover:underline"
        >
          View all
        </Link> */}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
