"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  index: string;
  title: string;
}

export function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-4"
    >
      <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 tabular-nums">
        {index}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
    </motion.div>
  );
}
