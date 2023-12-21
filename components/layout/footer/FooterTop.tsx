import { Button } from '@/components/ui/button'

export default function FooterTop() {
  return (
    <section className='mx-auto mb-[60px] w-full max-w-[1255px] bg-[url("/footer-bg.png")] bg-cover bg-center bg-no-repeat px-5 pb-[252px] pt-[74px] md:mb-20 md:px-9 md:pb-9 md:pt-12 lg:rounded-2xl'>
      <div className='mx-auto w-full max-w-[618px]'>
        <h2 className='mb-4 text-center'>
          Don’t Need to Wait Start Invest Your Future From Now.
        </h2>
        <p className='mb-12 text-center text-secGray2'>
          Contact us to schedule a consultation and learn how we can help you
          achieve your real estate investment goals.
        </p>
        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
          <Button className='h-[54px] px-6'>
            <p>Schedule Consultation</p>
          </Button>
          <Button variant='secondary' className='h-[54px] px-6'>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
