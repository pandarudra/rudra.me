"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FadeIn } from "../ui/FadeIn";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { certificates } from "@/constants/certificate.c";

export const CertificatesSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 px-6 bg-secondary/30 relative z-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-6">
            <h2 className="text-4xl sm:text-6xl font-black">Certificates</h2>

            <div className="flex gap-4">
              <button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className="p-4 rounded-full border border-border bg-background hover:bg-muted transition-colors disabled:opacity-50"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className="p-4 rounded-full border border-border bg-background hover:bg-muted transition-colors disabled:opacity-50"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y -ml-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_40%] pl-6"
              >
                <div
                  className={`h-full p-8 rounded-[30px] border border-border bg-gradient-to-br ${cert.color} backdrop-blur-sm flex flex-col items-start gap-6`}
                >
                  <div
                    className={`p-4 rounded-2xl bg-background border border-border shadow-sm ${cert.iconColor}`}
                  >
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-sm font-bold text-primary mt-4">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
