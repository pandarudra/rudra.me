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
    <section className="bg-white dark:bg-[#121311] py-24 px-6 relative z-20 border-t border-[#0e0f0c]/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <FadeIn>
          <div className="flex items-center gap-3 justify-center mb-6">
            <h2 className="text-5xl sm:text-7xl font-black text-[#0e0f0c] dark:text-white tracking-tight text-center">Open Source</h2>
          </div>
          <p className="text-[#454745] dark:text-[#868685] text-lg font-medium text-center max-w-2xl mx-auto mb-10">
            A visual record of my engineering output. Active contributor across personal projects and open-source.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full flex flex-col items-center">
          <div className="mb-8 flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#054d28] dark:text-[#9fe870]" />
            <select
              value={year}
              onChange={(e) => setYear(e.target.value === "last" ? "last" : Number(e.target.value))}
              className="px-5 py-2.5 bg-[#e8ebe6] dark:bg-[#0e0f0c] border border-[#0e0f0c]/5 dark:border-white/5 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-[#054d28]/50 dark:focus:ring-[#9fe870]/50 text-[14px] font-bold text-[#0e0f0c] dark:text-white appearance-none min-w-[130px] text-center cursor-pointer transition-colors"
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
              <div className="p-8 sm:p-10 rounded-[24px] bg-[#e8ebe6] dark:bg-[#0e0f0c] border border-[#0e0f0c]/5 dark:border-white/5 w-full flex justify-center shadow-sm">
                {mounted ? (
                  <GitHubCalendar
                    username="pandarudra"
                    colorScheme={calendarTheme}
                    year={year}
                    blockSize={15}
                    blockMargin={6}
                    fontSize={14}
                  />
                ) : (
                  <div className="w-[1080px] h-[150px] animate-pulse bg-black/5 dark:bg-white/5 rounded-[24px]" />
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

