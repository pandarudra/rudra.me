"use client";

import { useMsg } from "@/hooks";
import { FadeIn } from "./FadeIn";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send, Moon, Sun, Monitor, Sparkles } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { sendMessage: send } = useMsg();

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await send(email, message);
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative z-20 bg-background border-t border-border/50 pt-28 pb-16 px-6 overflow-hidden rounded-t-[50px] sm:rounded-t-[80px] bg-gradient-to-b from-secondary/30 via-background to-background">
      {/* Ambient Pulsing Glow Backdrop */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* LEFT COLUMN: Contact Form (lg:col-span-7) */}
        <div className="lg:col-span-7">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
                Let&apos;s Connect
              </h2>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            
            <p className="text-muted-foreground mb-10 max-w-lg text-lg sm:text-xl font-light leading-relaxed">
              I&apos;m always open to discussing full-stack engineering roles, open-source initiatives, or contract projects. Drop me a line!
            </p>

            <form className="flex flex-col gap-5 max-w-xl" onSubmit={sendMessage}>
              {/* Animated Email Input */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4.5 rounded-2xl bg-secondary/15 dark:bg-secondary/5 border border-border/70 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.02)] group-hover:border-primary/30"
                />
              </div>

              {/* Animated Message Input */}
              <div className="relative group">
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-6 py-4.5 rounded-2xl bg-secondary/15 dark:bg-secondary/5 border border-border/70 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-300 resize-none shadow-[0_4px_10px_rgba(0,0,0,0.02)] group-hover:border-primary/30"
                />
              </div>

              {/* Magical Send Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="group relative flex items-center justify-center gap-2.5 px-8 py-4.5 bg-foreground text-background dark:bg-foreground dark:text-background font-extrabold rounded-2xl hover:opacity-95 transition-opacity w-full sm:w-auto self-start shadow-md cursor-pointer select-none"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </>
                )}
              </motion.button>
            </form>
          </FadeIn>
        </div>

        {/* RIGHT COLUMN: Socials & Dynamic Dock Theme (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full gap-16 lg:pl-8">
          
          {/* Social Media Node Grid */}
          <FadeIn delay={0.2}>
            <h3 className="text-lg font-bold mb-6 text-foreground tracking-widest uppercase">// Networks</h3>
            <div className="flex flex-wrap gap-4">
              
              {/* GitHub Link */}
              <motion.a
                whileHover={{ y: -4 }}
                href="https://github.com/pandarudra"
                target="_blank"
                rel="noreferrer"
                className="p-4.5 rounded-2xl bg-secondary/20 border border-border/80 text-foreground hover:border-foreground/50 hover:bg-foreground/5 hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] transition-all duration-300 flex items-center justify-center"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </motion.a>

              {/* LinkedIn Link */}
              <motion.a
                whileHover={{ y: -4 }}
                href="https://www.linkedin.com/in/rudra826/"
                target="_blank"
                rel="noreferrer"
                className="p-4.5 rounded-2xl bg-secondary/20 border border-border/80 text-foreground hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-500 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all duration-300 flex items-center justify-center"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>

              {/* Email Link */}
              <motion.a
                whileHover={{ y: -4 }}
                href="mailto:rudrapanda8206@gmail.com"
                className="p-4.5 rounded-2xl bg-secondary/20 border border-border/80 text-foreground hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
          </FadeIn>

          {/* Apple-Style Glassmorphic Theme Dock */}
          <FadeIn delay={0.3}>
            <h3 className="text-lg font-bold mb-6 text-foreground tracking-widest uppercase">// Interface Theme</h3>
            {mounted && (
              <div className="flex bg-secondary/15 dark:bg-secondary/5 backdrop-blur-md rounded-2xl p-2 w-fit border border-border/70 shadow-sm relative group">
                
                {/* Light mode select */}
                <button
                  onClick={() => setTheme("light")}
                  className={`p-3 rounded-xl transition-all relative ${theme === "light" ? "bg-background text-primary shadow-md scale-105" : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"}`}
                  aria-label="Light Theme"
                >
                  <Sun className="w-5 h-5" />
                </button>

                {/* Dark mode select */}
                <button
                  onClick={() => setTheme("dark")}
                  className={`p-3 rounded-xl transition-all relative ${theme === "dark" ? "bg-background text-primary shadow-md scale-105" : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"}`}
                  aria-label="Dark Theme"
                >
                  <Moon className="w-5 h-5" />
                </button>

                {/* System mode select */}
                <button
                  onClick={() => setTheme("system")}
                  className={`p-3 rounded-xl transition-all relative ${theme === "system" ? "bg-background text-primary shadow-md scale-105" : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"}`}
                  aria-label="System Theme"
                >
                  <Monitor className="w-5 h-5" />
                </button>
              </div>
            )}
          </FadeIn>

          {/* Copy block */}
          <div className="mt-16 pt-8 border-t border-border/40 text-muted-foreground text-sm flex flex-col sm:flex-row justify-between gap-4 w-full">
            <span>© {new Date().getFullYear()} Rudramadhab Panda. All rights reserved.</span>
            <span className="text-xs font-mono opacity-60">Designed & engineered with absolute precision.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
