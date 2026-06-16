"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const FULL_TEXT = "Welcome to zoo of helmets";

export default function ShopBanner() {
  const [scrollY, setScrollY] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    setDisplayText("");

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;
        setDisplayText(FULL_TEXT.substring(0, index));
        if (index >= FULL_TEXT.length && interval) {
          clearInterval(interval);
        }
      }, 75);
    }, 200);

    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  const bannerHeightLimit = 400;
  const rawProgress = Math.min(scrollY / bannerHeightLimit, 1);
  const opacity = Math.max(0, 1 - rawProgress);
  const translateY = scrollY * 0.35;
  const scale = 1 + rawProgress * 0.08;
  const textTranslateY = scrollY * 0.15;

  return (
    <div
      className="sticky top-0 -z-10 h-[40vh] min-h-[280px] max-h-[460px] w-full overflow-hidden"
      style={{
        opacity,
        pointerEvents: opacity > 0.01 ? "auto" : "none",
        willChange: "opacity",
      }}
    >
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          willChange: "transform",
        }}
      >
        <Image
          src="/multiple%20helmets.png"
          alt="Steelbird Helmets Collection"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div
        className="absolute inset-0 z-30 flex items-center justify-center px-4"
        style={{
          transform: `translateY(${textTranslateY}px)`,
          willChange: "transform",
        }}
      >
        <p className="hero-text-shadow-strong select-none text-center font-display text-3xl uppercase tracking-[0.02em] text-on-surface md:text-5xl">
          {displayText}
          <span
            className="ml-2 inline-block h-[1em] w-2 animate-pulse bg-primary-container align-middle"
            aria-hidden="true"
          />
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-background/90 via-transparent to-background" />
    </div>
  );
}
