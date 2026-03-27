"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { projects } from "@/data/data";
import { useLang } from "@/app/lang-context";
import { SectionHeader } from "./section-header";

export function Projects() {
  const { t } = useLang();

  // Merge static asset paths from data.ts with translated text from i18n
  const mergedProjects = projects.map((p, i) => ({
    ...p,
    ...t.projects[i],
  }));

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeader index="01" title={t.ui.sections.projects} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {mergedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
