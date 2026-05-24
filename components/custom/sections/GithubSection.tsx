"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "../ui/FadeIn";
import { GitHubCalendar } from "react-github-calendar";
import { Calendar } from "lucide-react";

export const GithubSection = () => {
  const [year, setYear] = useState<number | "last">("last");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-background py-24 px-6 relative z-20">
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

          <div className="w-full overflow-hidden flex justify-center min-h-[200px]">
            {/* Scaling wrapper to prevent horizontal scroll on mobile */}
            <div className="scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100 origin-top flex justify-center transition-transform">
              <div className="p-8 rounded-3xl bg-secondary/10 border border-border/50">
                {mounted ? (
                  <GitHubCalendar 
                    username="pandarudra" 
                    colorScheme="dark"
                    year={year}
                    blockSize={14}
                    blockMargin={6}
                    fontSize={14}
                  />
                ) : (
                  <div className="w-[800px] h-[150px] animate-pulse bg-muted/20 rounded-xl" />
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
