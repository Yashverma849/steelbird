import type { Metadata } from "next";
import AboutUs from "@/app/components/AboutUs";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Steelbird",
  description:
    "Six decades of Indian helmet engineering — heritage, innovation, and rugged luxury protection.",
};

export default function AboutPage() {
  return (
    <>
      <main className="w-full flex-1 pt-20 md:pt-24">
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}
