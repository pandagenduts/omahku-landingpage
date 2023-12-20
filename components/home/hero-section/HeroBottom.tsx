import HeroFilter from './HeroFilter'

export default function HeroBottom() {
  return (
    <section className='relative mx-auto h-[436px] w-full max-w-[1255px]'>
      <div className='h-full bg-[url("/hero-img.png")] bg-cover bg-center bg-no-repeat md:h-[475px]  xl:rounded-2xl'>
        <div className='bg-custGradient1 h-full w-full lg:hidden' />
      </div>

      <HeroFilter />
    </section>
  )
}
