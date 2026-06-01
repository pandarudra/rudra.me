"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Code2, Globe, Sparkles, Zap } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { MagnetButton } from "../ui/Buttons";
import { heroTags } from "@/constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const heroStats = [
  { value: "7+", label: "core specialties" },
  { value: "Realtime", label: "systems mindset" },
  { value: "Full Stack", label: "product delivery" },
];

const focusPoints = [
  "Clean interfaces with performance-first architecture",
  "Realtime workflows, API design, and product polish",
  "Shipping dependable software that feels sharp and modern",
];

const HolographicDevDeck = () => {
  return (
    <div className="relative lg:-mt-12 w-full">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden rounded-[40px] border border-border/80 bg-background/40 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:border-primary/45 group w-full"
      >
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan pointer-events-none" />

        <div className="absolute -inset-20 bg-gradient-to-tr from-transparent via-primary/5 to-sky-500/5 rounded-[40px] blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div
          style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
          className="relative flex items-center justify-between gap-4 border-b border-border/50 pb-5 mb-6"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">
              // LIVE SHAPING
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              Thoughtful web products
            </h2>
          </div>
          <div className="rounded-2xl border border-border/60 bg-primary/10 p-3 text-primary shadow-inner">
            <Code2 className="size-6 animate-pulse" />
          </div>
        </div>

        <div
          style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
          className="relative grid gap-5 sm:grid-cols-2"
        >
          <div className="rounded-[28px] border border-border/60 bg-background/80 p-5 shadow-lg relative group/focus hover:border-primary/30 transition-colors">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
            <p className="text-xs font-black tracking-widest uppercase text-primary mb-4">
              Focus Areas
            </p>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              {focusPoints.map((point) => (
                <li key={point} className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0 animate-ping" />
                  <span className="leading-relaxed font-semibold">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-border/60 bg-background/80 p-5 shadow-lg flex flex-col justify-between hover:border-sky-500/30 transition-colors">
            <div>
              <p className="text-xs font-black tracking-widest uppercase text-primary mb-4">
                Experience Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "Motion",
                  "Tailwind",
                  "WebSockets",
                  "APIs",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-border/65 bg-secondary/30 px-3 py-1.5 text-xs font-mono font-bold text-muted-foreground hover:text-foreground hover:bg-secondary/65 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-border/50 bg-secondary/10 p-3.5 flex items-center gap-3 text-xs text-muted-foreground font-semibold">
              <Globe className="size-4 text-primary shrink-0 animate-spin" style={{ animationDuration: "12s" }} />
              <span>Building experiences that look sharp and ship clean.</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const HeroSection = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col pt-20 pb-16 sm:pt-24 sm:pb-24 overflow-hidden bg-background"
    >
      <style jsx global>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 5s ease infinite;
        }
        @keyframes laser-scan {
          0% { top: 0%; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .group:hover .group-hover\:animate-scan {
          animation: laser-scan 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
      `}</style>

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 52%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, black 52%, transparent 100%)",
        }}
      />

      <div
        style={{
          background: mounted
            ? `radial-gradient(700px circle at ${coords.x}px ${coords.y}px, rgba(59, 130, 246, 0.12), transparent 80%)`
            : "radial-gradient(circle at center, rgba(59,130,246,0.1), transparent 70%)"
        }}
        className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
      />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_25%,rgba(16,185,129,0.08),transparent_28%),radial-gradient(circle_at_80%_75%,rgba(236,72,153,0.06),transparent_30%)]" />

      <div className="absolute top-1/2 left-1/2 h-112 w-md -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      <div className="absolute top-24 left-[8%] h-40 w-40 rounded-full border border-border/30 bg-background/10 backdrop-blur-sm pointer-events-none" />
      <div className="absolute bottom-24 right-[10%] h-28 w-28 rounded-2xl border border-border/30 bg-background/10 backdrop-blur-sm pointer-events-none rotate-12" />

      <div className="relative z-10 w-full px-6">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <FadeIn y={20} delay={0.05} className="mb-6 inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur-md">
                <Sparkles className="size-4 text-primary animate-pulse" />
                Available for freelance, collaboration, and ambitious builds
              </div>
            </FadeIn>

            <FadeIn y={40} delay={0.1} className="font-lf">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6 bg-linear-to-b from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent font-lf">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-primary via-sky-400 to-pink-500 bg-[size:200%_auto] animate-gradient-flow bg-clip-text text-transparent">
                  Rudra.
                </span>
              </h1>
            </FadeIn>

            <FadeIn y={30} delay={0.22}>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                I design and build full-stack products that feel fast, polished,
                and genuinely useful. From realtime experiences to scalable
                APIs, I focus on the details that make software memorable.
              </p>
            </FadeIn>

            <FadeIn
              y={18}
              delay={0.32}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 flex-wrap"
            >
              <a href="mailto:rudrapanda8206@gmail.com">
                <MagnetButton className="min-w-48">
                  <span className="inline-flex items-center gap-2">
                    <Zap className="size-4" />
                    Get In Touch
                  </span>
                </MagnetButton>
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("projects");
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    window.history.pushState(null, "", "#projects");
                  }
                }}
                className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-6 py-4 font-medium text-foreground shadow-sm backdrop-blur-md transition-all hover:bg-secondary/40 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Explore Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/blog"
                className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-6 py-4 font-medium text-foreground shadow-sm backdrop-blur-md transition-all hover:bg-secondary/40 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Read Blog
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </FadeIn>

            <FadeIn
              y={16}
              delay={0.42}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 max-w-3xl opacity-90"
            >
              {heroTags.map((tag, i) => (
                <motion.span
                  whileHover={{ y: -2, scale: 1.03 }}
                  key={i}
                  className="px-4 py-2 rounded-full border border-border/50 bg-secondary/20 backdrop-blur-sm text-sm font-mono tracking-tight text-muted-foreground shadow-sm hover:border-primary/30 hover:text-foreground transition-all cursor-default select-none"
                >
                  {tag}
                </motion.span>
              ))}
            </FadeIn>

            <FadeIn
              y={18}
              delay={0.5}
              className="mt-10 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto lg:mx-0"
            >
              {heroStats.map((stat) => (
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  key={stat.label}
                  className="rounded-3xl border border-border/60 bg-background/75 p-4 text-left shadow-sm backdrop-blur-md hover:border-primary/40 hover:shadow-md transition-all cursor-default"
                >
                  <div className="text-2xl sm:text-3xl font-black tracking-tight text-foreground bg-gradient-to-r from-foreground via-foreground to-primary/80 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </FadeIn>
          </div>

          <FadeIn y={26} delay={0.28} className="w-full flex justify-center">
            <HolographicDevDeck />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
