import HeroBottom from '@/components/home/hero-section/HeroBottom'
import HeroTop from '@/components/home/hero-section/HeroTop'
import ClientSection from '@/components/home/ClientSection'
import ValueSection from '@/components/home/ValueSection'
import FeaturedSection from '@/components/home/featured-section/FeaturedSection'
import TestiSection from '@/components/home/testi-section/TestiSection'
import { FeaturedHouse } from '@/lib/types'
import Head from 'next/head'

export default function Home(props: { featuredHouses: FeaturedHouse[] }) {
  const { featuredHouses } = props

  return (
    <>
      <Head>
        <meta property='og:image' content='https://localhost:3000/api/og' />
      </Head>
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
    props: { featuredHouses: featuredHouses},
  }
}
