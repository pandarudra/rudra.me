"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FadeIn } from "../ui/FadeIn";
import {
  Calculator,
  Swords,
  FlaskConical,
  GitCommit,
  Gamepad2,
  Compass,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    href: "/estimate",
    icon: <Calculator className="w-5 h-5" />,
    title: "Project Estimator",
    desc: "Instant cost & timeline estimates",
    emoji: "📐",
  },
  {
    href: "/code-duel",
    icon: <Swords className="w-5 h-5" />,
    title: "Code Duel",
    desc: "Rapid-fire tech quiz",
    emoji: "⚔️",
  },
  {
    href: "/tech-chemistry",
    icon: <FlaskConical className="w-5 h-5" />,
    title: "Tech Chemistry",
    desc: "Physics skill sandbox",
    emoji: "🧪",
  },
  {
    href: "/devlog",
    icon: <GitCommit className="w-5 h-5" />,
    title: "GitHub DevLog",
    desc: "Live commit timeline",
    emoji: "📡",
  },
  {
    href: "/game",
    icon: <Gamepad2 className="w-5 h-5" />,
    title: "Code Runner",
    desc: "Endless runner game",
    emoji: "🎮",
  },
];

/* ── helpers ─────────────────────────────────────────────── */

/** Compute radial positions for leaf nodes around a centre */
const getNodePositions = (
  cx: number,
  cy: number,
  count: number,
  radiusX: number,
  radiusY: number,
  startAngle = -Math.PI / 2,
) => {
  const step = (Math.PI * 2) / count;
  return Array.from({ length: count }, (_, i) => {
    const angle = startAngle + step * i;
    return {
      x: cx + Math.cos(angle) * radiusX,
      y: cy + Math.sin(angle) * radiusY,
    };
  });
};

/** Build an SVG cubic-bezier path from (x1,y1) → (x2,y2) curving through centre */
const curvePath = (x1: number, y1: number, x2: number, y2: number) => {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  // Pull control points toward the midpoint but offset for a nice arc
  const cpx1 = x1 + (mx - x1) * 0.6;
  const cpy1 = y1 + (my - y1) * 0.15;
  const cpx2 = x2 - (x2 - mx) * 0.6;
  const cpy2 = y2 - (y2 - my) * 0.15;
  return `M ${x1} ${y1} C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${x2} ${y2}`;
};

/* ── component ───────────────────────────────────────────── */

export const ExploreSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [hovered, setHovered] = useState<number | null>(null);

  /* Observe container size */
  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    setDims({ w: width, h: height });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  /* Derive positions */
  const cx = dims.w / 2;
  const cy = dims.h / 2;
  const isMobile = dims.w < 640;
  const radiusX = isMobile ? Math.min(dims.w * 0.34, 150) : Math.min(dims.w * 0.34, 320);
  const radiusY = isMobile ? Math.min(dims.h * 0.34, 170) : Math.min(dims.h * 0.36, 220);
  const positions = getNodePositions(cx, cy, features.length, radiusX, radiusY);

  // Node sizes
  const nodeW = isMobile ? 120 : 170;
  const nodeH = isMobile ? 68 : 86;
  const centreR = isMobile ? 40 : 56;

  return (
    <section className="py-24 sm:py-32 bg-[#e8ebe6] dark:bg-[#0e0f0c] transition-colors duration-300 border-t border-[#0e0f0c]/5 dark:border-white/5 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0e0f0c] dark:text-white mb-4">
              Explore <span className="accent-text">More</span>
            </h2>
            <p className="text-lg text-[#454745] dark:text-[#868685] font-medium max-w-xl">
              Interactive experiences, tools, and games — tap any node to explore.
            </p>
          </div>
        </FadeIn>

        {/* Mind-map container */}
        <FadeIn delay={0.15}>
          <div
            ref={containerRef}
            className="relative w-full mx-auto"
            style={{ height: isMobile ? 520 : 560 }}
          >
            {dims.w > 0 && (
              <>
                {/* ── SVG connections ── */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox={`0 0 ${dims.w} ${dims.h}`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Animated dash */}
                    <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--accent-dark)" stopOpacity="0.15" />
                      <stop offset="50%" stopColor="var(--accent-dark)" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="var(--accent-dark)" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>

                  {positions.map((pos, i) => {
                    const isActive = hovered === i;
                    const path = curvePath(cx, cy, pos.x, pos.y);
                    return (
                      <g key={i}>
                        {/* Background track */}
                        <path
                          d={path}
                          stroke={isActive ? "var(--accent-dark)" : "currentColor"}
                          className={isActive ? "" : "text-[#0e0f0c]/8 dark:text-white/8"}
                          strokeWidth={isActive ? 2.5 : 1.5}
                          strokeLinecap="round"
                          fill="none"
                          style={{
                            transition: "stroke 0.3s, stroke-width 0.3s",
                            opacity: isActive ? 1 : 0.6,
                          }}
                        />
                        {/* Animated pulse dot travelling the path */}
                        <circle r={isActive ? 4 : 2.5} fill="var(--accent-dark)" opacity={isActive ? 0.9 : 0.4}>
                          <animateMotion
                            dur={isActive ? "1.5s" : "3s"}
                            repeatCount="indefinite"
                            path={path}
                          />
                        </circle>
                      </g>
                    );
                  })}
                </svg>

                {/* ── Centre node ── */}
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    left: cx - centreR,
                    top: cy - centreR,
                    width: centreR * 2,
                    height: centreR * 2,
                  }}
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(159,232,112,0.0)",
                        "0 0 0 16px rgba(159,232,112,0.08)",
                        "0 0 0 0 rgba(159,232,112,0.0)",
                      ],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-full accent-bg flex items-center justify-center shadow-xl border-2 border-white/20 dark:border-black/20"
                  >
                    <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-[#0e0f0c]" />
                  </motion.div>
                </div>

                {/* ── Leaf nodes ── */}
                {positions.map((pos, i) => {
                  const f = features[i];
                  const isActive = hovered === i;
                  return (
                    <Link
                      key={f.href}
                      href={f.href}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      className="absolute block group"
                      style={{
                        left: pos.x - nodeW / 2,
                        top: pos.y - nodeH / 2,
                        width: nodeW,
                        height: nodeH,
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 260, damping: 20 }}
                        whileHover={{ scale: 1.08, y: -4 }}
                        className={`w-full h-full rounded-[20px] flex flex-col items-center justify-center gap-1 px-3 py-3 border transition-all duration-300 cursor-pointer backdrop-blur-sm ${
                          isActive
                            ? "bg-white dark:bg-[#1a1b19] border-current accent-text shadow-xl shadow-[var(--accent-dark)]/10"
                            : "bg-white/80 dark:bg-[#121311]/80 border-[#0e0f0c]/5 dark:border-white/5 shadow-md"
                        }`}
                      >
                        {/* Icon */}
                        <span
                          className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-[12px] transition-all duration-300 ${
                            isActive
                              ? "accent-bg text-[#0e0f0c]"
                              : "bg-[#e8ebe6] dark:bg-[#1a1b19] accent-text"
                          }`}
                        >
                          {f.icon}
                        </span>

                        {/* Title */}
                        <span className={`text-[12px] sm:text-[13px] font-black leading-tight text-center transition-colors ${
                          isActive ? "accent-text" : "text-[#0e0f0c] dark:text-white"
                        }`}>
                          {f.title}
                        </span>

                        {/* Desc — visible on hover / desktop */}
                        {!isMobile && (
                          <span className={`text-[10px] sm:text-[11px] font-medium text-center leading-tight transition-all ${
                            isActive ? "text-[#454745] dark:text-[#a0a0a0] opacity-100" : "text-[#868685] opacity-60"
                          }`}>
                            {f.desc}
                          </span>
                        )}
                      </motion.div>
                    </Link>
                  );
                })}
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
