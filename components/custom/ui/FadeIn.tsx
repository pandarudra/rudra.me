"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
  once = true,
}: FadeInProps) => {
  return (
    <motion.div
      className={className}
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "50px", amount: 0.1 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
