import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Pill from '../ui/pill'

export default function TestiSection() {
  return (
    <section className='container mb-[98px] md:mb-[73px]'>
      <div className='mb-[58px] flex flex-col items-end md:mb-[72px] md:flex-row md:gap-16'>
        <div className='mb-6 flex w-full flex-col items-center md:mb-0 md:items-start'>
          <Pill>Testimonials</Pill>
          <h2 className='text-center md:text-left'>
            What Our Beloved Customers Say About Omahku
          </h2>
        </div>
        <p className='w-full text-center text-secGray2 md:text-left'>
          Whether you&rsquo;re buying, selling, or investing in real estate, we
          have the expertise, resources, and dedication to help you achieve your
          goals. Contact us today to learn more about how we can help you with
          your real estate needs.
        </p>
      </div>

      <div className='flex gap-9'>
        <TestiCard />
        <TestiCard />
        <TestiCard />
      </div>
    </section>
  )
}

function TestiCard() {
  return (
    <div className='bg-secGray5 rounded-[20px] px-6 py-8 md:p-12'>
      <p className='mb-[26px] md:mb-[50px] text-[#3e3e3e] text-xl font-medium font-inter'>
        "Buying my first home was a dream come true. It was a great feeling to
        finally have a place that was truly my own, and I could make it into the
        perfect living space for me and my family.""
      </p>
      <div className='flex gap-4'>
        <Avatar className='h-12 w-12'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='flex flex-col gap-1'>
          <span className='text-secGray2'>Fujiwara Sugiono</span>
          <span className='font-medium'>Buyer House at Ungaran</span>
        </div>
      </div>
    </div>
  )
}
