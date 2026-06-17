"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

export default function MetricCountUp({
  metric,
  durationMs = 1100,
  active = false,
}: {
  metric: string;
  durationMs?: number;
  active?: boolean;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { target, suffix } = useMemo(() => {
    const m = metric.match(/^([\d.]+)(%?)$/);
    if (!m) return { target: 0, suffix: "" };
    const num = Number(m[1]);
    return { target: num, suffix: m[2] ?? "" };
  }, [metric]);

  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useLayoutEffect(() => {
    startedRef.current = false;
    setValue(0);
  }, [metric]);

  useEffect(() => {
    if (!active) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }

    if (startedRef.current) return;
    startedRef.current = true;

    const startTs = performance.now();
    let rafId = 0;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = now - startTs;
      const t = Math.min(1, elapsed / durationMs);
      setValue(target * easeOutCubic(t));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [active, durationMs, target]);

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
