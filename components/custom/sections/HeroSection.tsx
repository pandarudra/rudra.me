"use client";

import React, { useState } from "react";
import { ArrowRight, Zap, Play, RotateCcw, Download } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { heroTags } from "@/constants";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const heroStats = [
  { value: "7+", label: "core specialties" },
  { value: "Realtime", label: "systems mindset" },
  { value: "Full Stack", label: "product delivery" },
];

type HistoryItem = {
  id: string;
  type: 'input' | 'output' | 'error' | 'log';
  content: string;
  valueType?: 'string' | 'number' | 'boolean' | 'undefined' | 'object' | 'function' | 'bigint' | 'symbol';
};

const CleanDevCard = () => {
  const [history, setHistory] = useState<HistoryItem[]>([
    { id: 'init-1', type: 'input', content: 'const dev = { name: "Rudra", role: "Full-Stack" };' },
    { id: 'init-2', type: 'output', content: 'undefined', valueType: 'undefined' },
    { id: 'init-3', type: 'input', content: 'dev.name' },
    { id: 'init-4', type: 'output', content: '"Rudra"', valueType: 'string' },
  ]);
  const [input, setInput] = useState('');
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);

  React.useEffect(() => {
    // Setup isolated iframe sandbox for executing JS
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    iframeRef.current = iframe;
    
    const win = iframe.contentWindow as any;
    if (win) {
      // Pre-load the 'dev' object silently in the sandbox
      try {
        win.eval('var dev = { name: "Rudra", role: "Full-Stack" };');
      } catch (e) {}
    }

    return () => {
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    };
  }, []);

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!input.trim()) return;

      const newHistory: HistoryItem[] = [...history, { id: Date.now().toString(), type: 'input', content: input }];
      
      const win = iframeRef.current?.contentWindow as any;
      if (!win) {
         setHistory([...newHistory, { id: Date.now().toString()+'-err', type: 'error', content: "Sandbox not initialized."}]);
         return;
      }

      const originalConsoleLog = win.console.log;
      const interceptedLogs: string[] = [];
      win.console.log = (...args: any[]) => {
        interceptedLogs.push(args.map((a: any) => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
        if (originalConsoleLog) originalConsoleLog.apply(win.console, args);
      };

      try {
        // Rewrite let/const to var so they persist in the iframe global scope and can be redefined
        const processedCode = input.replace(/\b(?:let|const)\s+/g, 'var ');
        const result = win.eval(processedCode);
        
        interceptedLogs.forEach((log, index) => {
          newHistory.push({
            id: Date.now().toString() + '-log-' + index,
            type: 'log',
            content: log
          });
        });

        let valueType = typeof result;
        let content = String(result);
        
        if (valueType === 'object' && result !== null) {
           content = JSON.stringify(result, null, 2);
        } else if (valueType === 'string') {
           content = `"${result}"`;
        } else if (valueType === 'function') {
           content = `ƒ ${result.name || 'anonymous'}()`;
        }
        
        newHistory.push({
          id: Date.now().toString() + '-out',
          type: 'output',
          content,
          valueType: result === null ? 'object' : valueType
        });
      } catch (err: any) {
        newHistory.push({
          id: Date.now().toString() + '-err',
          type: 'error',
          content: err.toString()
        });
      } finally {
        win.console.log = originalConsoleLog;
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  const getColorForType = (type?: string) => {
    switch (type) {
      case 'number': return 'text-[#3b78ff] dark:text-[#9980ff]';
      case 'string': return 'text-[#d03238] dark:text-[#e36e6e]';
      case 'boolean': return 'text-[#b86700] dark:text-[#ffbd2e]';
      case 'undefined': return 'text-[#868685]';
      case 'function': return 'text-[#2ead4b] font-italic';
      default: return 'text-[#0e0f0c] dark:text-white';
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:ml-auto rounded-[24px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 shadow-2xl overflow-hidden flex flex-col font-mono text-[13px] sm:text-[14px] h-[400px] transition-colors duration-300">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-[#0e0f0c]/5 dark:border-white/5 bg-[#e8ebe6]/40 dark:bg-black/20">
        <div className="flex gap-2">
          <div className="size-3.5 rounded-full bg-[#d03238]"></div>
          <div className="size-3.5 rounded-full bg-[#ffd11a]"></div>
          <div className="size-3.5 rounded-full bg-[#2ead4b]"></div>
        </div>
        <div className="text-[12px] font-bold text-[#868685] uppercase tracking-widest ml-2">Console</div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-thin scrollbar-thumb-[#0e0f0c]/10 dark:scrollbar-thumb-white/10"
      >
        {history.map((item) => (
          <div key={item.id} className="flex gap-3 py-1.5 border-b border-[#0e0f0c]/5 dark:border-white/5 last:border-0 group break-all">
            {item.type === 'input' && (
              <>
                <span className="text-[#3b78ff] select-none font-bold mt-0.5">{">"}</span>
                <span className="text-[#0e0f0c] dark:text-white whitespace-pre-wrap flex-1">{item.content}</span>
              </>
            )}
            {item.type === 'output' && (
              <>
                <span className="text-[#868685] select-none text-[11px] mt-1">{"<·"}</span>
                <span className={`${getColorForType(item.valueType)} whitespace-pre-wrap flex-1`}>{item.content}</span>
              </>
            )}
            {item.type === 'log' && (
              <>
                <span className="text-transparent select-none mt-0.5">{">"}</span>
                <span className="text-[#454745] dark:text-[#a0a0a0] whitespace-pre-wrap flex-1">{item.content}</span>
              </>
            )}
            {item.type === 'error' && (
              <>
                <span className="text-[#d03238] select-none text-[11px] mt-1">{"✖"}</span>
                <span className="text-[#d03238] whitespace-pre-wrap flex-1">{item.content}</span>
              </>
            )}
          </div>
        ))}
        
        <div className="flex gap-3 py-1.5 items-start mt-1">
          <span className="text-[#3b78ff] select-none font-bold mt-0.5">{">"}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-[#0e0f0c] dark:text-white focus:outline-none placeholder:text-[#868685]"
            spellCheck={false}
            autoComplete="off"
          />
        </div>
        <div className="h-2" />
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const router = useRouter();
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-[#e8ebe6] dark:bg-[#0e0f0c] transition-colors duration-300"
    >
      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left flex flex-col justify-center">
            
            <FadeIn y={40} delay={0.1}>
              <h1 className="text-6xl sm:text-7xl md:text-[100px] lg:text-[120px] font-black leading-[0.85] tracking-tight mb-8 text-[#0e0f0c] dark:text-white font-sans">
                Hi, I’m{" "}
                <span className="text-[#054d28] dark:text-[#9fe870]">
                  Rudra.
                </span>
              </h1>
            </FadeIn>

            <FadeIn y={30} delay={0.22}>
              <p className="text-xl sm:text-2xl text-[#454745] dark:text-[#868685] font-medium max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed tracking-tight">
               I build digital experiences that don't just work, they resonate. From lightning-fast interfaces to battle-tested backend systems, I create products that are elegant, scalable, and impossible to ignore.    </p>
            </FadeIn>

            <FadeIn
              y={18}
              delay={0.32}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 flex-wrap"
            >
              <a href="mailto:rudrapanda8206@gmail.com" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto group inline-flex h-14 items-center justify-center gap-2 rounded-[24px] bg-[#054d28] dark:bg-[#9fe870] px-8 text-[16px] font-bold text-white dark:text-[#0e0f0c] transition-all hover:bg-[#2ead4b] dark:hover:bg-[#cdffad] hover:scale-105 active:scale-95 shadow-lg shadow-[#054d28]/20 dark:shadow-[#9fe870]/20">
                  Get In Touch
                </button>
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
               
                  router.push("/blog");
                }}
                className="w-full sm:w-auto group inline-flex h-14 items-center justify-center gap-2 rounded-[24px] border-2 border-[#0e0f0c] dark:border-white bg-transparent px-8 text-[16px] font-bold text-[#0e0f0c] dark:text-white transition-all hover:bg-[#0e0f0c] hover:text-white dark:hover:bg-white dark:hover:text-[#0e0f0c] hover:scale-105 active:scale-95 cursor-pointer"
              >
                Explore Blogs
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
         
            </FadeIn>

          </div>

          <FadeIn y={25} delay={0.28} className="w-full flex justify-center lg:justify-end">
            <CleanDevCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
