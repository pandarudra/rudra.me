"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Calculator, Coffee, Clock, Zap, Check } from "lucide-react";
import Link from "next/link";

const projectTypes = [
  { id: "landing", label: "Landing Page", baseCost: 500, baseWeeks: 1 },
  { id: "webapp", label: "Full-Stack Web App", baseCost: 3000, baseWeeks: 4 },
  { id: "saas", label: "SaaS Platform", baseCost: 8000, baseWeeks: 10 },
  { id: "mobile", label: "Mobile App", baseCost: 5000, baseWeeks: 6 },
  { id: "ecommerce", label: "E-Commerce Store", baseCost: 4000, baseWeeks: 5 },
];

const addons = [
  { id: "auth", label: "User Authentication", cost: 400, icon: "🔐" },
  { id: "payments", label: "Payment Gateway", cost: 600, icon: "💳" },
  { id: "design", label: "Custom UI/UX Design", cost: 800, icon: "🎨" },
  { id: "db", label: "Database & API", cost: 500, icon: "🗄️" },
  { id: "seo", label: "SEO Optimization", cost: 300, icon: "🔍" },
  { id: "analytics", label: "Analytics Dashboard", cost: 700, icon: "📊" },
];

export default function EstimatePage() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [complexity, setComplexity] = useState(3);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const addonsCost = selectedAddons.reduce(
    (sum, id) => sum + (addons.find((a) => a.id === id)?.cost || 0),
    0
  );
  const complexityMultiplier = 0.6 + complexity * 0.2;
  const devCost = Math.round(selectedType.baseCost * complexityMultiplier + addonsCost);
  const maintenance = Math.round(devCost * 0.12);
  const weeks = Math.round(selectedType.baseWeeks * complexityMultiplier);
  const coffees = Math.round(weeks * 12 + complexity * 5);

  return (
    <section className="min-h-screen bg-[#e8ebe6] dark:bg-[#0e0f0c] transition-colors duration-300">
      <div className="max-w-5xl mx-auto py-12 sm:py-20 px-6">
        {/* Back nav */}
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
          Project <span className="accent-text">Estimator</span>
        </motion.h1>
        <p className="text-lg text-[#454745] dark:text-[#868685] font-medium mb-12 max-w-2xl">
          Get an instant ballpark estimate for your next project. Select a type, adjust complexity, and pick your add-ons.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
          {/* Left: Config */}
          <div className="flex flex-col gap-8">
            {/* Project Type */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[24px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 shadow-sm"
            >
              <h3 className="text-xl font-black text-[#0e0f0c] dark:text-white mb-6">
                Project Type
              </h3>
              <div className="flex flex-wrap gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type)}
                    className={`px-5 py-2.5 rounded-[24px] text-[14px] font-bold transition-all ${
                      selectedType.id === type.id
                        ? "accent-bg text-[#0e0f0c] shadow-md scale-105"
                        : "bg-[#e8ebe6] dark:bg-[#1a1b19] text-[#454745] dark:text-[#a0a0a0] hover:scale-105"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Complexity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-[24px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-[#0e0f0c] dark:text-white">
                  Complexity
                </h3>
                <span className="text-[14px] font-bold accent-text">
                  Level {complexity}/5
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={5}
                value={complexity}
                onChange={(e) => setComplexity(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-slider"
                style={{
                  background: `linear-gradient(to right, var(--accent-dark) 0%, var(--accent-dark) ${(complexity - 1) * 25}%, rgba(0,0,0,0.1) ${(complexity - 1) * 25}%, rgba(0,0,0,0.1) 100%)`,
                }}
              />
              <div className="flex justify-between text-[12px] text-[#868685] font-bold mt-2">
                <span>Simple</span>
                <span>Complex</span>
              </div>
            </motion.div>

            {/* Addons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-[24px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 shadow-sm"
            >
              <h3 className="text-xl font-black text-[#0e0f0c] dark:text-white mb-6">
                Add-ons
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addons.map((addon) => {
                  const active = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center gap-3 px-5 py-3.5 rounded-[16px] text-left transition-all border ${
                        active
                          ? "accent-tint border-current accent-text shadow-sm"
                          : "bg-[#e8ebe6]/50 dark:bg-[#1a1b19] border-transparent text-[#454745] dark:text-[#a0a0a0] hover:bg-[#e8ebe6] dark:hover:bg-[#1a1b19]/80"
                      }`}
                    >
                      <span className="text-lg">{addon.icon}</span>
                      <div className="flex-1">
                        <span className="text-[14px] font-bold">{addon.label}</span>
                        <span className="block text-[12px] text-[#868685]">+${addon.cost}</span>
                      </div>
                      {active && <Check className="w-4 h-4" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right: Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:sticky lg:top-24 h-fit p-8 rounded-[24px] bg-[#0e0f0c] dark:bg-white border border-white/5 dark:border-[#0e0f0c]/5 shadow-2xl"
          >
            <h3 className="text-xl font-black text-white dark:text-[#0e0f0c] mb-8">
              Your Estimate
            </h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between text-white dark:text-[#0e0f0c]">
                <div className="flex items-center gap-3">
                  <Calculator className="w-5 h-5 opacity-60" />
                  <span className="text-[15px] font-medium">Development</span>
                </div>
                <motion.span
                  key={devCost}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-xl font-black"
                >
                  ${devCost.toLocaleString()}
                </motion.span>
              </div>

              <div className="flex items-center justify-between text-white/70 dark:text-[#454745]">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 opacity-60" />
                  <span className="text-[15px] font-medium">Maintenance /yr</span>
                </div>
                <span className="text-lg font-bold">${maintenance.toLocaleString()}</span>
              </div>

              <div className="h-px bg-white/10 dark:bg-[#0e0f0c]/10" />

              <div className="flex items-center justify-between text-white dark:text-[#0e0f0c]">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 opacity-60" />
                  <span className="text-[15px] font-medium">Est. Delivery</span>
                </div>
                <motion.span
                  key={weeks}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-xl font-black"
                >
                  ~{weeks} weeks
                </motion.span>
              </div>

              <div className="h-px bg-white/10 dark:bg-[#0e0f0c]/10" />

              {/* Easter egg */}
              <div className="flex items-center justify-between text-white/50 dark:text-[#868685]">
                <div className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 opacity-60" />
                  <span className="text-[14px] font-medium">Coffee Consumed</span>
                </div>
                <motion.span
                  key={coffees}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-lg font-bold"
                >
                  ☕ {coffees} cups
                </motion.span>
              </div>
            </div>

            <a
              href={`mailto:rudrapanda8206@gmail.com?subject=Project Estimate: ${selectedType.label}&body=Project Type: ${selectedType.label}%0AComplexity: ${complexity}/5%0AAdd-ons: ${selectedAddons.join(", ") || "None"}%0AEstimated Cost: $${devCost}%0ATimeline: ~${weeks} weeks`}
              className="mt-10 w-full inline-flex items-center justify-center gap-2 h-14 rounded-[24px] accent-bg text-[#0e0f0c] text-[16px] font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              Lock In This Quote →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
