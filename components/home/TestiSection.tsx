import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Pill from '../ui/pill'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { homeTestimonials } from '@/lib/config'
import { TestiCard } from '@/lib/types'

export default function TestiSection() {
  return (
    <section className='container mb-[98px] md:mb-[73px]' id='testimonials'>
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

      <div id='swiper-container'>
        <Swiper
          spaceBetween={36}
          breakpoints={{
            768: {
              slidesPerView: 'auto',
            },
          }}
          slidesPerView={1}
        >
          {homeTestimonials?.map((testi, index) => (
            <SwiperSlide key={index}>
              <TestiCard key={testi.name} data={testi} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

function TestiCard(props: TestiCard) {
  const { name, picture, role, testimonial } = props.data

  return (
    <div className='flex h-full min-h-[268px] flex-col justify-between rounded-[20px] bg-secGray5 px-6 py-8 md:min-h-[304px] md:w-[544px] md:py-9 md:px-12'>
      <p className='font-inter text-base md:text-xl font-medium text-[#3e3e3e] mb-[26px] md:mb-12'>
        {testimonial}
      </p>
      <div className='flex gap-4'>
        <Avatar className='h-12 w-12'>
          <AvatarImage src={picture} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <div className='flex flex-col gap-1'>
          <span className='text-secGray2'>{name}</span>
          <span className='font-medium'>{role}</span>
        </div>
      </div>
    </div>
  )
}
