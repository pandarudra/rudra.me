"use client";

import { AnimatedText } from "../ui/AnimatedText";
import { Floating3D } from "../ui/Floating3D";
import { Heart, Sparkles, Coffee, Star } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-background overflow-hidden">
      {/* Floating Elements (Cute Minimalist style) */}
      <Floating3D className="absolute top-20 left-[10%] text-sky-400 opacity-60" delay={0.2} duration={4}>
        <Star className="w-12 h-12 sm:w-16 sm:h-16" />
      </Floating3D>
      
      <Floating3D className="absolute bottom-32 left-[15%] text-pink-400 opacity-60" delay={0.5} duration={5}>
        <Heart className="w-10 h-10 sm:w-14 sm:h-14" />
      </Floating3D>

      <Floating3D className="absolute top-32 right-[12%] text-amber-400 opacity-60" delay={0.1} duration={4.5}>
        <Sparkles className="w-14 h-14 sm:w-20 sm:h-20" />
      </Floating3D>

      <Floating3D className="absolute bottom-20 right-[10%] text-amber-700 opacity-60 dark:text-amber-200" delay={0.8} duration={6}>
        <Coffee className="w-12 h-12 sm:w-16 sm:h-16" />
      </Floating3D>

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">About Me</h2>
        
        <AnimatedText 
          text="I thrive at the intersection of performance and aesthetics. From orchestrating distributed backends to compiling lightning-fast reactive UIs, I engineer digital experiences that scale without compromising on pixel-perfect design."
          className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-foreground mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
          <div className="p-6 bg-secondary/20 rounded-3xl border border-border">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <p className="text-lg font-medium">B.Tech in Information Technology</p>
            <p className="text-muted-foreground mb-2">Odisha University Of Technology And Research (OUTR)</p>
            <p className="text-sm font-bold text-primary">CGPA: 9.25 / 10</p>
          </div>
          
          <div className="p-6 bg-secondary/20 rounded-3xl border border-border">
            <h3 className="text-xl font-bold mb-4">Achievements</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>• Selected for Stanford Code in Place (CIP) 2024</li>
              <li>• Top 11% globally on LeetCode (Rating: 1717)</li>
              <li>• CodeChef Global Rank 606/30,523 (Starters 175)</li>
              <li>• Active open-source contributor (Hacktoberfest '24, '25)</li>
              <li>• Top 200/3000 participants at HackNITR</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
