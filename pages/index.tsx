import HeroBottom from "@/components/home/hero-section/HeroBottom";
import HeroTop from "@/components/home/hero-section/HeroTop";
import ClientSection from "@/components/home/ClientSection";
import ValueSection from "@/components/home/ValueSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import TestiSection from "@/components/home/testi-section/TestiSection";

export default function Home({featuredHouses}: any) {
  return (
    <>
      <HeroTop />
      <HeroBottom />
      <ClientSection />
      <ValueSection />
      <FeaturedSection featuredHouses={featuredHouses} />
      <TestiSection />
    </>
  )
}

export async function getStaticProps() {
  const req = await fetch(
    'https://mocki.io/v1/9d14be61-2ef1-4b2d-9246-3bf36e60687b',
  )
  const featuredHouses = await req.json()

  return {
    props: { featuredHouses },
  }
}