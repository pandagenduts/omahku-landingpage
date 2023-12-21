import Pill from '../../ui/pill'
import TestiSlider from './TestiSlider'

export default function TestiSection() {
  return (
    <section
      className='mb-[98px] overflow-hidden md:mb-[73px]'
      id='testimonials'
    >
      <div className='container'>
        <div className='mb-[58px] flex flex-col items-end md:mb-[72px] md:flex-row md:gap-16'>
          <div className='mb-6 flex w-full flex-col items-center md:mb-0 md:items-start'>
            <Pill>Testimonials</Pill>
            <h2 className='text-center md:text-left'>
              What Our Beloved Customers Say About Omahku
            </h2>
          </div>
          <p className='w-full text-center text-secGray2 md:text-left'>
            Whether you&rsquo;re buying, selling, or investing in real estate,
            we have the expertise, resources, and dedication to help you achieve
            your goals. Contact us today to learn more about how we can help you
            with your real estate needs.
          </p>
        </div>

        <TestiSlider />
      </div>
    </section>
  )
}
