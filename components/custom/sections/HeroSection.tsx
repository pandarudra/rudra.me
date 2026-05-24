"use client";

import { FadeIn } from "../ui/FadeIn";
import { Floating3D } from "../ui/Floating3D";
import { MagnetButton } from "../ui/Buttons";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Decorative clean background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 text-center px-6">
        <FadeIn y={40} delay={0.1} className="font-lf">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent font-lf">
            Hi , This is Rudra
          </h1>
        </FadeIn>
        
        <FadeIn y={30} delay={0.3}>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-10">
            A passionate Full Stack Developer crafting clean, scalable, and beautiful digital experiences.
          </p>
        </FadeIn>

        <FadeIn y={20} delay={0.5} className="flex flex-col items-center gap-10">
          <a href="mailto:rudrapanda8206@gmail.com">
            <MagnetButton>Get In Touch</MagnetButton>
          </a>

          {/* Core Engineering Tags */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl opacity-80">
            {["System Architecture", "Distributed Systems", "Real-time WebSockets", "High-Performance APIs"].map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-border/50 bg-secondary/20 backdrop-blur-sm text-sm font-mono tracking-tight text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* 3D Elements floating around */}
      <Floating3D className="absolute top-1/4 left-[15%] w-32 h-32 hidden md:block" delay={0} duration={5} yOffset={20}>
        <div className="w-full h-full rounded-[40px] bg-gradient-to-tr from-sky-400/30 to-blue-500/30 backdrop-blur-md border border-white/20 shadow-2xl rotate-12" />
      </Floating3D>
      
      <Floating3D className="absolute bottom-1/4 right-[15%] w-40 h-40 hidden md:block" delay={1} duration={6} yOffset={25}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400/30 to-pink-500/30 backdrop-blur-md border border-white/20 shadow-2xl -rotate-12" />
      </Floating3D>

      <Floating3D className="absolute top-[30%] right-[20%] w-20 h-20 hidden lg:block" delay={0.5} duration={4} yOffset={15}>
        <div className="w-full h-full rounded-xl bg-gradient-to-bl from-emerald-400/20 to-teal-500/20 backdrop-blur-md border border-white/10 shadow-xl rotate-45" />
      </Floating3D>
    </section>
  );
};
