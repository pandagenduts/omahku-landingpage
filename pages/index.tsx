import HeroBottom from "@/components/home/hero-section/HeroBottom";
import HeroTop from "@/components/home/hero-section/HeroTop";
import ClientSection from "@/components/home/ClientSection";
import ValueSection from "@/components/home/value-section/ValueSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import TestiSection from "@/components/home/TestiSection";

export default function Home() {
  return (
    <>
      <HeroTop />
      <HeroBottom />
      <ClientSection />
      <ValueSection />
      {/* <FeaturedSection />
      <TestiSection /> */}
    </>
  )
}
