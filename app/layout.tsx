import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const font = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-screen min-w-screen min-h-screen flex justify-center ${font.className}`}>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
