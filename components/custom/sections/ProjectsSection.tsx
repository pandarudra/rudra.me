"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FadeIn } from "../ui/FadeIn";
import { projects } from "@/constants";

type ProjectType = {
  num: string;
  category: string;
  name: string;
  image: string;
  github: string;
  live: string;
  desc?: string;
};

const ProjectCard = ({
  project,
  index,
  total,
}: {
  project: ProjectType;
  index: number;
  total: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [infoOpen, setInfoOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.05;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full"
      style={{ zIndex: index }}
    >
      <motion.div
        ref={cardRef}
        style={{ scale, willChange: "transform" }}
        className="w-full max-w-6xl h-full max-h-175 bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 shadow-2xl rounded-[24px] p-6 sm:p-10 flex flex-col origin-top overflow-hidden"
      >
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-start gap-5 sm:gap-6">
            <span className="text-5xl sm:text-6xl font-black text-[#0e0f0c]/10 dark:text-white/10 leading-none">
              {project.num}
            </span>
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-[#054d28] dark:text-[#9fe870] mb-1">
                {project.category}
              </p>
              <h3 className="text-3xl sm:text-4xl font-black mb-2 text-[#0e0f0c] dark:text-white">
                {project.name}
              </h3>
              {project.desc && (
                <p className="text-[#454745] dark:text-[#868685] max-w-lg font-medium">{project.desc}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center justify-center gap-2 rounded-[24px] border-2 border-[#0e0f0c]/5 dark:border-white/5 bg-transparent px-5 text-[14px] font-bold text-[#0e0f0c] dark:text-white transition-all hover:bg-black/5 dark:hover:bg-white/5">
              <Github className="size-4" />
              GitHub
            </a>
            <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center justify-center gap-2 rounded-[24px] bg-[#054d28] dark:bg-[#9fe870] px-5 text-[14px] font-bold text-white dark:text-[#0e0f0c] transition-all hover:bg-[#2ead4b] dark:hover:bg-[#cdffad] hover:scale-105 active:scale-95 shadow-lg shadow-[#054d28]/20 dark:shadow-[#9fe870]/20">
              <ExternalLink className="size-4" />
              Live
            </a>
            <button
              type="button"
              onClick={() => setInfoOpen(true)}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-[24px] border-2 border-transparent bg-transparent px-5 text-[14px] font-bold text-[#0e0f0c] dark:text-white transition-all hover:bg-black/5 dark:hover:bg-white/5"
            >
              <Info className="size-4" />
              Info
            </button>
          </div>
        </div>

        {/* Bottom Media */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 h-full min-h-75">
          <div className="md:col-span-5 flex flex-col gap-4 min-h-75">
            <div className="relative flex-[1.35] rounded-[24px] overflow-hidden border border-[#0e0f0c]/5 dark:border-white/5 bg-[#e8ebe6] dark:bg-black">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70 mb-2">
                  Preview
                </p>
                <p className="text-lg font-black text-white drop-shadow-sm">
                  {project.name}
                </p>
              </div>
            </div>
            <div className="relative flex-[0.9] rounded-[24px] overflow-hidden border border-[#0e0f0c]/5 dark:border-white/5 bg-[#e8ebe6] dark:bg-black">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3">
                <span className="rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white border border-white/20">
                  {project.category}
                </span>
                <span className="rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white border border-white/20">
                  {project.num}
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 rounded-[24px] overflow-hidden border border-[#0e0f0c]/5 dark:border-white/5 bg-[#e8ebe6] dark:bg-black relative min-h-75">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
              <div className="max-w-md rounded-[24px] border border-white/20 bg-black/80 p-6 text-white shadow-xl">
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#054d28] dark:text-[#9fe870] mb-3">
                  About this project
                </p>
                <p className="text-lg sm:text-xl font-medium leading-relaxed text-white">
                  {project.desc}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-bold text-white/80">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                    GitHub + Live links included
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                    Info opens modal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Dialog open={infoOpen} onOpenChange={setInfoOpen}>
          <DialogContent className="sm:max-w-xl bg-white dark:bg-[#0e0f0c] border border-[#0e0f0c]/10 dark:border-white/10 rounded-[24px]">
            <DialogHeader className="pt-2">
              <DialogTitle className="text-3xl sm:text-4xl font-black text-[#0e0f0c] dark:text-white">
                {project.name}
              </DialogTitle>
              <DialogDescription className="text-[16px] font-bold uppercase tracking-widest text-[#054d28] dark:text-[#9fe870]">
                {project.category}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 mt-4 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#0e0f0c]/10 dark:scrollbar-thumb-white/10 pr-2">
              <div className="rounded-[16px] overflow-hidden border border-[#0e0f0c]/10 dark:border-white/10">
                <div
                  className="aspect-16/10 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>

              <p className="text-[#454745] dark:text-[#868685] font-medium leading-relaxed text-lg">{project.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-[24px] border-2 border-[#0e0f0c]/10 dark:border-white/10 bg-transparent px-5 text-[15px] font-bold text-[#0e0f0c] dark:text-white transition-all hover:bg-black/5 dark:hover:bg-white/5">
                  <Github className="size-5" />
                  Open GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-[24px] bg-[#054d28] dark:bg-[#9fe870] px-5 text-[15px] font-bold text-white dark:text-[#0e0f0c] transition-all hover:bg-[#2ead4b] dark:hover:bg-[#cdffad] shadow-lg shadow-[#054d28]/20 dark:shadow-[#9fe870]/20">
                  <ExternalLink className="size-5" />
                  Open Live Site
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-[#e8ebe6] dark:bg-[#0e0f0c] relative py-20 px-6 -mt-10 z-10 rounded-t-[24px] transition-colors duration-300"
    >
      <FadeIn>
        <h2 className="text-5xl sm:text-7xl font-black text-center mb-10 text-[#0e0f0c] dark:text-white tracking-tight">
          Projects
        </h2>
      </FadeIn>

      <div className="relative pb-32">
        {projects.map((proj, i) => (
          <ProjectCard
            key={i}
            project={proj}
            index={i}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
};
