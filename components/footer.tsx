"use client";

import { profile } from "@/data/data";
import { useLang } from "@/app/lang-context";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-zinc-400">
          © {new Date().getFullYear()} {profile.name} · {t.ui.footer.builtWith}
        </span>
        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-xs font-mono text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            {t.ui.hero.email}
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            {t.ui.hero.resume}
          </a>
        </div>
      </div>
    </footer>
  );
}
