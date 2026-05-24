"use client";

import { FadeIn } from "../ui/FadeIn";
import { Terminal } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Orbits+",
    location: "UK",
    date: "Feb 2026 - Present",
    desc: [
      "Built highly performant and reactive user interfaces using SvelteKit, leveraging compile-time optimization.",
      "Designed clean, scalable component architectures with efficient state management.",
      "Integrated frontend seamlessly with backend APIs, handling asynchronous data flow and real-time responsiveness."
    ],
    tech: ["SvelteKit", "TypeScript", "Node.js"]
  },
  {
    role: "Full Stack Developer",
    company: "GoMind AI LLC",
    location: "Austin, Texas",
    date: "Oct 2025 – Dec 2025",
    desc: [
      "Owned end-to-end frontend development in React Native, shipping scalable features across MVP stages.",
      "Engineered backend systems using NestJS, optimizing APIs and enhancing system architecture.",
      "Configured and managed AWS deployments to streamline development, releases, and system reliability."
    ],
    tech: ["React Native", "NestJS", "AWS"]
  }
];

export const ExperienceSection = () => {
  return (
    <section className="bg-background py-24 sm:py-32 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <Terminal className="w-8 h-8 text-primary" />
            <h2 className="text-4xl sm:text-5xl font-black">Experience</h2>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-12 border-l-2 border-border/50 pl-6 sm:pl-10 ml-4 sm:ml-0">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.2} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold">{exp.role}</h3>
                <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                  {exp.date}
                </span>
              </div>
              
              <div className="text-lg font-medium text-muted-foreground mb-6">
                {exp.company} <span className="opacity-50">| {exp.location}</span>
              </div>

              <ul className="space-y-3 text-muted-foreground mb-6">
                {exp.desc.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-primary mt-1.5 opacity-50">▹</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, j) => (
                  <span key={j} className="text-xs font-mono px-3 py-1 bg-secondary/30 border border-border rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
