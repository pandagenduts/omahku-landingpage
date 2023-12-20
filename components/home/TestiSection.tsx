import Pill from '../ui/pill'

export default function TestiSection() {
  return (
    <section className='container mb-[98px] md:mb-[73px]'>
      <div className='flex flex-col items-end md:flex-row md:gap-16'>
        <div className='mb-6 flex w-full flex-col items-center md:mb-0 md:items-start'>
          <Pill>Testimonials</Pill>
          <h2 className='text-center md:text-left'>
            What Our Beloved Customers Say About Omahku
          </h2>
        </div>
        <p className='text-secGray2 w-full text-center md:text-left'>
          Whether you&rsquo;re buying, selling, or investing in real estate, we
          have the expertise, resources, and dedication to help you achieve your
          goals. Contact us today to learn more about how we can help you with
          your real estate needs.
        </p>
      </div>
    </section>
  )
}
