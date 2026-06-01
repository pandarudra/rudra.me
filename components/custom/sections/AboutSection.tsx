"use client";

import { AnimatedText } from "../ui/AnimatedText";
import { Floating3D } from "../ui/Floating3D";
import { FadeIn } from "../ui/FadeIn";
import { motion } from "motion/react";
import {
  Heart,
  Sparkles,
  Coffee,
  Star,
  GraduationCap,
  Trophy,
  Code2,
  MapPin,
  Award,
  ChevronRight,
  BookOpen
} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center px-6 py-28 bg-background overflow-hidden border-t border-border/50">
      {/* Floating Elements */}
      <Floating3D className="absolute top-24 left-[8%] text-primary/30 dark:text-primary/20 pointer-events-none hidden md:block" delay={0.2} duration={5}>
        <Star className="w-16 h-16" />
      </Floating3D>

      <Floating3D className="absolute bottom-32 left-[5%] text-pink-500/20 pointer-events-none hidden md:block" delay={0.5} duration={6}>
        <Heart className="w-12 h-12" />
      </Floating3D>

      <Floating3D className="absolute top-36 right-[8%] text-amber-500/20 pointer-events-none hidden md:block" delay={0.1} duration={4.5}>
        <Sparkles className="w-20 h-20" />
      </Floating3D>

      <Floating3D className="absolute bottom-24 right-[8%] text-primary/20 pointer-events-none hidden md:block" delay={0.8} duration={5.5}>
        <Coffee className="w-14 h-14" />
      </Floating3D>

      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Unified Section Header */}
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground">
              About Me
            </h2>
          </div>
        </FadeIn>

        {/* Bento Grid design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">

          {/* LEFT COLUMN: Philosophy & Interactive Code Stats */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Philosophy Card */}
            <FadeIn delay={0.1} className="p-8 bg-secondary/10 dark:bg-secondary/5 border border-border/60 rounded-[32px] flex flex-col justify-between flex-1 relative overflow-hidden group hover:border-primary/40 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-300" />
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-primary/70 mb-4 block">Core Philosophy</span>
                <AnimatedText
                  text="I thrive at the intersection of performance and aesthetics. From orchestrating distributed backends to compiling lightning-fast reactive UIs, I engineer digital experiences that scale without compromising on pixel-perfect design."
                  className="text-2xl sm:text-3xl font-medium leading-relaxed text-foreground"
                />
              </div>
            </FadeIn>

            {/* coding metrics */}
            <FadeIn delay={0.2} className="p-8 bg-secondary/10 dark:bg-secondary/5 border border-border/60 rounded-[32px] relative overflow-hidden group hover:border-primary/40 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/10 transition-colors duration-300" />
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Competitive & Algo Stats</h3>
              </div>

              <div className="space-y-5">
                {/* LeetCode Stat */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5 font-medium">
                    <span className="text-foreground">LeetCode Rating: <span className="font-mono text-primary font-bold">1717</span></span>
                    <span className="text-muted-foreground font-mono">Top 11% Globally</span>
                  </div>
                  <div className="w-full bg-secondary/30 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "89%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                      className="bg-gradient-to-r from-sky-400 to-primary h-full rounded-full"
                    />
                  </div>
                </div>

                {/* CodeChef Stat */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5 font-medium">
                    <span className="text-foreground">CodeChef Starters 175</span>
                    <span className="text-muted-foreground font-mono">Rank 606 / 30,523</span>
                  </div>
                  <div className="w-full bg-secondary/30 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      className="bg-gradient-to-r from-sky-400 to-primary h-full rounded-full"
                    />
                  </div>
                </div>

                {/* HackNITR Stat */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5 font-medium">
                    <span className="text-foreground">HackNITR Hackathon</span>
                    <span className="text-muted-foreground font-mono">Top 200 / 3,000</span>
                  </div>
                  <div className="w-full bg-secondary/30 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "93.3%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                      className="bg-gradient-to-r from-sky-400 to-primary h-full rounded-full"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: Education & Achievements (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Education Card */}
            <FadeIn delay={0.3} className="p-8 bg-secondary/10 dark:bg-secondary/5 border border-border/60 rounded-[32px] relative overflow-hidden group hover:border-primary/40 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors duration-300" />
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Education</h3>
              </div>

              <div>
                <p className="text-xl font-bold text-foreground mb-1">B.Tech in Information Technology</p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <BookOpen className="w-4 h-4" />
                  <span>Odisha University of Technology and Research (OUTR)</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                  <Award className="w-3.5 h-3.5" />
                  <span>CGPA: 9.25 / 10</span>
                </div>
              </div>
            </FadeIn>

            {/* Achievements Card */}
            <FadeIn delay={0.4} className="p-8 bg-secondary/10 dark:bg-secondary/5 border border-border/60 rounded-[32px] flex-1 relative overflow-hidden group hover:border-primary/40 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl group-hover:bg-pink-500/10 transition-colors duration-300" />
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Key Milestones</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item">
                  <div className="mt-1 bg-primary/10 p-1 rounded-lg text-primary group-hover/item:scale-110 transition-transform">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">Stanford Code in Place 2024</span>
                    <p className="text-xs text-muted-foreground mt-0.5">Selected participant in Stanford's global programming course.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3 group/item">
                  <div className="mt-1 bg-primary/10 p-1 rounded-lg text-primary group-hover/item:scale-110 transition-transform">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">Hacktoberfest Contributor</span>
                    <p className="text-xs text-muted-foreground mt-0.5">Active open-source contributor ('24, '25 editions).</p>
                  </div>
                </li>

                <li className="flex items-start gap-3 group/item">
                  <div className="mt-1 bg-primary/10 p-1 rounded-lg text-primary group-hover/item:scale-110 transition-transform">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">Top HackNITR Innovator</span>
                    <p className="text-xs text-muted-foreground mt-0.5">Ranked in the top 200 out of over 3000 competitors.</p>
                  </div>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
