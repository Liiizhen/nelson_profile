"use client";

import { motion } from "framer-motion";
import { Github, FileText, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/data";
import { useLang } from "@/app/lang-context";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function Hero() {
  const { t } = useLang();
  const { ui, profile: p } = t;

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-20 max-w-5xl mx-auto overflow-hidden">
      {/* Dot-grid background */}
      <div className="hero-dots absolute inset-0 -z-10 pointer-events-none" />
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-white via-transparent to-white dark:from-zinc-950 dark:via-transparent dark:to-zinc-950" />

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-16">

        {/* ── Left: text content ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-8 min-w-0"
        >
          {/* Availability pill */}
          <motion.div variants={item} className="inline-flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              {ui.hero.availability}
            </span>
          </motion.div>

          {/* Name + tagline */}
          <motion.div variants={item}>
            <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-50">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light tracking-tight">
              {p.tagline}
            </p>
          </motion.div>

          {/* Keyword chips */}
          <motion.div variants={item} className="flex flex-wrap gap-2">
            {p.keywords.map((kw) => (
              <span
                key={kw}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/60"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {kw}
              </span>
            ))}
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            {p.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-white transition-colors shadow-sm"
            >
              <Github size={15} />
              {ui.hero.github}
              <ArrowUpRight size={13} className="opacity-60" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              <FileText size={15} />
              {ui.hero.resume}
              <ArrowUpRight size={13} className="opacity-50" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              <Mail size={15} />
              {ui.hero.email}
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex-shrink-0 flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent" />
            <div className="absolute -inset-1 rounded-full border border-zinc-200 dark:border-zinc-800" />
            {/* Photo */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-zinc-900 shadow-xl shadow-zinc-900/10 dark:shadow-black/40">
              <Image
                src="/pics/portrait.jpg"
                alt="Nelson Tian"
                fill
                className="object-cover"
                style={{ objectPosition: "center 72%" }}
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">
          {ui.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-zinc-400 dark:from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
