"use client";

import { useLang } from "@/app/lang-context";
import { motion, AnimatePresence } from "framer-motion";

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "zh" : "en")}
      aria-label="Toggle language"
      className="relative h-8 flex items-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 overflow-hidden transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
    >
      {/* Sliding indicator */}
      <motion.div
        layout
        className="absolute top-1 bottom-1 w-[calc(50%-2px)] rounded-md bg-white dark:bg-zinc-700 shadow-sm"
        animate={{ left: lang === "en" ? "2px" : "calc(50%)" }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      />
      <span
        className={`relative z-10 px-3 text-xs font-mono font-semibold transition-colors duration-200 ${
          lang === "en"
            ? "text-zinc-900 dark:text-zinc-100"
            : "text-zinc-400 dark:text-zinc-500"
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 px-3 text-xs font-mono font-semibold transition-colors duration-200 ${
          lang === "zh"
            ? "text-zinc-900 dark:text-zinc-100"
            : "text-zinc-400 dark:text-zinc-500"
        }`}
      >
        中
      </span>
    </button>
  );
}
