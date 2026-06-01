"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { FadeIn } from "../ui/FadeIn";
import { Award, ChevronRight, Sparkles } from "lucide-react";
import { certificates } from "@/constants/certificate.c";

const TiltCard = ({ cert }: { cert: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for rotation angles
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for high-performance physics-based motion
  const rotateX = useSpring(x, { damping: 25, stiffness: 220 });
  const rotateY = useSpring(y, { damping: 25, stiffness: 220 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    // Relative coordinates from center
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    // Calculate tilt angles (limit to 12 degrees)
    const rotateXValue = -(mouseY / (height / 2)) * 12;
    const rotateYValue = (mouseX / (width / 2)) * 12;
    
    x.set(rotateXValue);
    y.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="h-full [perspective:1000px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`h-full p-8 rounded-[36px] border border-border/70 bg-gradient-to-br ${cert.color} backdrop-blur-md flex flex-col justify-between items-start gap-6 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300 shadow-lg`}
      >
        {/* Glow overlay following cursor */}
        <div 
          style={{ transform: "translateZ(80px)" }}
          className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors duration-500 pointer-events-none" 
        />
        
        <div className="w-full" style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
          <div className={`p-4 rounded-2xl bg-background/80 border border-border shadow-sm w-fit mb-6 ${cert.iconColor} group-hover:scale-110 transition-transform duration-300`}>
            <Award className="w-7 h-7" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-black mb-2 text-foreground tracking-tight leading-snug">{cert.title}</h3>
          <p className="text-muted-foreground font-semibold text-sm sm:text-base">
            {cert.issuer}
          </p>
        </div>

        <div className="w-full flex items-center justify-between mt-4" style={{ transform: "translateZ(30px)" }}>
          <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            {cert.date}
          </span>
          
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors cursor-pointer select-none">
            Verify Credential
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-28 px-6 bg-secondary/20 dark:bg-secondary/5 relative z-20 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        {/* Unified Section Header */}
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground flex items-center gap-3">
              Certificates <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-pulse" />
            </h2>
          </div>
        </FadeIn>

        {/* Immersive 3D Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
          {certificates.map((cert, index) => {
            const isLeft = index % 2 === 0;
            return (
              <FadeIn 
                key={index} 
                delay={index * 0.1}
                x={isLeft ? -80 : 80}
                y={0}
              >
                <TiltCard cert={cert} />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
