"use client";

import { motion } from "motion/react";
import { ReactNode, useRef, useState, MouseEvent } from "react";

interface MagnetButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagnetButton = ({ children, className = "", onClick }: MagnetButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium tracking-wide shadow-lg hover:shadow-xl transition-shadow ${className}`}
    >
      {children}
    </motion.button>
  );
};

export const GhostButton = ({ children, className = "", onClick }: MagnetButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-full border-2 border-border text-foreground font-medium tracking-wide hover:bg-muted transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
