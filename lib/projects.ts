// lib/projects.ts
export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "pathfinder-ai",
    title: "PathFinder AI",
    description:
      "Full-stack job exploration platform with Spring Boot backend and React frontend.",
    tech: ["Spring Boot", "React", "TypeScript"],
    githubUrl: "https://github.com/CunninghamLi/pathfinderai",
    liveUrl: "https://pathfinderai-sandy.vercel.app/",
  },
  {
    id: "luckyplay",
    title: "LuckyPlay",
    description: "Next.js demo app with authentication and fake credits.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    githubUrl: "https://github.com/CunninghamLi/LuckyPlay",
    liveUrl: "https://luckyplay-pi.vercel.app/",
  },
];
