"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const FULL_TEXT = "Welcome to zoo of helmets";

export default function ShopBanner() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
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

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (imageRef.current) {
      gsap.set(imageRef.current, { scale: 1.12, opacity: 0 });
      timeline.to(imageRef.current, { scale: 1, opacity: 1, duration: 1.2 }, 0);
    }

    if (textRef.current) {
      gsap.set(textRef.current, { opacity: 0, y: 28 });
      timeline.to(textRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.25);
    }

    return () => {
      timeline.kill();
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
        <div ref={imageRef} className="absolute inset-0 origin-center">
          <Image
            src="/multiple%20helmets.png"
            alt="Steelbird Helmets Collection"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div
        className="absolute inset-0 z-30 flex items-center justify-center px-4"
        style={{
          transform: `translateY(${textTranslateY}px)`,
          willChange: "transform",
        }}
      >
        <p
          ref={textRef}
          className="hero-text-shadow-strong select-none text-center font-display text-3xl uppercase tracking-[0.02em] text-on-surface md:text-5xl"
        >
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
