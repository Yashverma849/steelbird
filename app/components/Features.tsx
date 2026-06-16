 "use client";

 import { useEffect, useMemo, useRef, useState } from "react";

const features = [
  {
    label: "IMPACT RESISTANCE",
    title: "Multi-Density EPS Core",
    description:
      "Engineered shell geometry absorbs and disperses impact energy across multiple density layers for maximum protection.",
    metric: "98%",
    metricLabel: "Impact Absorption",
  },
  {
    label: "AERODYNAMICS",
    title: "Wind-Tunnel Tested",
    description:
      "Sculpted visor and shell profile reduce drag and buffeting at high speeds, keeping you stable through every turn.",
    metric: "12%",
    metricLabel: "Drag Reduction",
  },
  {
    label: "VENTILATION",
    title: "Active Airflow System",
    description:
      "Strategically placed intake and exhaust ports channel cool air through the helmet while riding in extreme heat.",
    metric: "24",
    metricLabel: "Air Channels",
  },
];

function MetricCountUp({ metric, durationMs = 1100 }: { metric: string; durationMs?: number }) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { target, suffix } = useMemo(() => {
    const m = metric.match(/^([\d.]+)(%?)$/);
    if (!m) return { target: 0, suffix: "" };
    const num = Number(m[1]);
    return { target: num, suffix: m[2] ?? "" };
  }, [metric]);

  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(target);
      return;
    }

    let started = false;
    let rafId = 0;

    const start = () => {
      if (started) return;
      started = true;

      const startTs = performance.now();

      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const tick = (now: number) => {
        const elapsed = now - startTs;
        const t = Math.min(1, elapsed / durationMs);
        const next = target * easeOutCubic(t);
        setValue(next);
        if (t < 1) rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) start();
      },
      { threshold: 0.35 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [durationMs, target]);

  const display =
    Number.isInteger(target) || suffix === "%"
      ? Math.round(value)
      : Math.round(value * 10) / 10;

  return (
    <p ref={ref} className="font-display text-3xl text-primary">
      {display}
      {suffix}
    </p>
  );
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="technology"
      className="border-t border-outline/10 bg-surface-container py-20 md:py-28"
    >
      <div
        className={[
          "mx-auto max-w-[1440px] px-4 md:px-16 transition-all duration-1000 ease-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        ].join(" ")}
      >
        <div className="mb-16 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Engineering
            </p>
            <h2 className="font-display text-3xl uppercase tracking-[0.02em] text-on-surface md:text-5xl">
              Precision Built
            </h2>
          </div>
          <p className="max-w-md font-body text-base leading-relaxed text-on-surface-variant">
            Every Steelbird helmet is a fusion of extreme off-road endurance and
            the security of professional-grade safety.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="ghost-border group flex flex-col gap-4 rounded-xl bg-surface-container-high p-6 transition-colors hover:border-primary/40 md:p-8"
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                {feature.label}
              </span>
              <h3 className="font-display text-xl uppercase tracking-wide text-on-surface md:text-2xl">
                {feature.title}
              </h3>
              <p className="flex-1 font-body text-sm leading-relaxed text-on-surface-variant">
                {feature.description}
              </p>
              <div className="border-t border-outline/10 pt-4">
                <MetricCountUp metric={feature.metric} />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-outline">
                  {feature.metricLabel}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
