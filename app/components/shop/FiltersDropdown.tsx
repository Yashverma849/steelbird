"use client";

import { useState } from "react";
import { helmetBrands, helmetCategories } from "@/app/data/helmets";

export default function FiltersDropdown() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Full Face");
  const [activeBrand, setActiveBrand] = useState("Steelbird");
  const [priceMax, setPriceMax] = useState(500);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Toggle filters"
        className="inline-flex items-center gap-2 rounded border border-outline/30 bg-surface-container px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-on-surface transition-colors hover:border-primary/50 hover:text-primary"
      >
        Filters
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-30 w-[20rem] rounded-lg border border-outline/20 bg-background/95 p-4 shadow-[0_12px_30px_rgb(0_0_0_/_0.5)] backdrop-blur-md">
          <section className="mb-5">
            <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {helmetCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded border px-2.5 py-1.5 font-body text-sm transition-colors ${
                    activeCategory === category
                      ? "border-primary/60 bg-primary/10 text-on-surface"
                      : "border-outline/15 text-secondary hover:text-on-surface"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          <section className="mb-5">
            <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Brands
            </h3>
            <div className="flex flex-wrap gap-2">
              {helmetBrands.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  onClick={() => setActiveBrand(brand)}
                  className={`rounded border px-2.5 py-1.5 font-body text-sm transition-colors ${
                    activeBrand === brand
                      ? "border-primary/60 bg-primary/10 text-on-surface"
                      : "border-outline/15 text-secondary hover:text-on-surface"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Filter by Price
            </h3>
            <input
              type="range"
              min={50}
              max={500}
              step={10}
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="shop-range w-full"
              aria-label="Maximum price"
            />
            <div className="mt-2 flex justify-between font-mono text-xs text-secondary">
              <span>$50</span>
              <span>${priceMax >= 500 ? "500+" : priceMax}</span>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
