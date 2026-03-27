"use client";

import { createContext, useContext, useState } from "react";
import { i18n } from "@/data/data";
import type { Lang } from "@/data/data";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof i18n.en;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: i18n.en,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangContext.Provider value={{ lang, setLang, t: i18n[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
