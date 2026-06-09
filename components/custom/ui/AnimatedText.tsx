"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Word = ({ word, index, total, scrollYProgress }: { word: string, index: number, total: number, scrollYProgress: MotionValue<number> }) => {
  const start = index / total;
  const end = start + 0.2; // slightly smoother fade overlap
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block mr-[0.25em]">
      <span className="invisible">{word}</span>
      <motion.span
        style={{ opacity, willChange: "opacity" }}
        className="absolute left-0 top-0"
      >
        {word}
      </motion.span>
    </span>
  );
};

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => (
        <Word 
          key={i} 
          word={word} 
          index={i} 
          total={words.length} 
          scrollYProgress={scrollYProgress} 
        />
      ))}
    </p>
  );
};
