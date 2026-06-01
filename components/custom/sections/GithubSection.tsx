"use client";

import { useState, useEffect, useRef } from "react";
import { FadeIn } from "../ui/FadeIn";
import { GitHubCalendar } from "react-github-calendar";
import { Calendar } from "lucide-react";
import { useTheme } from "next-themes";

export const GithubSection = () => {
  const [year, setYear] = useState<number | "last">("last");
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // The calendar needs approximately 1150px to render completely with padding and labels
        const targetWidth = 1150;
        if (containerWidth < targetWidth) {
          // Add a tiny buffer to guarantee no clipping near viewport borders
          setScale((containerWidth - 16) / targetWidth);
        } else {
          setScale(1);
        }
      }
    };

    // Run on mount/state updates and bind listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Add a small timeout to ensure layout has fully settled
    const timer = setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [mounted, year]); // Recalculate if year changes (in case widget dimensions shift)

  const calendarTheme = mounted && (resolvedTheme || theme) === "light" ? "light" : "dark";

  return (
    <section className="bg-background py-24 px-6 relative z-20 border-t border-border/50">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <FadeIn>
          <div className="flex items-center gap-3 justify-center mb-6">
            <h2 className="text-4xl sm:text-6xl font-black text-center">Open Source</h2>
          </div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            A visual record of my engineering output. Active contributor across personal projects and open-source.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full flex flex-col items-center">
          <div className="mb-8 flex items-center gap-3">
            <Calendar className="w-5 h-5 text-muted-foreground" />
            <select
              value={year}
              onChange={(e) => setYear(e.target.value === "last" ? "last" : Number(e.target.value))}
              className="px-4 py-2 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-medium appearance-none min-w-[120px] text-center cursor-pointer"
            >
              <option value="last">Last Year</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>

          <div
            ref={containerRef}
            className="w-full overflow-hidden flex justify-center items-center py-4 relative"
            style={{
              height: mounted ? `${Math.max(120, 260 * scale)}px` : "220px",
              transition: "height 0.3s ease-out"
            }}
          >
            <div
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "center center",
                width: "1150px"
              }}
              className="shrink-0 flex justify-center transition-transform duration-300 ease-out"
            >
              <div className="p-8 rounded-3xl bg-secondary/10 border border-border/50 w-full flex justify-center">
                {mounted ? (
                  <GitHubCalendar
                    username="pandarudra"
                    colorScheme={calendarTheme}
                    year={year}
                    blockSize={14}
                    blockMargin={6}
                    fontSize={14}
                  />
                ) : (
                  <div className="w-[1080px] h-[150px] animate-pulse bg-muted/20 rounded-xl" />
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
