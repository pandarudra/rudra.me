"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-xl border-b border-border/40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-lf text-2xl sm:text-3xl font-black tracking-tighter bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent transition-opacity hover:opacity-80"
        >
          Rudra<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 rounded-full border border-border/50 bg-background/50 px-6 py-2.5 backdrop-blur-md shadow-sm">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            About
          </a>
          <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            Services
          </a>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            Experience
          </a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            Projects
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:rudrapanda8206@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-foreground px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-medium text-background shadow-sm transition-transform hover:scale-105 active:scale-95"
          >
            <Sparkles className="size-4" />
            <span className="hidden sm:inline">Say Hello</span>
            <span className="sm:hidden">Hello</span>
          </a>
        </div>
      </div>
    </header>
  );
};
