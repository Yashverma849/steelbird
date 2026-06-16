import type { Metadata } from "next";
import FilterTabs from "@/app/components/shop/FilterTabs";
import FiltersDropdown from "@/app/components/shop/FiltersDropdown";
import ProductCard from "@/app/components/shop/ProductCard";
import ShopBanner from "@/app/components/shop/ShopBanner";
import ShopFooter from "@/app/components/shop/ShopFooter";
import { helmetProducts } from "@/app/data/helmets";

export const metadata: Metadata = {
  title: "Shop Helmets | Steelbird",
  description: "Browse Steelbird helmet systems — motocross, full face, modular, and more.",
};

export default function HelmetsPage() {
  return (
    <>
      <ShopBanner />
      <main className="relative z-10 w-full flex-1 bg-background pb-10 pt-24 md:pb-14 md:pt-28">
        <div className="mx-auto min-w-0 w-full max-w-[1600px] px-4 md:px-10 lg:px-12">
          <h1 className="mb-6 font-display text-3xl uppercase tracking-[0.02em] text-on-surface md:text-5xl">
            Buy Your Protection Bird
          </h1>

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <FilterTabs />
            <div className="md:shrink-0 md:self-start">
              <FiltersDropdown />
            </div>
          </div>

          <div className="mx-auto grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {helmetProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <ShopFooter />
    </>
  );
}
