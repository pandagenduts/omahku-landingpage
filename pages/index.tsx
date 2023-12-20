import ClientSection from "@/components/home/ClientSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import TestiSection from "@/components/home/TestiSection";
import ValueSection from "@/components/home/ValueSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientSection />
      <ValueSection />
      <FeaturedSection />
      <TestiSection />
    </>
  )
}
