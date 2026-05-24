"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface Floating3DProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const Floating3D = ({
  children,
  delay = 0,
  duration = 4,
  yOffset = 15,
  className = "",
}: Floating3DProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -yOffset, 0],
        rotateX: [0, 5, 0],
        rotateY: [0, -5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
};
