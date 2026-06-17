"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTAButton from "./CTAButton";

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  handle: string;
  date: string;
  initials: string;
  accent: string;
};

const testimonials: Testimonial[] = [
  {
    id: "arjun",
    quote:
      "The Apex X1 took a high-speed slide on the Noida expressway and walked away unscathed. The shell and EPS did exactly what Steelbird promises.",
    author: "Arjun Mehta",
    handle: "@arjunrides",
    date: "Mar 12, 2025",
    initials: "AM",
    accent: "from-primary-container/80 to-primary/60",
  },
  {
    id: "priya",
    quote: "Lightweight, quiet at speed, and the visor clarity is unreal on night rides.",
    author: "Priya Nair",
    handle: "@priya_tours",
    date: "Feb 28, 2025",
    initials: "PN",
    accent: "from-outline/70 to-secondary/40",
  },
  {
    id: "rohan",
    quote:
      "Ignyte Modular V2 is my daily commute and weekend canyon helmet. Flip mechanism still feels tight after a year.",
    author: "Rohan Desai",
    handle: "@rohan_commute",
    date: "Jan 15, 2025",
    initials: "RD",
    accent: "from-primary/70 to-primary-container/50",
  },
  {
    id: "vikram",
    quote:
      "I've ridden DOT and ECE lids abroad. Steelbird matches the fit, finish, and ventilation of helmets costing twice as much.",
    author: "Vikram Singh",
    handle: "@vikram_adv",
    date: "Dec 08, 2024",
    initials: "VS",
    accent: "from-secondary/50 to-outline/60",
  },
  {
    id: "ananya",
    quote:
      "Customer care replaced my liner within 48 hours. That kind of support matters when you ride every day.",
    author: "Ananya Reddy",
    handle: "@ananya_track",
    date: "Nov 22, 2024",
    initials: "AR",
    accent: "from-primary-container/70 to-primary/50",
  },
  {
    id: "kabir",
    quote: "Desert heat tested. Airflow channels actually work above 40°C.",
    author: "Kabir Khan",
    handle: "@kabir_offroad",
    date: "Oct 03, 2024",
    initials: "KK",
    accent: "from-outline/60 to-primary-container/40",
  },
];

const columnOne = [testimonials[0], testimonials[2], testimonials[4]];
const columnTwo = [testimonials[1], testimonials[3], testimonials[5]];

function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="testimonial-card group relative shrink-0 rounded-xl border border-outline/20 bg-[#181a1f] p-5 transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40 hover:shadow-[0_0_0_1px_color-mix(in_srgb,var(--primary-container)_28%,transparent),0_16px_44px_rgb(0_0_0_/_0.45)] md:p-6 md:hover:-translate-y-1">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.accent} font-mono text-[11px] font-semibold text-on-surface`}
          >
            {item.initials}
          </div>
          <div>
            <p className="font-body text-sm font-semibold text-on-surface">{item.author}</p>
            <p className="font-body text-xs text-outline">{item.handle}</p>
          </div>
        </div>
        <span className="text-outline/70 transition-colors group-hover:text-primary">
          <IconX />
        </span>
      </div>

      <blockquote className="font-body text-[15px] leading-relaxed text-on-surface/90">
        {item.quote}
      </blockquote>

      <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-outline">{item.date}</p>

      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top right, color-mix(in srgb, var(--primary-container) 7%, transparent), transparent 60%)",
        }}
        aria-hidden="true"
      />
    </article>
  );
}

function ScrollingColumn({
  items,
  direction,
  className = "",
}: {
  items: Testimonial[];
  direction: "up" | "down";
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const pointerInsideRef = useRef(false);
  const userPausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const touchStartYRef = useRef(0);
  const touchStartTrackYRef = useRef(0);

  const loopItems = [...items, ...items];

  const clearResumeTimer = () => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const resumeTween = () => {
    tweenRef.current?.resume();
  };

  const pauseTween = () => {
    tweenRef.current?.pause();
  };

  const releaseInteraction = () => {
    pointerInsideRef.current = false;
    userPausedRef.current = false;
    clearResumeTimer();
    resumeTween();
  };

  const pauseForPointer = () => {
    pointerInsideRef.current = true;
    pauseTween();
  };

  const scheduleWheelIdleResume = () => {
    clearResumeTimer();
    resumeTimerRef.current = window.setTimeout(() => {
      resumeTimerRef.current = null;
      userPausedRef.current = false;
      if (!pointerInsideRef.current) {
        resumeTween();
      }
    }, 500);
  };

  const pauseForWheel = () => {
    userPausedRef.current = true;
    pauseTween();
    scheduleWheelIdleResume();
  };

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let tween: gsap.core.Tween | null = null;

    const getLoopHeight = () => track.scrollHeight / 2;

    const wrapY = (y: number) => {
      const loopHeight = getLoopHeight();
      if (loopHeight <= 0) return y;

      if (direction === "up") {
        while (y <= -loopHeight) y += loopHeight;
        while (y > 0) y -= loopHeight;
      } else {
        while (y >= 0) y -= loopHeight;
        while (y < -loopHeight) y += loopHeight;
      }

      return y;
    };

    const startLoop = () => {
      const loopHeight = getLoopHeight();
      if (loopHeight <= 0) return;

      const duration = loopHeight / 28;

      if (direction === "up") {
        gsap.set(track, { y: 0 });
        tween = gsap.to(track, {
          y: -loopHeight,
          duration,
          ease: "none",
          repeat: -1,
        });
      } else {
        gsap.set(track, { y: -loopHeight });
        tween = gsap.to(track, {
          y: 0,
          duration: duration * 1.08,
          ease: "none",
          repeat: -1,
        });
      }

      tweenRef.current = tween;
    };

    const frame = window.requestAnimationFrame(startLoop);

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 2) return;

      event.preventDefault();
      pauseForWheel();
      const currentY = gsap.getProperty(track, "y") as number;
      gsap.set(track, { y: wrapY(currentY - event.deltaY) });
    };

    const handleTouchStart = (event: TouchEvent) => {
      pauseForWheel();
      touchStartYRef.current = event.touches[0]?.clientY ?? 0;
      touchStartTrackYRef.current = gsap.getProperty(track, "y") as number;
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      pauseForWheel();
      const currentY = event.touches[0]?.clientY ?? touchStartYRef.current;
      const delta = currentY - touchStartYRef.current;
      gsap.set(track, {
        y: wrapY(touchStartTrackYRef.current + delta),
      });
    };

    const handleTouchEnd = () => {
      if (!pointerInsideRef.current) {
        releaseInteraction();
        return;
      }
      scheduleWheelIdleResume();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    container.addEventListener("touchcancel", handleTouchEnd, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      tween?.kill();
      tweenRef.current = null;
      clearResumeTimer();
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [direction, items]);

  return (
    <div
      ref={containerRef}
      className={`relative h-full overflow-hidden ${className}`}
      onPointerEnter={pauseForPointer}
      onPointerLeave={releaseInteraction}
      aria-label="Testimonials marquee. Scroll with wheel or drag to read."
    >
      <div ref={trackRef} className="flex flex-col gap-4 will-change-transform">
        {loopItems.map((item, index) => (
          <TestimonialCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(".testimonial-header-item", { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".testimonial-header-item", {
        opacity: 0,
        y: 24,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="overflow-hidden border-t border-outline/10 bg-[#0d0e10] py-20 md:py-28"
    >
      <div className="mx-auto min-w-0 max-w-[1440px] px-4 md:px-16">
        <div className="grid min-w-0 items-start gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[minmax(0,460px)_minmax(0,1fr)] xl:gap-20">
          <div className="min-w-0 lg:sticky lg:top-28 lg:pt-4">
            <p className="testimonial-header-item font-mono text-xs font-semibold uppercase tracking-[0.2em] text-outline">
              Community
            </p>
            <h2 className="testimonial-header-item mt-4 font-body text-2xl font-semibold leading-tight text-on-surface sm:text-3xl md:text-[2.5rem] md:leading-[1.15]">
              We believe in the power of riders who trust Steelbird
            </h2>
            <p className="testimonial-header-item mt-5 font-body text-base leading-relaxed text-secondary md:text-[17px]">
              Our mission is to engineer helmets that protect every journey. We listen to
              feedback from the community and keep improving fit, airflow, and impact
              performance with every generation.
            </p>
            <div className="testimonial-header-item mt-8">
              <CTAButton href="/faq" className="rounded-lg px-7 py-3 text-sm">
                Read More Testimonials
              </CTAButton>
            </div>
          </div>

          <div className="testimonial-marquee relative h-[520px] overflow-hidden sm:h-[600px] md:h-[680px]">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#0d0e10] via-[#0d0e10]/80 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#0d0e10] via-[#0d0e10]/80 to-transparent"
              aria-hidden="true"
            />

            <div className="grid h-full grid-cols-1 gap-5 sm:grid-cols-2">
              <ScrollingColumn items={columnOne} direction="up" />
              <ScrollingColumn items={columnTwo} direction="down" className="hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
