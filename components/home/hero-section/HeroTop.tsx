import { Button } from "@/components/ui/button";

export default function HeroTop() {
  return (
    <section className='container mb-[80px] pt-9 md:mb-[103px]'>
      <div className='mx-auto w-full max-w-[781px]'>
        <h1 className='mb-6 text-center'>
          One-Stop Destination for All Real Estate Needs
        </h1>
        <p className='text-secGray3 mb-11 text-center'>
          We have a wide range of properties available to suit any budget or
          lifestyle. Our agents will work with you to find the perfect home that
          meets all your needs and exceeds your expectations.
        </p>
        <div className='mx-auto flex w-full max-w-[462px] flex-col justify-center gap-4 sm:flex-row'>
          <Button className='w-full h-[54px]'>Get Started</Button>
          <Button variant='secondary' className='border-mainBlue w-full border h-[54px]'>
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
