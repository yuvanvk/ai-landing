import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LogoTicker } from "@/components/logo-ticker";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
