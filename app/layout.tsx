import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nelson Tian — AI Perception Researcher",
  description:
    "Personal portfolio of Nelson Tian, AI Perception Researcher and Open-Source Developer. " +
    "Focused on 3D Computer Vision, Embodied AI, and Autonomous Navigation.",
  openGraph: {
    title: "Nelson Tian — AI Perception Researcher",
    description:
      "Building perception systems that see, understand, and act in the physical world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
