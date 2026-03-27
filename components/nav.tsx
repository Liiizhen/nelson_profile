"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";
import { useLang } from "@/app/lang-context";

export function Nav() {
  const { t } = useLang();

  const NAV_LINKS = [
    { href: "#projects", label: t.ui.nav.projects },
    { href: "#experience", label: t.ui.nav.experience },
    { href: "#skills", label: t.ui.nav.skills },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200/70 dark:border-zinc-800/70 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl"
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors tracking-tight"
        >
          nelson.tian
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
