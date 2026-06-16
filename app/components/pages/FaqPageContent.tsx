"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import FaqAccordion from "@/app/components/pages/FaqAccordion";
import type { FaqItem } from "@/app/data/faq";

type FaqPageContentProps = {
  items: FaqItem[];
};

export default function FaqPageContent({ items }: FaqPageContentProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const textItems = root.querySelectorAll<HTMLElement>(".faq-text-item");
    const cardItems = root.querySelectorAll<HTMLElement>(".faq-card-item");
    const footer = root.querySelector<HTMLElement>(".faq-footer-text");

    gsap.set(textItems, { opacity: 0, y: 36 });
    gsap.set(cardItems, {
      opacity: 0,
      x: (index) => (index % 2 === 0 ? -160 : 160),
    });
    if (footer) gsap.set(footer, { opacity: 0, y: 24 });

    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    timeline.to(textItems, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.18,
    });

    timeline.to(
      cardItems,
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.16,
      },
      "-=0.35",
    );

    timeline.to(
      footer,
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
      },
      "-=0.2",
    );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div ref={rootRef}>
      <header className="mb-10 md:mb-14">
        <p className="faq-text-item font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          FAQ
        </p>
        <h1 className="faq-text-item mt-2 font-display text-4xl uppercase tracking-[0.02em] text-on-surface md:text-6xl">
          Common Questions
        </h1>
        <p className="faq-text-item mt-4 max-w-2xl font-body text-lg leading-relaxed text-secondary md:text-xl">
          Everything you need to know about Steelbird helmets — from certification and sizing to
          warranty and care.
        </p>
      </header>

      <FaqAccordion items={items} />

      <p className="faq-footer-text mt-8 text-center font-body text-base text-secondary">
        Still need help?{" "}
        <Link href="/contact" className="text-primary-container underline-offset-2 hover:underline">
          Contact our team
        </Link>
        .
      </p>
    </div>
  );
}
