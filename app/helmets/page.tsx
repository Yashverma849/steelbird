import type { Metadata } from "next";
import ShopBanner from "@/app/components/shop/ShopBanner";
import ShopPageContent from "@/app/components/shop/ShopPageContent";
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
        <ShopPageContent products={helmetProducts} />
      </main>
      <ShopFooter />
    </>
  );
}
