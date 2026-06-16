"use client";

import { useEffect, useRef, useState } from "react";
import CTAButton from "./CTAButton";

const HERO_VIDEO_SRC = "/steelbird%20helmet.mp4";
const FADE_START = 6;
const FADE_END = 10;

const certifications = ["DOT", "ECE 22.06", "ISI"];

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function opacityForTime(currentTime: number): number {
  if (currentTime < FADE_START) return 0;
  if (currentTime >= FADE_END) return 1;
  return easeOutCubic((currentTime - FADE_START) / (FADE_END - FADE_START));
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId = 0;

    const tick = () => {
      setOpacity(opacityForTime(video.currentTime));
      if (!video.paused && !video.ended) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const onPlay = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(tick);
    };

    const onSeeked = () => setOpacity(opacityForTime(video.currentTime));

    video.addEventListener("play", onPlay);
    video.addEventListener("seeked", onSeeked);

    if (!video.paused) onPlay();

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("seeked", onSeeked);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      <div
        className="relative z-10 mx-auto w-full max-w-[1440px] px-4 pb-16 pt-32 md:px-16 md:pb-24"
        style={{
          opacity,
          pointerEvents: opacity > 0.1 ? "auto" : "none",
          willChange: "opacity",
        }}
      >
        <div className="relative flex max-w-3xl flex-col gap-6 md:gap-8">
          <p className="hero-text-shadow-strong font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary-container">
            Est. 1964 — India&apos;s #1 Helmet Brand
          </p>

          <h1 className="hero-text-shadow font-display text-[2rem] uppercase leading-[1.1] tracking-[0.04em] text-on-surface md:text-[5rem] md:leading-[1.1]">
            Built for the
            <br />
            <span className="text-primary-container">Extreme</span>
          </h1>

          <p className="hero-text-shadow max-w-lg font-body text-lg font-normal leading-relaxed tracking-[0.08em] text-on-surface md:text-xl">
            Rugged luxury motocross helmets engineered for off-road endurance and
            professional-grade protection.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <CTAButton
              href="/helmets"
              className="px-8 py-3.5 text-sm shadow-[0_4px_20px_rgb(0_0_0_/_0.45)]"
            >
              Explore Collection
            </CTAButton>
            <CTAButton
              href="#technology"
              variant="ghost"
              className="hero-text-shadow px-8 py-3.5 backdrop-blur-md shadow-[0_4px_20px_rgb(0_0_0_/_0.4)]"
            >
              View Technology
            </CTAButton>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="border border-on-surface/30 bg-background/75 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-on-surface shadow-[0_2px_12px_rgb(0_0_0_/_0.5)] backdrop-blur-md"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        style={{ opacity, willChange: "opacity" }}
      >
        <span className="hero-text-shadow-strong font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-on-surface">
          Scroll
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-outline to-transparent" />
      </div>
    </section>
  );
}
