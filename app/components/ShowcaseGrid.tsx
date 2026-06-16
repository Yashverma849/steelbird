"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const showcaseItems = [
  {
    title: "exclusive helmets",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80",
    span: "md:col-span-6 md:row-span-2",
  },
  {
    title: "helmets",
    image:
      "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-3 md:row-span-2",
  },
  {
    title: "accessories",
    image:
      "https://images.unsplash.com/photo-1620654510024-1b4f6e5bf86f?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-3 md:row-span-2",
  },
  {
    title: "riding gear",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1000&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "golves",
    image:
      "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&w=1000&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "shoes cover",
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1000&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
];

const enterStates = [
  { x: -220 },
  { x: 220 },
  { x: -200 },
  { x: 200 },
  { x: -180 },
  { x: 180 },
];

export default function ShowcaseGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const cards = gsap.utils.toArray<HTMLElement>(".showcase-card");
    const grid = section.querySelector(".showcase-grid");
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (!grid) return;

      const assembleTl = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          start: "top 75%",
          end: "top 20%",
          scrub: 1.4,
        },
      });

      cards.forEach((card, index) => {
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        const base = enterStates[index] ?? { x: index % 2 === 0 ? -180 : 180 };
        const stateX = isMobile ? (index % 2 === 0 ? -48 : 48) : base.x;

        assembleTl.fromTo(
          card,
          { opacity: 0, x: stateX, scale: 0.98 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            ease: "power3.out",
            duration: 1.2,
          },
          index * 0.14
        );
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden border-t border-outline/10 bg-background py-20 md:py-28">
      <div className="mx-auto min-w-0 max-w-[1440px] px-4 md:px-16">
        <div className="mb-10 md:mb-12">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Product Showcase
          </p>
          <h2 className="font-display text-3xl uppercase tracking-[0.02em] text-on-surface md:text-5xl">
            Built For Every Ride
          </h2>
        </div>

        <div className="showcase-grid grid min-w-0 auto-rows-[160px] gap-3 overflow-hidden sm:auto-rows-[180px] md:grid-cols-6 md:auto-rows-[120px]">
          {showcaseItems.map((item, index) => (
            <article
              key={item.title}
              data-speed={16 + (index % 3) * 8}
              className={`showcase-card group relative min-w-0 overflow-hidden border border-outline/20 bg-surface-container opacity-0 transition-transform duration-300 hover:border-primary/40 md:hover:scale-[1.02] ${item.span}`}
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.06]" style={{ backgroundImage: `url('${item.image}')` }} />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/35 to-background/15 transition-opacity duration-300 group-hover:from-background/70"
                aria-hidden="true"
              />
              <div className="relative z-10 h-full w-full">
                <p className="absolute bottom-4 left-4 right-4 rounded bg-background/45 px-3 py-1.5 font-display text-lg leading-none tracking-[0.04em] text-on-surface [text-shadow:0_2px_10px_rgba(0,0,0,0.8)] backdrop-blur-[1px] sm:text-xl md:text-2xl">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
