"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import FilterTabs from "@/app/components/shop/FilterTabs";
import FiltersDropdown from "@/app/components/shop/FiltersDropdown";
import ProductCard from "@/app/components/shop/ProductCard";
import type { HelmetProduct } from "@/app/data/helmets";

type ShopPageContentProps = {
  products: HelmetProduct[];
};

export default function ShopPageContent({ products }: ShopPageContentProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const textItems = root.querySelectorAll<HTMLElement>(".shop-text-item");
    const toolbarItems = root.querySelectorAll<HTMLElement>(".shop-toolbar-item");
    const cards = root.querySelectorAll<HTMLElement>(".shop-product-card");

    gsap.set(textItems, { opacity: 0, y: 36 });
    gsap.set(toolbarItems, { opacity: 0, y: 24 });
    gsap.set(cards, {
      opacity: 0,
      y: 40,
      x: (index) => (index % 2 === 0 ? -72 : 72),
    });

    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    timeline.to(textItems, {
      opacity: 1,
      y: 0,
      duration: 0.95,
      stagger: 0.12,
    });

    timeline.to(
      toolbarItems,
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.1,
      },
      "-=0.55",
    );

    timeline.to(
      cards,
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.9,
        stagger: 0.14,
        clearProps: "transform",
      },
      "-=0.45",
    );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div ref={rootRef} className="mx-auto min-w-0 w-full max-w-[1600px] px-4 md:px-10 lg:px-12">
      <h1 className="shop-text-item mb-6 font-display text-3xl uppercase tracking-[0.02em] text-on-surface md:text-5xl">
        Buy Your Protection Bird
      </h1>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="shop-toolbar-item">
          <FilterTabs />
        </div>
        <div className="shop-toolbar-item md:shrink-0 md:self-start">
          <FiltersDropdown />
        </div>
      </div>

      <div className="shop-product-grid mx-auto grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
