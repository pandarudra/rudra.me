"use client";

import { FadeIn } from "@/components/custom/ui/FadeIn";
import { Footer } from "@/components/custom/ui/Footer";
import Link from "next/link";
import Script from "next/script";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Linkedin,
  Twitter,
  ExternalLink,
  MessageSquare,
  Sparkles,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { leetcode_username } from "@/constants";

const socialPosts = [
  {
    id: 1,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7463963667857051649?collapsed=1",
    type: "linkedin" as const,
    title: "Latest LinkedIn Post",
    preview: "Sharing my journey and learnings in the dev community",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7416903037002158080?collapsed=1",
    type: "linkedin" as const,
    title: "Tech Deep Dive",
    preview: "Exploring modern web architecture patterns",
  },
  {
    id: 3,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7365992100057841666?collapsed=1",
    type: "linkedin" as const,
    title: "Project Announcement",
    preview: "Building in public — new feature launches",
  },
  {
    id: 4,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7230833354135191552?collapsed=1",
    type: "linkedin" as const,
    title: "Community Post",
    preview: "Thoughts on open source and collaboration",
  },
  {
    id: 5,
    type: "twitter" as const,
    title: "Build in Public",
    preview: "Draw.wine rebuild — Redis, Gemini AI, Solana auth",
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Rebuilt major parts of <a href="https://t.co/vJsUcBHaTp">https://t.co/vJsUcBHaTp</a> after a long break <br>Now powered with:<br>• Redis Pub/Sub scaling<br>• Gemini AI vector generation<br>• Prompt compression for lower latency<br>• Solana wallet auth + premium payments<br>Big thanks to <a href="https://twitter.com/uk_2149?ref_src=twsrc%5Etfw">@uk_2149</a> for contributing <a href="https://twitter.com/hashtag/buildinpublic?src=hash&amp;ref_src=twsrc%5Etfw">#buildinpublic</a> <a href="https://t.co/waQhh4GPzv">pic.twitter.com/waQhh4GPzv</a></p>&mdash; Rudra (@${leetcode_username}) <a href="https://twitter.com/${leetcode_username}/status/2058200310112514147?ref_src=twsrc%5Etfw">May 23, 2026</a></blockquote>`,
  },
];

const stats = [
  { icon: <MessageSquare className="w-5 h-5" />, label: "Posts", value: `${socialPosts.length}` },
  { icon: <TrendingUp className="w-5 h-5" />, label: "Platforms", value: "2" },
  { icon: <Sparkles className="w-5 h-5" />, label: "Topics", value: "Dev, OSS, AI" },
];

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#e8ebe6] dark:bg-[#0e0f0c] transition-colors duration-300">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        {/* Subtle gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#e8ebe6] dark:to-[#0e0f0c] pointer-events-none z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.07] dark:opacity-[0.05] blur-[100px] pointer-events-none"
          style={{ background: "var(--accent-primary, #9fe870)" }}
        />

        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 pt-12 sm:pt-16 pb-16 sm:pb-20 relative z-20">
          {/* Back button */}
          <FadeIn>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#454745] dark:text-[#868685] hover:text-[#0e0f0c] dark:hover:text-white transition-colors mb-12 sm:mb-16"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
            {/* Title area */}
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 accent-text" />
                <span className="text-[12px] font-bold uppercase tracking-widest accent-text">
                  Blog & Socials
                </span>
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#0e0f0c] dark:text-white mb-6 leading-[0.9]">
                Thoughts <br />
                <span className="accent-text">&amp; Updates</span>
              </h1>
              <p className="text-xl text-[#454745] dark:text-[#868685] font-medium max-w-xl leading-relaxed">
                A curated collection of my recent posts, deep dives, and project updates from across the web.
              </p>
            </FadeIn>

            {/* Stats pills */}
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="inline-flex items-center gap-3 px-5 py-3.5 rounded-[20px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 shadow-sm"
                  >
                    <span className="accent-text">{stat.icon}</span>
                    <div>
                      <div className="text-[12px] text-[#868685] font-bold">{stat.label}</div>
                      <div className="text-[14px] font-black text-[#0e0f0c] dark:text-white">{stat.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ── Platform filter tabs ── */}
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 mb-10">
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#868685] tracking-wider uppercase mr-2">
              Platforms
            </span>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0077B5]/10 text-[#0077B5] text-[13px] font-bold border border-[#0077B5]/20">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] text-[13px] font-bold border border-[#1DA1F2]/20">
                <Twitter className="w-3.5 h-3.5" /> Twitter / X
              </span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* ── Posts grid ── */}
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 pb-24 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialPosts.map((post, index) => (
            <FadeIn key={post.id} delay={0.15 + index * 0.08} y={20}>
              <motion.div
                whileHover={{ y: -3 }}
                className="group relative rounded-[24px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Card header */}
                <div className="flex items-center justify-between px-6 pt-5 pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-[12px] ${
                      post.type === "twitter"
                        ? "bg-[#1DA1F2]/10 text-[#1DA1F2]"
                        : "bg-[#0077B5]/10 text-[#0077B5]"
                    }`}>
                      {post.type === "twitter" ? (
                        <Twitter className="w-4 h-4" />
                      ) : (
                        <Linkedin className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <p className="text-[14px] font-black text-[#0e0f0c] dark:text-white leading-tight">
                        {post.title}
                      </p>
                      <p className="text-[12px] text-[#868685] font-medium">
                        {post.preview}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#868685] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Embed area */}
                <div className="relative flex-1 px-4 pb-4">
                  {/* Loading placeholder behind the iframe */}
                  <div className="absolute inset-4 flex items-center justify-center rounded-[16px] bg-[#e8ebe6]/50 dark:bg-[#1a1b19]/50 -z-0">
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-3 rounded-full border-2 border-[#868685]/30 border-t-[#868685] animate-spin" />
                      <p className="text-[13px] text-[#868685] font-medium">Loading post…</p>
                      <p className="text-[11px] text-[#868685]/60 mt-1">
                        May be blocked by ad-blockers
                      </p>
                    </div>
                  </div>

                  {post.type === "twitter" && post.html ? (
                    <div
                      className="relative w-full min-h-[350px] flex justify-center items-center overflow-hidden [&_.twitter-tweet]:!mx-auto z-10 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-[16px] p-3"
                      dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                  ) : (
                    <iframe
                      src={post.url}
                      height="100%"
                      width="100%"
                      className="relative w-full min-h-[400px] rounded-[16px] z-10 bg-white/50 dark:bg-black/30 backdrop-blur-sm border-0"
                      frameBorder="0"
                      allowFullScreen
                      title={post.title}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                    />
                  )}
                </div>

                {/* Hover accent line */}
                <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500 accent-bg" />
              </motion.div>
            </FadeIn>
          ))}

          {socialPosts.length === 0 && (
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-[24px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 h-[400px] flex items-center justify-center shadow-sm">
                <p className="text-[#868685] text-center font-bold">
                  No posts added yet.
                </p>
              </div>
            </FadeIn>
          )}
        </div>

        {/* CTA — connect */}
        <FadeIn delay={0.4}>
          <div className="mt-16 p-8 sm:p-12 rounded-[24px] bg-white dark:bg-[#121311] border border-[#0e0f0c]/5 dark:border-white/5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-[#0e0f0c] dark:text-white mb-2">
                Want to see more?
              </h3>
              <p className="text-[#454745] dark:text-[#868685] font-medium">
                Follow me on socials for daily updates, tips, and behind-the-scenes dev content.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/rudra826/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[24px] bg-[#0077B5] text-white font-bold text-[14px] transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://x.com/rudra_826"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[24px] bg-[#0e0f0c] dark:bg-white text-white dark:text-[#0e0f0c] font-bold text-[14px] transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <Twitter className="w-4 h-4" /> Twitter / X
              </motion.a>
            </div>
          </div>
        </FadeIn>
      </div>

      <Footer />
      <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
    </main>
  );
}
