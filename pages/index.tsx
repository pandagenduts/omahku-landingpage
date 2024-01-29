import HeroBottom from '@/components/home/hero-section/HeroBottom'
import HeroTop from '@/components/home/hero-section/HeroTop'
import ClientSection from '@/components/home/ClientSection'
import ValueSection from '@/components/home/ValueSection'
import FeaturedSection from '@/components/home/featured-section/FeaturedSection'
import TestiSection from '@/components/home/testi-section/TestiSection'
import { featuredHouses } from '@/lib/config'
import Head from 'next/head'
import { siteConfig } from '@/lib/config'

export default function Home() {
  const {ogImage, siteTitle, description} = siteConfig

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name='description' content={description} />
        <meta property="og:image:alt" content={description} />
        <meta property='og:image' content={ogImage} />
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
