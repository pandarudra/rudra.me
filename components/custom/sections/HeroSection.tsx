"use client";

import { ArrowRight, Code2, Globe, Sparkles, Zap } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { MagnetButton } from "../ui/Buttons";
import { heroTags } from "@/constants";

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

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-background py-24 sm:py-28">
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

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_42%),radial-gradient(circle_at_20%_25%,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_80%_75%,rgba(236,72,153,0.10),transparent_30%)]" />

      <div className="absolute top-1/2 left-1/2 h-112 w-md -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-24 left-[8%] h-40 w-40 rounded-full border border-border/30 bg-background/10 backdrop-blur-sm pointer-events-none" />
      <div className="absolute bottom-24 right-[10%] h-28 w-28 rounded-2xl border border-border/30 bg-background/10 backdrop-blur-sm pointer-events-none rotate-12" />

      <div className="relative z-10 w-full px-6">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <FadeIn y={20} delay={0.05} className="mb-6 inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur-md">
                <Sparkles className="size-4 text-primary" />
                Available for freelance, collaboration, and ambitious builds
              </div>
            </FadeIn>

            <FadeIn y={40} delay={0.1} className="font-lf">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6 bg-linear-to-b from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent font-lf">
                Hi, I’m Rudra.
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
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5"
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
                className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-6 py-4 font-medium text-foreground shadow-sm backdrop-blur-md transition-colors hover:bg-secondary/40"
              >
                Explore Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </FadeIn>

            <FadeIn
              y={16}
              delay={0.42}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 max-w-3xl opacity-90"
            >
              {heroTags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full border border-border/50 bg-secondary/20 backdrop-blur-sm text-sm font-mono tracking-tight text-muted-foreground shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </FadeIn>

            <FadeIn
              y={18}
              delay={0.5}
              className="mt-10 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto lg:mx-0"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-border/60 bg-background/75 p-4 text-left shadow-sm backdrop-blur-md"
                >
                  <div className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </FadeIn>
          </div>

          <FadeIn y={26} delay={0.28} className="relative">
            <div className="relative overflow-hidden rounded-[36px] border border-border/60 bg-background/80 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.14),transparent_32%)]" />

              <div className="relative flex items-center justify-between gap-4 border-b border-border/50 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                    Currently shaping
                  </p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                    Thoughtful web products
                  </h2>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-3 text-primary shadow-sm">
                  <Code2 className="size-6" />
                </div>
              </div>

              <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-border/60 bg-background/85 p-5 shadow-sm">
                  <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
                    Focus
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {focusPoints.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span className="leading-6">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[28px] border border-border/60 bg-background/85 p-5 shadow-sm">
                  <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
                    Experience stack
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
                        className="rounded-full border border-border/50 bg-secondary/20 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-border/60 bg-muted/40 p-4">
                    <div className="flex items-center gap-3 text-sm text-foreground">
                      <Globe className="size-4 text-primary" />
                      Building experiences that look sharp and ship clean.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
