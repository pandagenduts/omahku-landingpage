import { Button } from "@/components/ui/button";

export default function FooterTop() {
  return (
    <section className='mx-auto mb-[60px] w-full max-w-[1255px] lg:rounded-2xl bg-[url("/footer-bg.png")] bg-cover bg-center bg-no-repeat px-9 pb-[252px] pt-12 md:mb-20 md:pb-9'>
      <div className='mx-auto w-full max-w-[618px]'>
        <h2 className='mb-4 text-center'>
          Don’t Need to Wait Start Invest Your Future From Now.
        </h2>
        <p className='mb-12 text-center'>
          Contact us to schedule a consultation and learn how we can help you
          achieve your real estate investment goals.
        </p>
        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
          <Button className='px-6'>
            <p>Schedule Consultation</p>
          </Button>
          <Button variant='secondary' className='px-6'>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
