"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MetricCountUp from "./MetricCountUp";

export type EngineeringFeature = {
  label: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  backgroundImage: string;
  backgroundAlt: string;
};

type EngineeringFeatureCardProps = {
  feature: EngineeringFeature;
  index: number;
};

export default function EngineeringFeatureCard({ feature, index }: EngineeringFeatureCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [countActive, setCountActive] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const card = cardRef.current;
    const content = contentRef.current;
    const parallax = parallaxRef.current;
    if (!card || !content || !parallax) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCountActive(true);
      gsap.set([content, parallax], { clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(content, { opacity: 0, y: 48 });
      gsap.set(parallax, { yPercent: 8, scale: 1.12 });

      gsap.to(content, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: index * 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          once: true,
        },
        onComplete: () => setCountActive(true),
      });

      gsap.to(parallax, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, card);

    return () => ctx.revert();
  }, [index]);

  return (
    <article
      ref={cardRef}
      tabIndex={0}
      className="engineering-feature-card ghost-border group relative min-h-[340px] overflow-hidden rounded-xl bg-surface-container-high transition-colors hover:border-primary/40 md:min-h-[380px]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden="true"
      >
        <div ref={parallaxRef} className="absolute inset-[-12%] will-change-transform">
          <Image
            src={feature.backgroundImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="engineering-card-bg-fog" />
        <div className="engineering-card-glass" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col gap-4 p-6 transition-[text-shadow] duration-500 group-hover:[text-shadow:0_2px_12px_rgba(0,0,0,0.85)] md:p-8"
      >
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-primary">
          {feature.label}
        </span>
        <h3 className="font-display text-xl uppercase tracking-wide text-on-surface md:text-2xl">
          {feature.title}
        </h3>
        <p className="flex-1 font-body text-sm leading-relaxed text-on-surface-variant group-hover:text-on-surface">
          {feature.description}
        </p>
        <div className="border-t border-outline/10 pt-4 group-hover:border-primary/25">
          <MetricCountUp metric={feature.metric} active={countActive} />
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-outline group-hover:text-on-surface-variant">
            {feature.metricLabel}
          </p>
        </div>
      </div>
    </article>
  );
}
