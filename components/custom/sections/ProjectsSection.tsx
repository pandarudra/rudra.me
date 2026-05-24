"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Info } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FadeIn } from "../ui/FadeIn";

const projects = [
  {
    num: "01",
    category: "Full Stack Platform",
    name: "Hostify",
    image: "/files/hostify.png",
    github: "https://github.com/pandarudra/hostify",
    live: "https://hostify.rudrax.me/",
    desc: "A full-stack static site hosting platform with one-click GitHub deployments and custom subdomains.",
  },
  {
    num: "02",
    category: "Real-time Collab",
    name: "Draw.wine",
    image: "/files/draw-wine.png",
    github: "https://github.com/pandarudra/draw.wine",
    live: "https://draw-wine.rudrax.me/",
    desc: "Real-time collaborative whiteboard with Gemini AI integration, Socket.IO, and Solana wallet auth.",
  },
  {
    num: "03",
    category: "Management System",
    name: "Inventra",
    image: "/files/ims.png",
    github: "https://github.com/pandarudra/ims",
    live: "https://ims.rudrax.me/",
    desc: "Inventory management system with streamlined product tracking, stock handling, and modern dashboard workflows.",
  },

  {
    num: "04",
    category: "File Sharing",
    name: "Zipster",
    image: "/files/zipster.png",
    github: "https://github.com/pandarudra/Zipster",
    live: "https://zipster-alpha.vercel.app",
    desc: "Fast and minimal file sharing platform focused on secure uploads, instant transfers, and clean user experience.",
  },

  {
    num: "05",
    category: "Real-time Chat",
    name: "ChitChat",
    image: "/files/chitchat.png",
    github: "https://github.com/pandarudra/chitchat",
    live: "",
    desc: "Real-time chat application built with modern web technologies featuring instant messaging and responsive UI.",
  },
];

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
        className="w-full max-w-6xl h-full max-h-175 bg-background border border-border shadow-2xl rounded-[40px] sm:rounded-[60px] p-6 sm:p-10 flex flex-col origin-top overflow-hidden"
      >
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-start gap-5 sm:gap-6">
            <span className="text-5xl sm:text-6xl font-black text-muted-foreground/20 leading-none">
              {project.num}
            </span>
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-1">
                {project.category}
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">
                {project.name}
              </h3>
              {project.desc && (
                <p className="text-muted-foreground max-w-lg">{project.desc}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Button asChild variant="outline" className="rounded-full px-5">
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
            <Button asChild className="rounded-full px-5">
              <a href={project.live} target="_blank" rel="noreferrer">
                <ExternalLink className="size-4" />
                Live
              </a>
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="rounded-full px-5"
              onClick={() => setInfoOpen(true)}
            >
              <Info className="size-4" />
              Info
            </Button>
          </div>
        </div>

        {/* Bottom Media */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 h-full min-h-75">
          <div className="md:col-span-5 flex flex-col gap-4 min-h-75">
            <div className="relative flex-[1.35] rounded-[30px] overflow-hidden border border-border/60 bg-muted">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2">
                  Preview
                </p>
                <p className="text-lg font-semibold text-white drop-shadow-sm">
                  {project.name}
                </p>
              </div>
            </div>
            <div className="relative flex-[0.9] rounded-[30px] overflow-hidden border border-border/60 bg-muted">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-br from-black/45 via-black/5 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {project.num}
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 rounded-[30px] overflow-hidden border border-border/60 bg-muted relative min-h-75">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-linear-to-br from-black/55 via-black/20 to-transparent" />
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
              <div className="max-w-md rounded-[24px] border border-white/20 bg-black/35 p-5 backdrop-blur-md text-white shadow-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/70 mb-3">
                  About this project
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-white/90">
                  {project.desc}
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
                  <span className="rounded-full border border-white/20 px-3 py-1">
                    GitHub + Live links included
                  </span>
                  <span className="rounded-full border border-white/20 px-3 py-1">
                    Info opens modal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Sheet open={infoOpen} onOpenChange={setInfoOpen}>
          <SheetContent className="sm:max-w-xl">
            <SheetHeader className="pt-10 pr-10">
              <SheetTitle className="text-2xl sm:text-3xl">
                {project.name}
              </SheetTitle>
              <SheetDescription className="text-base leading-7">
                {project.category}
              </SheetDescription>
            </SheetHeader>

            <div className="px-4 pb-4 space-y-5">
              <div className="rounded-3xl overflow-hidden border border-border/60">
                <div
                  className="aspect-16/10 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>

              <p className="text-muted-foreground leading-7">{project.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button asChild variant="outline" className="rounded-full">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="size-4" />
                    Open GitHub
                  </a>
                </Button>
                <Button asChild className="rounded-full">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <ExternalLink className="size-4" />
                    Open Live Site
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </motion.div>
    </div>
  );
};
<div className="absolute inset-0 bg-linear-to-br from-black/55 via-black/20 to-transparent" />;
export const ProjectsSection = () => {
  return (
    <section className="bg-background relative py-20 px-6 -mt-10 z-10 rounded-t-[40px] sm:rounded-t-[60px]">
      <FadeIn>
        <h2 className="text-4xl sm:text-6xl font-black text-center mb-10 text-foreground">
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
