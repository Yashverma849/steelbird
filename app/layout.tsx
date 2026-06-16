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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/17014c18-b957-46fd-907e-67431c41a3b0-removebg-preview.png",
        type: "image/png",
        sizes: "500x500",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/17014c18-b957-46fd-907e-67431c41a3b0-removebg-preview.png",
  },
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
      <body className="flex min-h-full w-full min-w-0 flex-col overflow-x-clip bg-background text-on-surface">
        <Navbar />
        <div className="w-full min-w-0 flex-1">{children}</div>
      </body>
    </html>
  );
}
