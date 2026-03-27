"use client";

import { ThemeProvider } from "next-themes";
import { LangProvider } from "./lang-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LangProvider>{children}</LangProvider>
    </ThemeProvider>
  );
}
