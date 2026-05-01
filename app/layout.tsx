import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pranav Teja — Video Editor Portfolio",
  description:
    "High-retention video edits for Reels, TikTok, Shorts & long-form YouTube by Pranav Teja. 50M+ views generated. Available for projects.",
  keywords: [
    "Pranav Teja",
    "video editor",
    "reels editor",
    "youtube editor",
    "short form video",
    "content creator",
    "After Effects",
    "Premiere Pro",
  ],
  openGraph: {
    title: "Pranav Teja — Video Editor Portfolio",
    description: "High-retention video edits for brands and creators.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-obsidian text-white antialiased">{children}</body>
    </html>
  );
}
