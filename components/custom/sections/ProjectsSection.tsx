"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { GhostButton } from "../ui/Buttons";
import { FadeIn } from "../ui/FadeIn";

const projects = [
  {
    num: "01",
    category: "Full Stack Platform",
    name: "Hostify",
    color: "from-blue-400 to-indigo-500",
    desc: "A full-stack static site hosting platform with one-click GitHub deployments and custom subdomains."
  },
  {
    num: "02",
    category: "Real-time Collab",
    name: "Draw.wine",
    color: "from-pink-400 to-rose-500",
    desc: "Real-time collaborative whiteboard with Gemini AI integration, Socket.IO, and Solana wallet auth."
  }
];

type ProjectType = { num: string; category: string; name: string; color: string; desc?: string; };

const ProjectCard = ({ project, index, total }: { project: ProjectType, index: number, total: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // Calculate target scale based on how far we are in the stack
  // The first card scales down the most, the last card scales down the least.
  const targetScale = 1 - (total - 1 - index) * 0.05;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div 
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full"
      style={{ zIndex: index }}
    >
      <motion.div 
        ref={cardRef}
        style={{ scale }}
        className="w-full max-w-6xl h-full max-h-[700px] bg-background border border-border shadow-2xl rounded-[40px] sm:rounded-[60px] p-6 sm:p-10 flex flex-col origin-top overflow-hidden"
      >
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div className="flex items-center gap-6">
            <span className="text-6xl font-black text-muted-foreground/20">{project.num}</span>
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-1">
                {project.category}
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">{project.name}</h3>
              {project.desc && <p className="text-muted-foreground max-w-lg">{project.desc}</p>}
            </div>
          </div>
          <GhostButton>View Project</GhostButton>
        </div>

        {/* Bottom Media (Clean 3D/Gradient Placeholders) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 h-full min-h-[300px]">
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className={`flex-1 rounded-[30px] bg-gradient-to-br ${project.color} opacity-80`} />
            <div className={`flex-[1.5] rounded-[30px] bg-gradient-to-tr ${project.color} opacity-60`} />
          </div>
          <div className={`md:col-span-7 rounded-[30px] bg-gradient-to-bl ${project.color} opacity-40`} />
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section className="bg-background relative py-20 px-6 -mt-10 z-10 rounded-t-[40px] sm:rounded-t-[60px]">
      <FadeIn>
        <h2 className="text-4xl sm:text-6xl font-black text-center mb-10 text-foreground">Projects</h2>
      </FadeIn>

      <div className="relative pb-32">
        {projects.map((proj, i) => (
          <ProjectCard key={i} project={proj} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
};
