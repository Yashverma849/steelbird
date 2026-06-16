"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTAButton from "./CTAButton";

const statementText =
  "We Have The Engineering To Deliver Everything We Design";

const aboutLines = [
  "Forget what you know about ordinary helmets.",
  "We're building something new —",
  "powered by precision, safety, and six decades of Indian engineering.",
];

const pillars = [
  {
    id: "heritage",
    title: "Heritage",
    points: [
      "Six decades of helmet manufacturing in India",
      "Trusted by millions of riders nationwide",
      "From workshop precision to global standards",
      "Family-led engineering culture since 1964",
    ],
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "innovation",
    title: "Innovation",
    points: [
      "Multi-density EPS impact management",
      "Wind-tunnel tested aerodynamic shells",
      "Active airflow channels for endurance rides",
      "Modular systems built for real-world abuse",
    ],
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "craft",
    title: "Craft",
    points: [
      "Rugged luxury finishes and visor clarity",
      "ISI, ECE, and DOT certified production",
      "Hand-finished details on every line",
      "Designed for desert heat and mountain cold",
    ],
    image: "/multiple%20helmets.png",
  },
];

const progressSections = ["statement", "about", "visual", ...pillars.map((p) => p.id)];

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("statement");

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.set(".about-headline-word-inner", { y: "110%" });
      gsap.set(".about-hero-cta", { opacity: 0, x: 56 });

      gsap.to(".about-headline-word-inner", {
        y: "0%",
        duration: 0.85,
        stagger: 0.04,
        ease: "power4.out",
        delay: 0.15,
      });

      gsap.to(".about-hero-cta", {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.7,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        gsap.utils.toArray<HTMLElement>(".about-orb").forEach((orb, index) => {
          gsap.to(orb, {
            y: index % 2 === 0 ? 28 : -28,
            x: index % 2 === 0 ? 18 : -18,
            duration: 2.8 + index * 0.35,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }

      gsap.from(".about-label", {
        opacity: 0,
        letterSpacing: "0.45em",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 82%",
        },
      });

      gsap.from(".about-title", {
        yPercent: 110,
        duration: 1.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-title-wrap",
          start: "top 88%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".about-copy-line").forEach((line, index) => {
        gsap.from(line, {
          yPercent: 120,
          duration: 0.9,
          ease: "power3.out",
          delay: index * 0.08,
          scrollTrigger: {
            trigger: ".about-copy",
            start: "top 80%",
          },
        });
      });

      gsap.fromTo(
        ".about-visual-image",
        { scale: 1.18 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-visual",
            start: "top bottom",
            end: "center center",
            scrub: 1.2,
          },
        },
      );

      gsap.from(".about-visual-caption", {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-visual",
          start: "top 65%",
        },
      });

      section.querySelectorAll(".about-pillar").forEach((pillar, index) => {
        const title = pillar.querySelector(".about-pillar-title");
        const points = pillar.querySelectorAll(".about-pillar-point");
        const image = pillar.querySelector(".about-pillar-image");

        if (title) {
          gsap.from(title, {
            x: index % 2 === 0 ? -120 : 120,
            opacity: 0,
            duration: 1.05,
            ease: "power4.out",
            scrollTrigger: {
              trigger: pillar,
              start: "top 78%",
            },
          });
        }

        if (points.length) {
          gsap.from(points, {
            y: 36,
            opacity: 0,
            duration: 0.75,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: {
              trigger: pillar,
              start: "top 72%",
            },
          });
        }

        if (image) {
          gsap.from(image, {
            clipPath: "inset(100% 0% 0% 0%)",
            scale: 1.06,
            duration: 1.1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: image,
              start: "top 88%",
            },
          });
        }
      });

      progressSections.forEach((id) => {
        const el = section.querySelector(`[data-about-section="${id}"]`);
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,color-mix(in_srgb,var(--primary-container)_12%,transparent),transparent_45%)]" />

      <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex xl:left-8">
        {progressSections.map((id) => (
          <span
            key={id}
            className={`h-8 w-1 rounded-full transition-all duration-300 ${
              activeSection === id ? "bg-primary-container" : "bg-outline/30"
            }`}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 md:px-16">
        <div
          data-about-section="statement"
          className="about-statement grid gap-10 py-20 md:grid-cols-[1fr_auto] md:items-start md:gap-16 md:py-28"
        >
          <h2 className="font-display text-3xl uppercase leading-[1.05] tracking-[0.02em] text-on-surface sm:text-4xl md:text-6xl lg:text-7xl">
            {statementText.split(" ").map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="about-headline-word mr-[0.2em] inline-block overflow-hidden"
              >
                <span className="about-headline-word-inner inline-block">{word}</span>
              </span>
            ))}
          </h2>
          <div className="about-hero-cta shrink-0">
            <CTAButton href="/helmets" className="rounded-full px-8 py-3.5 text-sm">
              Explore Collection
            </CTAButton>
          </div>
        </div>

        <div data-about-section="about" className="about-intro pb-16 md:pb-24">
          <p className="about-label mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About Steelbird
          </p>
          <div className="about-title-wrap overflow-hidden">
            <h3 className="about-title font-display text-[clamp(4.5rem,18vw,11rem)] uppercase leading-[0.85] tracking-[0.02em] text-on-surface">
              About
            </h3>
          </div>
          <div className="about-copy mt-8 max-w-4xl space-y-1">
            {aboutLines.map((line) => (
              <div key={line} className="overflow-hidden">
                <p className="about-copy-line font-display text-2xl uppercase leading-[1.15] tracking-[0.02em] text-on-surface md:text-4xl lg:text-5xl">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        data-about-section="visual"
        className="about-visual relative h-[55vh] min-h-[360px] overflow-hidden md:h-[70vh]"
      >
        <div className="about-visual-image absolute inset-0 origin-center">
          <Image
            src="/multiple%20helmets.png"
            alt="Steelbird helmet collection"
            fill
            className="object-cover brightness-75 contrast-110 grayscale-[0.35]"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-background" />

        <div
          className="about-orb absolute left-[12%] top-[18%] h-28 w-28 rounded-full bg-primary-container/70 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="about-orb absolute right-[18%] top-[32%] h-40 w-40 rounded-full bg-primary/50 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="about-orb absolute bottom-[20%] left-[42%] h-24 w-24 rounded-full bg-primary-container/60 blur-2xl"
          aria-hidden="true"
        />
        <div
          className="about-orb absolute bottom-[28%] right-[8%] h-20 w-20 rounded-full bg-primary-container/80 blur-2xl"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1440px] px-4 pb-10 md:px-16">
            <p className="about-visual-caption font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Rugged Luxury — Est. 1964
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 md:px-16">
        {pillars.map((pillar) => (
          <article
            key={pillar.id}
            data-about-section={pillar.id}
            className="about-pillar grid gap-10 border-t border-outline/15 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-24"
          >
            <h4 className="about-pillar-title font-display text-5xl uppercase leading-none tracking-[0.02em] text-on-surface md:text-7xl lg:text-8xl">
              {pillar.title}
            </h4>

            <div>
              <ul className="space-y-4">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="about-pillar-point font-display text-lg uppercase leading-snug tracking-[0.02em] text-on-surface md:text-2xl"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="about-pillar-image relative mt-8 aspect-[16/10] overflow-hidden border border-outline/20 bg-surface-container">
                <Image
                  src={pillar.image}
                  alt={`${pillar.title} — Steelbird`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
