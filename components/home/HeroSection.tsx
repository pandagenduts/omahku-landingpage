import { Button } from '../ui/button'
import { Location } from 'iconsax-react'

export default function HeroSection() {
  return (
    <>
      <section className='container mb-[80px] pt-9 md:mb-[60px]'>
        <div className='mx-auto w-full max-w-[781px]'>
          <h1 className='mb-6 text-center'>
            One-Stop Destination for All Real Estate Needs
          </h1>
          <p className='text-secGray3 mb-11 text-center'>
            We have a wide range of properties available to suit any budget or
            lifestyle. Our agents will work with you to find the perfect home
            that meets all your needs and exceeds your expectations.
          </p>
          <div className='mx-auto flex w-full max-w-[462px] flex-col justify-center gap-4 sm:flex-row'>
            <Button className='w-full'>Get Started</Button>
            <Button
              variant='secondary'
              className='border-mainBlue w-full border'
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <section className='relative mx-auto h-[436px] w-full max-w-[1255px]'>
        <div className='h-full bg-[url("/hero-img.png")] bg-cover bg-center bg-no-repeat md:h-[475px]  xl:rounded-2xl' />

        <div className='absolute -top-5 px-5 py-4 bg-mainWhite shadow-custShadow1 rounded-[6px]'>

          <div className='flex items-center mb-[6px]'>
            <Location size='16' color='#9496A5' variant='Outline' className='mr-[6px]' />
            <span className='text-secGray2'>Location</span>
          </div>
          <span className='text-xl font-medium'>Semarang, Indonesia</span>
        </div>
        
      </section>
    </>
  )
}
