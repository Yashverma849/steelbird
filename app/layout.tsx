import type { Metadata } from "next";
import { Anton, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Steelbird | Rugged Luxury Helmets",
  description:
    "Professional-grade motocross helmets engineered for extreme endurance and precision safety.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
