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
      <main>
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
