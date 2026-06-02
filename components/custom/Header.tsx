"use client";

import React from "react";

export const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // 80px offset accounts for the fixed header height so it doesn't cover the section title
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 pointer-events-none">
      <div className="w-full flex items-center justify-center px-4">
        <nav className="pointer-events-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8 rounded-[24px] border border-[#0e0f0c]/5 dark:border-white/5 bg-white/70 dark:bg-[#121311]/70 px-6 sm:px-8 py-3 backdrop-blur-md shadow-sm">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-[13px] sm:text-[14px] font-bold text-[#454745] dark:text-[#a0a0a0] hover:text-[#0e0f0c] dark:hover:text-white transition-colors cursor-pointer">
            About
          </a>
          <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="text-[13px] sm:text-[14px] font-bold text-[#454745] dark:text-[#a0a0a0] hover:text-[#0e0f0c] dark:hover:text-white transition-colors cursor-pointer">
            Services
          </a>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="text-[13px] sm:text-[14px] font-bold text-[#454745] dark:text-[#a0a0a0] hover:text-[#0e0f0c] dark:hover:text-white transition-colors cursor-pointer">
            Experience
          </a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-[13px] sm:text-[14px] font-bold text-[#454745] dark:text-[#a0a0a0] hover:text-[#0e0f0c] dark:hover:text-white transition-colors cursor-pointer">
            Projects
          </a>
          <a href="#certificates" onClick={(e) => handleScroll(e, 'certificates')} className="text-[13px] sm:text-[14px] font-bold text-[#454745] dark:text-[#a0a0a0] hover:text-[#0e0f0c] dark:hover:text-white transition-colors cursor-pointer">
            Certificates
          </a>
        </nav>
      </div>
    </header>
  );
};

