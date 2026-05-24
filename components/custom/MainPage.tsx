import { HeroSection } from "./sections/HeroSection";
import { MarqueeSection } from "./sections/MarqueeSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { GithubSection } from "./sections/GithubSection";
import { CertificatesSection } from "./sections/CertificatesSection";
import { Footer } from "./ui/Footer";

const MainPage = () => {
  return (
    <main className="w-full overflow-x-clip bg-background">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <GithubSection />
      <CertificatesSection />
      <Footer />
    </main>
  );
};

export default MainPage;
