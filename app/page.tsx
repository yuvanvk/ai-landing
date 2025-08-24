import { Features } from "@/components/features";
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
    </>
  );
}
