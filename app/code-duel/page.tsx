"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Trophy, Zap, RotateCcw, Timer } from "lucide-react";
import Link from "next/link";

const questions = [
  {
    prompt: "What does `===` check in JavaScript?",
    options: ["Value only", "Type only", "Value and type", "Reference"],
    answer: 2,
  },
  {
    prompt: "Which HTTP method is idempotent?",
    options: ["POST", "PATCH", "PUT", "CONNECT"],
    answer: 2,
  },
  {
    prompt: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    answer: 1,
  },
  {
    prompt: "How do you exit Vim?",
    options: ["Ctrl+C", ":q!", "Alt+F4", "Esc+Esc"],
    answer: 1,
  },
  {
    prompt: "What does REST stand for?",
    options: [
      "Real-time Event Stream Transfer",
      "Representational State Transfer",
      "Remote Execution Service Technology",
      "Resource Endpoint Serialization Tool",
    ],
    answer: 1,
  },
  {
    prompt: "Which data structure uses FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: 1,
  },
  {
    prompt: "What is `NaN === NaN` in JavaScript?",
    options: ["true", "false", "undefined", "TypeError"],
    answer: 1,
  },
  {
    prompt: "Which CSS property creates a stacking context?",
    options: ["display: flex", "position: relative", "z-index with position", "margin: auto"],
    answer: 2,
  },
  {
    prompt: "What does `git rebase` do?",
    options: [
      "Merges branches",
      "Re-applies commits on top of another base",
      "Deletes a branch",
      "Creates a tag",
    ],
    answer: 1,
  },
  {
    prompt: "Which port does HTTPS use by default?",
    options: ["80", "443", "8080", "3000"],
    answer: 1,
  },
];

const ROUND_TIME = 15; // seconds per question

export default function CodeDuelPage() {
  const [gameState, setGameState] = useState<"menu" | "playing" | "results">("menu");
  const [role, setRole] = useState<"dev" | "recruiter">("dev");
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(ROUND_TIME);
  const [shuffledQuestions, setShuffledQuestions] = useState(questions);

  const startGame = (chosenRole: "dev" | "recruiter") => {
    setRole(chosenRole);
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 5);
    setShuffledQuestions(shuffled);
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setTimer(ROUND_TIME);
    setGameState("playing");
  };

  const nextQuestion = useCallback(() => {
    if (currentQ + 1 >= shuffledQuestions.length) {
      setGameState("results");
    } else {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setTimer(ROUND_TIME);
    }
  }, [currentQ, shuffledQuestions.length]);

  useEffect(() => {
    if (gameState !== "playing" || selected !== null) return;
    if (timer <= 0) {
      nextQuestion();
      return;
    }
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [gameState, timer, selected, nextQuestion]);

  const handleChoice = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === shuffledQuestions[currentQ].answer) {
      setScore((s) => s + 1);
    }
    setTimeout(nextQuestion, 1200);
  };

  const getBadge = () => {
    if (score === 5) return { label: "🏆 Perfect Score!", color: "text-[#ffd11a]" };
    if (score >= 4) return { label: "⚡ Elite " + (role === "dev" ? "Developer" : "Recruiter"), color: "accent-text" };
    if (score >= 3) return { label: "✅ Certified " + (role === "dev" ? "Developer" : "Tech Recruiter"), color: "text-[#2ead4b]" };
    return { label: "📚 Keep Learning!", color: "text-[#868685]" };
  };

  return (
    <section className="min-h-screen bg-[#e8ebe6] dark:bg-[#0e0f0c] transition-colors duration-300">
      <div className="max-w-3xl mx-auto py-12 sm:py-20 px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[14px] font-bold text-[#454745] dark:text-[#868685] hover:text-[#0e0f0c] dark:hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl font-black tracking-tight text-[#0e0f0c] dark:text-white mb-4"
        >
          Code <span className="accent-text">Duel</span>
        </motion.h1>
        <p className="text-lg text-[#454745] dark:text-[#868685] font-medium mb-12">
          Test your tech knowledge in 5 rapid-fire rounds.
        </p>

        <AnimatePresence mode="wait">
          {/* MENU */}
          {gameState === "menu" && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-10 rounded-[24px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 shadow-xl text-center"
            >
              <Zap className="w-12 h-12 mx-auto accent-text mb-6" />
              <h2 className="text-2xl font-black text-[#0e0f0c] dark:text-white mb-2">
                Choose Your Role
              </h2>
              <p className="text-[#454745] dark:text-[#868685] mb-8">
                Pick your identity and prove your worth!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => startGame("dev")}
                  className="px-8 py-4 rounded-[24px] accent-bg text-[#0e0f0c] font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  🧑‍💻 I'm a Developer
                </button>
                <button
                  onClick={() => startGame("recruiter")}
                  className="px-8 py-4 rounded-[24px] bg-[#0e0f0c] dark:bg-white text-white dark:text-[#0e0f0c] font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  🔍 I'm a Recruiter
                </button>
              </div>
            </motion.div>
          )}

          {/* PLAYING */}
          {gameState === "playing" && (
            <motion.div
              key={`q-${currentQ}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="p-8 sm:p-10 rounded-[24px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 shadow-xl"
            >
              {/* Progress bar */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[13px] font-bold text-[#868685]">
                  {currentQ + 1} / {shuffledQuestions.length}
                </span>
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4 text-[#868685]" />
                  <span className={`text-[14px] font-black ${timer <= 5 ? "text-[#d03238]" : "text-[#0e0f0c] dark:text-white"}`}>
                    {timer}s
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#0e0f0c]/5 dark:bg-white/5 h-1.5 rounded-full mb-8 overflow-hidden">
                <motion.div
                  className="accent-bg h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQ + 1) / shuffledQuestions.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-[#0e0f0c] dark:text-white mb-8">
                {shuffledQuestions[currentQ].prompt}
              </h2>

              <div className="grid gap-3">
                {shuffledQuestions[currentQ].options.map((opt, i) => {
                  const isAnswer = i === shuffledQuestions[currentQ].answer;
                  const isSelected = selected === i;
                  let classes = "bg-[#e8ebe6]/50 dark:bg-[#1a1b19] border-transparent text-[#0e0f0c] dark:text-white hover:bg-[#e8ebe6] dark:hover:bg-[#1a1b19]/80";
                  if (selected !== null) {
                    if (isAnswer) classes = "bg-[#2ead4b]/15 border-[#2ead4b] text-[#2ead4b]";
                    else if (isSelected) classes = "bg-[#d03238]/15 border-[#d03238] text-[#d03238]";
                    else classes = "opacity-50 bg-[#e8ebe6]/30 dark:bg-[#1a1b19]/30 border-transparent text-[#868685]";
                  }
                  return (
                    <motion.button
                      key={i}
                      whileHover={selected === null ? { scale: 1.02 } : {}}
                      whileTap={selected === null ? { scale: 0.98 } : {}}
                      onClick={() => handleChoice(i)}
                      disabled={selected !== null}
                      className={`px-6 py-4 rounded-[16px] border-2 text-left font-bold text-[15px] transition-all ${classes}`}
                    >
                      <span className="mr-3 opacity-40">{String.fromCharCode(65 + i)}.</span>
                      {opt}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* RESULTS */}
          {gameState === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 rounded-[24px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 shadow-xl text-center"
            >
              <Trophy className="w-16 h-16 mx-auto accent-text mb-6" />
              <h2 className="text-3xl font-black text-[#0e0f0c] dark:text-white mb-2">
                {score} / {shuffledQuestions.length}
              </h2>
              <p className={`text-xl font-black mb-8 ${getBadge().color}`}>
                {getBadge().label}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setGameState("menu")}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-[24px] accent-bg text-[#0e0f0c] font-bold text-lg transition-all hover:scale-105 active:scale-95"
                >
                  <RotateCcw className="w-5 h-5" /> Play Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
