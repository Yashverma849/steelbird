import type { Metadata } from "next";
import NewsletterForm from "@/app/components/pages/NewsletterForm";
import PageHeader from "@/app/components/pages/PageHeader";
import Footer from "@/app/components/Footer";

const benefits = [
  "Early access to new helmet launches",
  "Riding safety tips from our engineering team",
  "Exclusive offers for subscribers only",
  "Event and dealer showcase updates",
];

export const metadata: Metadata = {
  title: "Newsletter | Steelbird",
  description: "Subscribe to the Steelbird newsletter for product launches, safety updates, and exclusive offers.",
};

export default function NewsletterPage() {
  return (
    <>
      <main className="w-full flex-1 pb-10 pt-24 md:pb-14 md:pt-28">
        <div className="mx-auto max-w-[720px] px-4 md:px-16">
          <PageHeader
            label="Newsletter"
            title="Stay In The Loop"
            description="Join riders who get Steelbird product drops, safety insights, and exclusive offers delivered to their inbox."
          />

          <div className="rounded-md border border-outline/20 bg-surface-container/30 p-6 md:p-8">
            <NewsletterForm />

            <ul className="mt-8 space-y-3 border-t border-outline/20 pt-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 font-body text-base text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-container" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-wider text-outline">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
