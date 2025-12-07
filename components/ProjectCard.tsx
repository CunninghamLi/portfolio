// components/ProjectCard.tsx
"use client";

import { useRouter } from "next/navigation";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const router = useRouter();

  const handleCardClick = () => {
    if (project.liveUrl) {
      router.push(project.liveUrl);
    }
  };

  const isClickable = !!project.liveUrl;

  return (
    <article
      onClick={isClickable ? handleCardClick : undefined}
      className={[
        "rounded-lg border border-slate-800 bg-slate-900/60 p-4 transition",
        isClickable
          ? "cursor-pointer hover:border-blue-500 hover:-translate-y-0.5 hover:bg-slate-900"
          : "",
      ].join(" ")}
    >
      <h3 className="text-sm font-semibold mb-1">{project.title}</h3>
      <p className="text-xs text-slate-300 mb-3">{project.description}</p>

      <div className="mb-3 flex flex-wrap gap-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-2 text-[11px]">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-700 px-3 py-1 text-slate-200 hover:border-slate-500"
            // so clicking this doesn’t trigger the card’s click
            onClick={(e) => e.stopPropagation()}
          >
            View code
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-blue-600 px-3 py-1 text-slate-950 font-medium hover:bg-blue-500"
            onClick={(e) => e.stopPropagation()}
          >
            Open app
          </a>
        )}
      </div>
    </article>
  );
}
