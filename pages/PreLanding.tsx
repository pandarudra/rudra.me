import React from "react";
import FuzzyText from "@/components/FuzzyText";

const PreLanding = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <FuzzyText baseIntensity={0.2} hoverIntensity={0.4} enableHover={true}>
        Coming Soon
      </FuzzyText>
    </div>
  );
};

export default PreLanding;
