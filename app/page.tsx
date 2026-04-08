import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import StatsBar from "@/components/home/StatsBar";
import ClientLogos from "@/components/home/ClientLogos";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import FeaturedWork from "@/components/home/FeaturedWork";
import ProcessSteps from "@/components/home/ProcessSteps";
import Testimonials from "@/components/home/Testimonials";
import FreeDemo from "@/components/home/FreeDemo";
import AboutUs from "@/components/home/AboutUs";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <StatsBar />
      <ClientLogos />
      <Services />
      <Portfolio />
      <FeaturedWork />
      <ProcessSteps />
      <Testimonials />
      <FreeDemo />
      <AboutUs />
      <FAQ />
    </>
  );
}
