 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { HelmetProduct } from "@/app/data/helmets";
import CTAButton from "@/app/components/CTAButton";

function HelmetPlaceholder({ accent }: { accent: string }) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      style={{
        background: `radial-gradient(ellipse at 50% 60%, ${accent}22 0%, transparent 70%), linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)`,
      }}
    >
      <svg
        viewBox="0 0 120 100"
        className="h-40 w-48 opacity-90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M60 12C38 12 22 28 20 50c-2 18 8 34 24 40 4-8 10-14 16-14s12 6 16 14c16-6 26-22 24-40-2-22-18-38-40-38z"
          fill="#353534"
          stroke="#a88a7f"
          strokeWidth="1.5"
        />
        <path
          d="M36 52c0-14 10-24 24-24s24 10 24 24"
          stroke={accent}
          strokeWidth="2"
          fill="none"
        />
        <rect x="44" y="58" width="32" height="8" rx="1" fill="#474746" />
      </svg>
    </div>
  );
}

const accentById: Record<string, string> = {
  "apex-x1": "#f26422",
  "modular-v2": "#6b7280",
  "urban-jet": "#f26422",
  "mx-pro": "#f26422",
};

export default function ProductCard({ product }: { product: HelmetProduct }) {
  const accent = accentById[product.id] ?? "#f26422";
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const selectedImage = product.imageUrls?.[selectedVariant];

  useEffect(() => {
    setSelectedVariant(0);
  }, [product.id]);

  useEffect(() => {
    if (!isHovered || !product.imageUrls || product.imageUrls.length < 2) return;

    const intervalId = setInterval(() => {
      setSelectedVariant((prev) => (prev + 1) % product.imageUrls!.length);
    }, 900);

    return () => clearInterval(intervalId);
  }, [isHovered, product.imageUrls]);

  return (
    <article
      className="ghost-border group flex flex-col overflow-hidden rounded-xl bg-surface-container transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:bg-surface-container-high"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSelectedVariant(0);
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {product.badge && (
          <span
            className={`absolute top-4 left-4 z-10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${
              product.badge === "new"
                ? "bg-primary-container text-on-primary-container"
                : "bg-on-surface text-background"
            }`}
          >
            {product.badge === "new" ? "New Arrival" : "Limited Edition"}
          </span>
        )}

        {selectedImage ? (
          <Image
            src={selectedImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <HelmetPlaceholder accent={accent} />
        )}

        {product.has360View && (
          <span className="absolute right-4 bottom-4 flex items-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-on-surface">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            360 View
          </span>
        )}

        {product.colors && (
          <div className="absolute bottom-4 left-4 flex gap-2">
            {product.colors.map((color, index) => (
              <button
                key={color}
                type="button"
                className={`h-4 w-4 rounded-full border transition-transform ${
                  selectedVariant === index
                    ? "scale-110 border-on-surface"
                    : "border-on-surface/20"
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Show ${product.name} color variant`}
                onClick={() => setSelectedVariant(index)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg uppercase tracking-wide text-on-surface">
            {product.name}
          </h3>
          <p className="shrink-0 font-display text-lg text-primary-container">
            ${product.price}
          </p>
        </div>

        <p className="line-clamp-2 flex-1 font-body text-sm leading-relaxed text-secondary">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-4 border-t border-outline/10 pt-4">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-outline">
            {product.certification}
          </span>
          <CTAButton
            variant="ghost"
            className="min-h-0 px-2 py-1 text-[11px] text-primary-container"
          >
            Add to System →
          </CTAButton>
        </div>
      </div>
    </article>
  );
}
