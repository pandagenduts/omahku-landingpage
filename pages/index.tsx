import ClientSection from "@/components/home/ClientSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroBottom from "@/components/home/hero-section/HeroBottom";
import HeroTop from "@/components/home/hero-section/HeroTop";
import TestiSection from "@/components/home/TestiSection";
import ValueSection from "@/components/home/ValueSection";

export default function Home() {
  return (
    <>
      <HeroTop />
      <HeroBottom />
      <ClientSection />
      {/* <ValueSection />
      <FeaturedSection />
      <TestiSection /> */}
    </>
  )
}
