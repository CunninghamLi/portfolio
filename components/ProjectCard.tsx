// components/ProjectCard.tsx
import type { Project } from "@/lib/projects";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-transform hover:-translate-y-1 hover:border-blue-500/60 hover:bg-slate-900">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-50">
          {project.title}
        </h3>
        {project.liveUrl && (
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
            Live
          </span>
        )}
      </div>

      <p className="mt-2 text-xs text-slate-300">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-1 text-[10px]">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-800 px-2 py-0.5 text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-3 flex gap-3 text-[11px]">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            className="text-slate-300 hover:text-blue-400"
          >
            View code
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            className="text-slate-300 hover:text-blue-400"
          >
            Live demo
          </Link>
        )}
      </div>
    </article>
  );
}
