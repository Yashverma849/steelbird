import type { Metadata } from "next";
import FaqPageContent from "@/app/components/pages/FaqPageContent";
import Footer from "@/app/components/Footer";
import { faqItems } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "FAQ | Steelbird",
  description: "Frequently asked questions about Steelbird helmets — sizing, certification, warranty, and care.",
};

export default function FaqPage() {
  return (
    <>
      <main className="w-full flex-1 pb-10 pt-24 md:pb-14 md:pt-28">
        <div className="mx-auto max-w-[900px] px-4 md:px-16">
          <FaqPageContent items={faqItems} />
        </div>
      </main>
      <Footer />
    </>
  );
}
