"use client";

import { motion } from "framer-motion";
import { Play, FileText, Film, Github } from "lucide-react";
import type { Project, ProjectVideo } from "@/data/data";
import { useLang } from "@/app/lang-context";

// ─── Video renderer ───────────────────────────────────────────────────────────

function VideoEmbed({ video }: { video: NonNullable<ProjectVideo> }) {
  if (video.type === "local") {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video.src} type="video/mp4" />
      </video>
    );
  }
  if (video.type === "youtube") {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&loop=1&playlist=${video.videoId}&controls=0&modestbranding=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        title="Project demo"
      />
    );
  }
  if (video.type === "bilibili") {
    return (
      <iframe
        src={`//player.bilibili.com/player.html?bvid=${video.bvid}&autoplay=1&muted=1&danmaku=0&high_quality=1`}
        scrolling="no"
        frameBorder="no"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        title="Project demo"
      />
    );
  }
  return null;
}

function VideoPlaceholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900/80">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgb(161 161 170 / 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgb(161 161 170 / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2">
        <div className="w-11 h-11 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
          <Film size={18} className="text-zinc-400 dark:text-zinc-600" />
        </div>
        <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-600">
          {label}
        </span>
      </div>
    </div>
  );
}

// ─── Action button ────────────────────────────────────────────────────────────

interface ActionBtnProps {
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
  href?: string;
  variant?: "primary" | "outline";
}

function ActionBtn({ icon, label, disabled, href, variant = "outline" }: ActionBtnProps) {
  const base =
    "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200";
  const styles = disabled
    ? "bg-zinc-100 dark:bg-zinc-800/60 text-zinc-400 dark:text-zinc-600 cursor-not-allowed"
    : variant === "primary"
    ? "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-white shadow-sm"
    : "border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800";

  if (!disabled && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
        {icon}
        {label}
      </a>
    );
  }
  return (
    <button disabled={disabled} className={`${base} ${styles}`}>
      {icon}
      {label}
    </button>
  );
}

// ─── ProjectCard ─────────────────────────────────────────────────────────────

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLang();
  // 👇 修改1：在这里把 image 解构出来
  const { title, role, venue, description, tags, video, image, reportPdf, github } = project;

  const demoHref =
    video?.type === "youtube"
      ? (video.pageUrl ?? `https://youtu.be/${video.videoId}`)
      : video?.type === "bilibili"
      ? (video.pageUrl ?? `https://www.bilibili.com/video/${video.bvid}`)
      : video?.type === "local"
      ? video.src
      : undefined;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-900/5 dark:hover:shadow-black/30 transition-all duration-300"
    >
      {/* ── Video / Image / Placeholder ── */}
      <div className="relative w-full aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        {/* 👇 修改2：新增了对 image 的条件渲染判断 */}
        {video ? (
          <VideoEmbed video={video} />
        ) : image ? (
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <VideoPlaceholder label={t.ui.card.demoSoon} />
        )}

        {venue && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono font-semibold tracking-wider uppercase rounded-full bg-white/90 dark:bg-zinc-950/90 border border-zinc-200 dark:border-zinc-700 text-blue-600 dark:text-blue-400 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {venue}
            </span>
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
            {title}
          </h3>
          {role && (
            <p className="mt-1 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">{role}</p>
          )}
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono rounded-md border border-zinc-200 dark:border-zinc-700/80 text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-0.5">
          {/* 有视频链接才渲染 Watch Demo */}
          {demoHref && (
            <ActionBtn
              icon={<Play size={12} />}
              label={t.ui.card.watchDemo}
              href={demoHref}
              variant="primary"
            />
          )}

          {/* 有 PDF 链接才渲染 Read Report */}
          {reportPdf && (
            <ActionBtn
              icon={<FileText size={12} />}
              label={t.ui.card.readReport}
              href={reportPdf}
              variant="outline"
            />
          )}

          {/* 有 GitHub 链接才渲染 GitHub 按钮 */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            >
              <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}