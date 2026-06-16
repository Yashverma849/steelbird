"use client";

import { useEffect, useRef, useState } from "react";

const specs = [
  { attribute: "Shell Material", value: "ABS / Carbon Composite" },
  { attribute: "Weight", value: "1,250g ± 50g" },
  { attribute: "Visor", value: "Anti-Scratch, UV Protected" },
  { attribute: "Retention", value: "Double-D Ring System" },
  { attribute: "Interior", value: "Removable, Washable Liner" },
  { attribute: "Certification", value: "DOT / ECE / ISI" },
];

const descriptionLines = [
  "Steelbird helmets undergo rigorous impact testing,",
  "penetration resistance evaluation, and retention",
  "system stress tests to meet the world's most",
  "demanding safety certifications.",
];

export default function Safety() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="safety" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-16">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Safety Standards
            </p>
            <h2 className="mb-6 font-display text-3xl uppercase tracking-[0.02em] text-on-surface md:text-5xl">
              Indestructible
              <br />
              by Design
            </h2>
            <div className="space-y-1 font-body text-base leading-relaxed text-on-surface-variant">
              {descriptionLines.map((line, index) => (
                <div key={line} className="overflow-hidden">
                  <p
                    className="transition-all duration-700 ease-out"
                    style={{
                      transitionDelay: `${index * 140}ms`,
                      opacity: revealed ? 1 : 0,
                      transform: revealed ? "translateY(0)" : "translateY(120%)",
                    }}
                  >
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <dl className="flex flex-col gap-0">
            {specs.map((spec, index) => (
              <div
                key={spec.attribute}
                className="flex items-baseline gap-4 border-b border-outline/10 py-4"
              >
                <dt
                  className="shrink-0 font-mono text-xs font-semibold uppercase tracking-wider text-outline transition-all duration-300 ease-out"
                  style={{
                    transitionDelay: `${index * 210}ms`,
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "translateX(0)" : "translateX(-16px)",
                  }}
                >
                  {spec.attribute}
                </dt>
                <dd className="flex-1" aria-hidden="true">
                  <div className="h-px w-full origin-left border-b border-dotted border-outline/20" />
                  <div
                    className="relative -mt-px h-px origin-left border-b border-dotted border-primary/70 transition-transform duration-500 ease-out"
                    style={{
                      transitionDelay: `${index * 210 + 120}ms`,
                      transform: revealed ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </dd>
                <dd
                  className="shrink-0 font-body text-sm text-on-surface transition-all duration-200 ease-out"
                  style={{
                    transitionDelay: `${index * 210 + 280}ms`,
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "translateX(0)" : "translateX(8px)",
                  }}
                >
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
