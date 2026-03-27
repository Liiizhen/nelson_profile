"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/lang-context";
import { SectionHeader } from "./section-header";

export function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeader index="03" title={t.ui.sections.skills} />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {t.skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: gi * 0.08 }}
          >
            <p className="text-[10px] font-mono font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-600 mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.04 }}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-mono rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
