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
    tech: ["SvelteKit", "TypeScript", "Django" , "Docker" , "Azure"]
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
    tech: ["React Native", "NestJS", "AWS" , "Firebase"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-[#e8ebe6] dark:bg-[#0e0f0c] transition-colors duration-300 py-24 sm:py-32 px-6 border-t border-[#0e0f0c]/5 dark:border-white/5">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <Terminal className="w-10 h-10 text-[#9fe870]" />
            <h2 className="text-5xl sm:text-7xl font-black text-[#0e0f0c] dark:text-white tracking-tight">Experience</h2>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-12 border-l-2 border-[#0e0f0c]/10 dark:border-white/10 pl-6 sm:pl-10 ml-4 sm:ml-0">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.2} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-2 w-5 h-5 rounded-full bg-[#9fe870] border-4 border-[#e8ebe6] dark:border-[#0e0f0c]" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 gap-2">
                <h3 className="text-3xl sm:text-4xl font-black text-[#0e0f0c] dark:text-white">{exp.role}</h3>
                <span className="text-sm font-bold text-[#9fe870] bg-[#9fe870]/10 border border-[#9fe870]/20 px-4 py-1.5 rounded-full whitespace-nowrap w-fit">
                  {exp.date}
                </span>
              </div>
              
              <div className="text-xl font-bold text-[#0e0f0c] dark:text-white mb-6">
                {exp.company} <span className="opacity-50 text-[#454745] dark:text-[#868685]">| {exp.location}</span>
              </div>

              <ul className="space-y-4 text-[#454745] dark:text-[#868685] font-medium mb-8">
                {exp.desc.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-[#9fe870] mt-1.5 opacity-80">▹</span>
                    <span className="leading-relaxed text-[17px]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {exp.tech.map((t, j) => (
                  <span key={j} className="px-4 py-1.5 rounded-[24px] bg-white/40 dark:bg-white/5 border-2 border-[#0e0f0c]/5 dark:border-white/10 text-[14px] font-bold text-[#454745] dark:text-[#a0a0a0]">
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

