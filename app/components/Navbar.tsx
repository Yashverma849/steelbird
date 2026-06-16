"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

const navLinks = [
  { label: "Helmets", href: "/helmets" },
  { label: "About", href: "/about" },
  { label: "Technology", href: "/#technology" },
  { label: "Safety", href: "/#safety" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSidebarIconFlipped, setIsSidebarIconFlipped] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 80;
      setIsScrolled(scrolled);
      if (!scrolled) setMenuOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-clip">
      <nav className="relative mx-auto flex max-w-[1440px] items-center justify-between px-4 py-5 md:px-16">
        <Link
          href="/"
          className={`font-display text-xl uppercase tracking-[0.04em] text-on-surface transition-all duration-500 md:text-2xl ${
            isScrolled ? "pointer-events-none opacity-0 -translate-x-4" : "opacity-100"
          }`}
        >
          Steelbird
        </Link>

        <ul
          className={`hidden min-w-0 items-center gap-6 transition-all duration-500 md:flex md:gap-8 ${
            isScrolled ? "pointer-events-none opacity-0 -translate-y-2" : "opacity-100"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className="font-mono text-xs font-semibold uppercase tracking-wider text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`absolute left-4 z-20 md:left-16 ${
            isScrolled ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setIsSidebarIconFlipped((prev) => !prev);
            }}
            className={`group flex h-20 w-20 items-center justify-center bg-transparent text-on-surface transition-all duration-500 ${
              isScrolled ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src="/Gemini_Generated_Image_2bjo6t2bjo6t2bjo-removebg-preview.png"
              alt="Sidebar menu symbol"
              width={64}
              height={64}
              className="h-16 w-16 object-contain brightness-125 contrast-125 drop-shadow-[0_0_12px_rgba(255,255,255,0.45)] transition-transform duration-500 group-hover:scale-110"
              style={{
                transform: isSidebarIconFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                transformStyle: "preserve-3d",
              }}
            />
          </button>

          {menuOpen && isScrolled && (
            <div className="absolute left-0 top-16 w-[min(18rem,calc(100vw-2rem))] rounded-md border border-outline/20 bg-background/95 p-4 shadow-[0_10px_30px_rgb(0_0_0_/_0.45)] backdrop-blur-md md:w-72">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded px-2 py-2.5 font-body text-[1.5rem] font-semibold uppercase tracking-[0.1em] leading-none text-on-surface transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="relative z-20 shrink-0">
          <CTAButton href="/helmets" className="px-5 py-2.5 text-sm">
            Shop Now
          </CTAButton>
        </div>

        <Link
          href="/"
          aria-label="Steelbird symbol logo"
          className={`absolute left-1/2 z-40 -translate-x-1/2 transition-all duration-700 ${
            isScrolled
              ? "pointer-events-auto cursor-pointer opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 -translate-y-2"
          }`}
        >
          <Image
            src="/17014c18-b957-46fd-907e-67431c41a3b0-removebg-preview.png"
            alt="Steelbird symbol"
            width={54}
            height={54}
            className="h-10 w-10 object-contain md:h-12 md:w-12"
            priority
          />
        </Link>
      </nav>
    </header>
  );
}
