"use client";

import { FadeIn } from "../ui/FadeIn";

const services = [
  {
    num: "01",
    title: "Frontend Engineering",
    desc: "Building highly performant, reactive user interfaces with React, Next.js, and SvelteKit. Focused on scalable architectures and smooth UX."
  },
  {
    num: "02",
    title: "Backend Architecture",
    desc: "Designing robust, scalable APIs and microservices using Node.js, Express, and NestJS, with real-time capabilities via Socket.IO."
  },
  {
    num: "03",
    title: "Cloud & DevOps",
    desc: "Configuring and managing deployments on AWS and Azure, Dockerizing applications, and implementing CI/CD pipelines."
  },
];

export const ServicesSection = () => {
  return (
    <section className="bg-secondary/30 rounded-t-[40px] sm:rounded-t-[60px] py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl sm:text-6xl font-black text-center mb-20">Services</h2>
        </FadeIn>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-border/50 items-start md:items-center">
                <span className="text-5xl sm:text-7xl font-black text-muted-foreground/30">
                  {service.num}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
