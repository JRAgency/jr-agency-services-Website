import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import ServiceCards from "@/components/home/ServiceCards";
import FreeDemo from "@/components/home/FreeDemo";
import FeaturedWork from "@/components/home/FeaturedWork";
import Portfolio from "@/components/home/Portfolio";
import ProcessSteps from "@/components/home/ProcessSteps";
import Testimonials from "@/components/home/Testimonials";
import AboutUs from "@/components/home/AboutUs";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServiceCards />
      <FreeDemo />
      <FeaturedWork />
      <Portfolio />
      <ProcessSteps />
      <Testimonials />
      <AboutUs />
      <FAQ />
      <FinalCTA />
    </>
  );
}
