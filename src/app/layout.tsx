import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-eSpace — Artificial Intelligence Companion for Space Studies",
  description:
    "AI-eSpace by Milletech Systems Inc. delivers agentic, intelligent answers and reports for space functional usage surveys — combining data from legacy systems, grants management, and facility management with AI infrastructure.",
  keywords: [
    "AI-eSpace",
    "Space Studies",
    "Space Functional Usage Survey",
    "F&A Cost Recovery",
    "Facilities Management",
    "Grants Management",
    "Milletech Systems",
    "AI Dashboard",
    "Agentic Chatbot",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
