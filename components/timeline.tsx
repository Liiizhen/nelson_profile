"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, ExternalLink } from "lucide-react";
import { timeline } from "@/data/data";
import type { TimelineType } from "@/data/data";
import { useLang } from "@/app/lang-context";
import { SectionHeader } from "./section-header";

const ICON_MAP: Record<TimelineType, React.ElementType> = {
  experience: Briefcase,
  education: GraduationCap,
  opensource: Code2,
};

const COLOR_MAP: Record<TimelineType, string> = {
  experience:
    "text-blue-500 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800/60",
  education:
    "text-violet-500 bg-violet-50 dark:bg-violet-950/50 border-violet-200 dark:border-violet-800/60",
  opensource:
    "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800/60",
};

function TimelineNode({
  item,
  isLast,
  index,
}: {
  item: (typeof timeline)[0] & {
    period: string;
    role: string;
    org: string;
    location: string;
    typeLabel: string;
    bullets?: readonly string[];
    link?: string;
  };
  isLast: boolean;
  index: number;
}) {
  const Icon = ICON_MAP[item.type];
  const colors = COLOR_MAP[item.type];

  const labelColor =
    item.type === "experience"
      ? "text-blue-500"
      : item.type === "education"
      ? "text-violet-500"
      : "text-emerald-500";

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
      className="relative flex gap-5 md:gap-7"
    >
      {!isLast && (
        <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-zinc-200 dark:from-zinc-800 to-transparent" />
      )}

      <div
        className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center ${colors}`}
      >
        <Icon size={15} strokeWidth={2} />
      </div>

      <div className="flex-1 pb-10">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-2">
          <div>
            <span className={`text-[10px] font-mono font-semibold tracking-widest uppercase ${labelColor}`}>
              {item.typeLabel}
            </span>
            <p className="mt-0.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {item.role}
            </p>
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 mt-0.5">
              <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.org}</span>
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
              <span className="text-xs text-zinc-500">{item.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs font-mono text-zinc-400 whitespace-nowrap">{item.period}</span>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
              >
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>

        {item.bullets && item.bullets.length > 0 && (
          <ul className="mt-3 space-y-2 border-l border-zinc-200 dark:border-zinc-800 pl-4">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export function Timeline() {
  const { t } = useLang();

  // Merge static fields (type, link) from data.ts with translated text from i18n
  const mergedTimeline = timeline.map((item, i) => ({
    ...item,
    ...t.timeline[i],
  }));

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeader index="02" title={t.ui.sections.experience} />
      <div className="mt-12 pl-1">
        {mergedTimeline.map((item, i) => (
          <TimelineNode key={i} item={item} isLast={i === mergedTimeline.length - 1} index={i} />
        ))}
      </div>
    </section>
  );
}
