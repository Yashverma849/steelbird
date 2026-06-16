import Hero from "./components/Hero";
import Features from "./components/Features";
import ShowcaseGrid from "./components/ShowcaseGrid";
import Safety from "./components/Safety";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="w-full min-w-0 overflow-x-clip">
        <Hero />
        <Features />
        <ShowcaseGrid />
        <Safety />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
