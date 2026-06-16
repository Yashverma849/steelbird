"use client";

import { useState } from "react";
import { helmetBrands, helmetCategories } from "@/app/data/helmets";

export default function ShopSidebar() {
  const [activeCategory, setActiveCategory] = useState("Full Face");
  const [activeBrand, setActiveBrand] = useState("Steelbird");
  const [priceMax, setPriceMax] = useState(500);

  return (
    <aside className="w-full shrink-0 border-y border-outline/10 bg-surface-container lg:w-72 lg:self-start lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:border-y-0 lg:border-r">
      <div className="p-4 md:p-5 lg:max-h-full lg:overflow-y-auto">
        <section className="mb-6">
          <h2 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Categories
          </h2>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1 lg:gap-3">
            {helmetCategories.map((category) => (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`flex w-full items-center gap-2.5 rounded border px-2.5 py-2 text-left font-body text-sm transition-colors ${
                    activeCategory === category
                      ? "border-primary/50 bg-primary/10 text-on-surface"
                      : "border-outline/10 text-secondary hover:border-outline/30 hover:text-on-surface"
                  }`}
                >
                  {activeCategory === category && (
                    <span className="h-2 w-2 shrink-0 bg-primary-container" />
                  )}
                  {activeCategory !== category && <span className="w-2 shrink-0" />}
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Brands
          </h2>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1 lg:gap-3">
            {helmetBrands.map((brand) => (
              <li key={brand}>
                <button
                  type="button"
                  onClick={() => setActiveBrand(brand)}
                  className={`w-full rounded border px-2.5 py-2 text-left font-body text-sm transition-colors ${
                    activeBrand === brand
                      ? "border-primary/50 bg-primary/10 text-on-surface"
                      : "border-outline/10 text-secondary hover:border-outline/30 hover:text-on-surface"
                  }`}
                >
                  {brand}
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Filter by Price
          </h2>
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
    </aside>
  );
}
