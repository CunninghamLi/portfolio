import { Project } from "@/lib/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="rounded-lg border border-slate-800 p-5">
      <h3 className="text-lg font-semibold">{project.title}</h3>

      <p className="mt-2 text-sm text-slate-300">
        {project.description}
      </p>

      <p className="mt-2 text-xs text-slate-400">
        {project.tech.join(" • ")}
      </p>

      <div className="mt-3 flex gap-4 text-sm">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            className="underline"
          >
            Code
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            className="underline"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}
