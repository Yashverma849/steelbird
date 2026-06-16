import type { Metadata } from "next";
import ContactPageContent from "@/app/components/pages/ContactPageContent";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Steelbird",
  description: "Get in touch with Steelbird customer care for product support, dealer enquiries, and feedback.",
};

export default function ContactPage() {
  return (
    <>
      <main className="w-full flex-1 pb-10 pt-24 md:pb-14 md:pt-28">
        <div className="mx-auto max-w-[1440px] px-4 md:px-16">
          <ContactPageContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
