"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

const SKILLS = [
  { label: "React", color: "#61dafb", group: "frontend" },
  { label: "Next.js", color: "#ffffff", group: "frontend" },
  { label: "TypeScript", color: "#3178c6", group: "language" },
  { label: "JavaScript", color: "#f7df1e", group: "language" },
  { label: "Python", color: "#3776ab", group: "language" },
  { label: "C++", color: "#00599c", group: "language" },
  { label: "Node.js", color: "#339933", group: "backend" },
  { label: "Express", color: "#ffffff", group: "backend" },
  { label: "Django", color: "#092e20", group: "backend" },
  { label: "Tailwind", color: "#06b6d4", group: "frontend" },
  { label: "MongoDB", color: "#47a248", group: "tools" },
  { label: "Docker", color: "#2496ed", group: "tools" },
  { label: "AWS", color: "#ff9900", group: "tools" },
  { label: "Git", color: "#f05032", group: "tools" },
  { label: "Firebase", color: "#ffca28", group: "tools" },
  { label: "Figma", color: "#f24e1e", group: "tools" },
  { label: "Socket.IO", color: "#010101", group: "backend" },
  { label: "Redis", color: "#dc382d", group: "tools" },
];

interface Pill {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  color: string;
  group: string;
  width: number;
  height: number;
  dragging: boolean;
}

export default function TechChemistryPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pillsRef = useRef<Pill[]>([]);
  const animRef = useRef<number>(0);
  const dragRef = useRef<{ idx: number; offsetX: number; offsetY: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  const initPills = useCallback((width: number, height: number) => {
    const pills: Pill[] = SKILLS.map((s) => {
      const pw = s.label.length * 11 + 32;
      const ph = 36;
      return {
        x: Math.random() * (width - pw - 40) + 20,
        y: Math.random() * (height - ph - 40) + 20,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        label: s.label,
        color: s.color,
        group: s.group,
        width: pw,
        height: ph,
        dragging: false,
      };
    });
    pillsRef.current = pills;
  }, []);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
      if (pillsRef.current.length === 0) initPills(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = () => document.documentElement.classList.contains("dark");

    const animate = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const dark = isDark();

      ctx.clearRect(0, 0, w, h);

      const pills = pillsRef.current;

      // Draw connections between same-group pills
      for (let i = 0; i < pills.length; i++) {
        for (let j = i + 1; j < pills.length; j++) {
          if (pills[i].group !== pills[j].group) continue;
          const dx = pills[i].x + pills[i].width / 2 - (pills[j].x + pills[j].width / 2);
          const dy = pills[i].y + pills[i].height / 2 - (pills[j].y + pills[j].height / 2);
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const alpha = Math.max(0, 1 - dist / 180) * 0.3;
            ctx.strokeStyle = dark
              ? `rgba(159, 232, 112, ${alpha})`
              : `rgba(14, 15, 12, ${alpha})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(pills[i].x + pills[i].width / 2, pills[i].y + pills[i].height / 2);
            ctx.lineTo(pills[j].x + pills[j].width / 2, pills[j].y + pills[j].height / 2);
            ctx.stroke();
          }
        }
      }

      // Update & draw pills
      for (const pill of pills) {
        if (!pill.dragging) {
          pill.x += pill.vx;
          pill.y += pill.vy;

          // Bounce off walls
          if (pill.x <= 0 || pill.x + pill.width >= w) {
            pill.vx *= -0.8;
            pill.x = Math.max(0, Math.min(w - pill.width, pill.x));
          }
          if (pill.y <= 0 || pill.y + pill.height >= h) {
            pill.vy *= -0.8;
            pill.y = Math.max(0, Math.min(h - pill.height, pill.y));
          }

          // Friction
          pill.vx *= 0.998;
          pill.vy *= 0.998;
        }

        // Draw pill
        const radius = pill.height / 2;
        ctx.fillStyle = dark ? "rgba(26, 27, 25, 0.9)" : "rgba(255, 255, 255, 0.9)";
        ctx.strokeStyle = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(pill.x, pill.y, pill.width, pill.height, radius);
        ctx.fill();
        ctx.stroke();

        // Color dot
        ctx.fillStyle = pill.color;
        ctx.beginPath();
        ctx.arc(pill.x + 16, pill.y + pill.height / 2, 5, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = dark ? "#e0e0e0" : "#0e0f0c";
        ctx.font = "bold 13px Inter, system-ui, sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillText(pill.label, pill.x + 28, pill.y + pill.height / 2 + 1);
      }

      // Pill-to-pill collision
      for (let i = 0; i < pills.length; i++) {
        for (let j = i + 1; j < pills.length; j++) {
          const a = pills[i], b = pills[j];
          const ax = a.x + a.width / 2, ay = a.y + a.height / 2;
          const bx = b.x + b.width / 2, by = b.y + b.height / 2;
          const dx = bx - ax, dy = by - ay;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = (a.width + b.width) / 2 * 0.6;
          if (dist < minDist && dist > 0) {
            const nx = dx / dist, ny = dy / dist;
            const overlap = minDist - dist;
            if (!a.dragging) { a.x -= nx * overlap * 0.5; a.y -= ny * overlap * 0.5; }
            if (!b.dragging) { b.x += nx * overlap * 0.5; b.y += ny * overlap * 0.5; }
            // Swap velocities (simplified)
            if (!a.dragging && !b.dragging) {
              const tmpVx = a.vx; const tmpVy = a.vy;
              a.vx = b.vx * 0.6; a.vy = b.vy * 0.6;
              b.vx = tmpVx * 0.6; b.vy = tmpVy * 0.6;
            }
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    // Mouse/touch handlers
    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0]?.clientX ?? 0 : e.clientX;
      const clientY = "touches" in e ? e.touches[0]?.clientY ?? 0 : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const onDown = (e: MouseEvent | TouchEvent) => {
      const pos = getPos(e);
      const pills = pillsRef.current;
      for (let i = pills.length - 1; i >= 0; i--) {
        const p = pills[i];
        if (pos.x >= p.x && pos.x <= p.x + p.width && pos.y >= p.y && pos.y <= p.y + p.height) {
          dragRef.current = { idx: i, offsetX: pos.x - p.x, offsetY: pos.y - p.y };
          p.dragging = true;
          p.vx = 0;
          p.vy = 0;
          break;
        }
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragRef.current) return;
      e.preventDefault();
      const pos = getPos(e);
      const p = pillsRef.current[dragRef.current.idx];
      p.x = pos.x - dragRef.current.offsetX;
      p.y = pos.y - dragRef.current.offsetY;
    };

    const onUp = (e: MouseEvent | TouchEvent) => {
      if (!dragRef.current) return;
      const p = pillsRef.current[dragRef.current.idx];
      p.dragging = false;
      // Give a small toss velocity based on mouse movement direction
      p.vx = (Math.random() - 0.5) * 2;
      p.vy = (Math.random() - 0.5) * 2;
      dragRef.current = null;
    };

    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseup", onUp);
    canvas.addEventListener("mouseleave", onUp);
    canvas.addEventListener("touchstart", onDown, { passive: false });
    canvas.addEventListener("touchmove", onMove, { passive: false });
    canvas.addEventListener("touchend", onUp);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousedown", onDown);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseup", onUp);
      canvas.removeEventListener("mouseleave", onUp);
      canvas.removeEventListener("touchstart", onDown);
      canvas.removeEventListener("touchmove", onMove);
      canvas.removeEventListener("touchend", onUp);
    };
  }, [initPills]);

  return (
    <section className="min-h-screen bg-[#e8ebe6] dark:bg-[#0e0f0c] transition-colors duration-300">
      <div className="max-w-6xl mx-auto py-12 sm:py-20 px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[14px] font-bold text-[#454745] dark:text-[#868685] hover:text-[#0e0f0c] dark:hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl font-black tracking-tight text-[#0e0f0c] dark:text-white mb-4"
        >
          Tech Stack <span className="accent-text">Chemistry</span>
        </motion.h1>
        <p className="text-lg text-[#454745] dark:text-[#868685] font-medium mb-4 max-w-2xl">
          Drag the skill pills around — related technologies glow when they get close.
        </p>
        <div className="flex items-center gap-2 text-[13px] text-[#868685] font-medium mb-8">
          <Sparkles className="w-4 h-4 accent-text" />
          <span>Same-group skills connect with a beam when nearby</span>
        </div>

        <div className="relative w-full h-[500px] sm:h-[600px] rounded-[24px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 shadow-xl overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          />
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4">
          {[
            { group: "frontend", label: "Frontend" },
            { group: "backend", label: "Backend" },
            { group: "language", label: "Languages" },
            { group: "tools", label: "Tools" },
          ].map((g) => (
            <span
              key={g.group}
              className="text-[13px] font-bold text-[#454745] dark:text-[#868685] flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full accent-bg opacity-60" />
              {g.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
