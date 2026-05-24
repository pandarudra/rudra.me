"use client";

import { useMsg } from "@/hooks";
import { FadeIn } from "./FadeIn";
import { Github, Linkedin, Mail, Send, Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useSyncExternalStore } from "react";

export const Footer = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { sendMessage: send } = useMsg();

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await send(email, message);
  };

  return (
    <footer className="bg-background border-t border-border/50 py-24 px-6 relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Side - Contact Info & Form */}
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md">
            I&apos;m always open to discussing product design work or
            partnership opportunities. Drop me a line!
          </p>

          <form className="flex flex-col gap-4" onSubmit={sendMessage}>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-6 py-4 rounded-2xl bg-secondary/30 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="px-6 py-4 rounded-2xl bg-secondary/30 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:opacity-90 transition-opacity w-full sm:w-auto self-start"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </FadeIn>

        {/* Right Side - Socials & Theme */}
        <FadeIn delay={0.2} className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-6">Socials</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/pandarudra"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-secondary/30 border border-border hover:bg-secondary/60 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rudra826/"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-secondary/30 border border-border hover:bg-secondary/60 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:rudrapanda8206@gmail.com"
                className="p-4 rounded-2xl bg-secondary/30 border border-border hover:bg-secondary/60 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6">Theme</h3>
            {mounted && (
              <div className="flex bg-secondary/30 rounded-2xl p-2 w-fit border border-border">
                <button
                  onClick={() => setTheme("light")}
                  className={`p-3 rounded-xl transition-all ${theme === "light" ? "bg-background shadow-sm" : "hover:bg-secondary/50"}`}
                  aria-label="Light Theme"
                >
                  <Sun className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`p-3 rounded-xl transition-all ${theme === "dark" ? "bg-background shadow-sm" : "hover:bg-secondary/50"}`}
                  aria-label="Dark Theme"
                >
                  <Moon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setTheme("system")}
                  className={`p-3 rounded-xl transition-all ${theme === "system" ? "bg-background shadow-sm" : "hover:bg-secondary/50"}`}
                  aria-label="System Theme"
                >
                  <Monitor className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          <div className="mt-16 pt-8 border-t border-border/50 text-muted-foreground text-sm">
            © {new Date().getFullYear()} Rudramadhab Panda. All rights reserved.
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};
