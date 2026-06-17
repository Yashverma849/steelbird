"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EngineeringFeatureCard, { type EngineeringFeature } from "./EngineeringFeatureCard";

const features: EngineeringFeature[] = [
  {
    label: "IMPACT RESISTANCE",
    title: "Multi-Density EPS Core",
    description:
      "Engineered shell geometry absorbs and disperses impact energy across multiple density layers for maximum protection.",
    metric: "98%",
    metricLabel: "Impact Absorption",
    backgroundImage: "/card1 helmets.png",
    backgroundAlt: "Collection of helmets on a workshop shelf",
  },
  {
    label: "AERODYNAMICS",
    title: "Wind-Tunnel Tested",
    description:
      "Sculpted visor and shell profile reduce drag and buffeting at high speeds, keeping you stable through every turn.",
    metric: "12%",
    metricLabel: "Drag Reduction",
    backgroundImage: "/card2 rider.png",
    backgroundAlt: "Rider in advanced helmet gear on a motorcycle",
  },
  {
    label: "VENTILATION",
    title: "Active Airflow System",
    description:
      "Strategically placed intake and exhaust ports channel cool air through the helmet while riding in extreme heat.",
    metric: "24",
    metricLabel: "Air Channels",
    backgroundImage: "/card3 helmet details.png",
    backgroundAlt: "Exploded technical view of helmet engineering",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const header = headerRef.current;
    if (!section || !header) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(".features-header-item", { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const headerItems = gsap.utils.toArray<HTMLElement>(".features-header-item");

      gsap.set(headerItems, { opacity: 0, y: 32 });

      gsap.to(headerItems, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: "top 85%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="technology"
      className="overflow-hidden border-t border-outline/10 bg-surface-container py-20 md:py-28"
    >
      <div className="mx-auto min-w-0 max-w-[1440px] px-4 md:px-16">
        <div
          ref={headerRef}
          className="mb-16 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="features-header-item mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Engineering
            </p>
            <h2 className="features-header-item font-display text-3xl uppercase tracking-[0.02em] text-on-surface md:text-5xl">
              Precision Built
            </h2>
          </div>
          <p className="features-header-item max-w-md font-body text-base leading-relaxed text-on-surface-variant">
            Every Steelbird helmet is a fusion of extreme off-road endurance and
            the security of professional-grade safety.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <EngineeringFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
