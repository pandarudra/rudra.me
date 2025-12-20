"use client";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import PreLanding from "./PreLanding";
import { useState, useEffect } from "react";
import OnekoCat from "@/components/custom/OnekoCat";
import { useCursor } from "@/hooks/use-cursor";

const Landing = () => {
  const [showPreLanding, setShowPreLanding] = useState(true);
  useCursor("/icons/cursor.png", 16);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreLanding(false);
    }, 3000); // Show PreLanding for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showPreLanding) {
    return <PreLanding />;
  }

  return (
    <div>
      {/* cat */}
      <OnekoCat />
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={0.2}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
    </div>
  );
};

export default Landing;
