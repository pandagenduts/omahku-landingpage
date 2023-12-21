'use client'

import { FeaturedSectionProps } from '@/lib/types'
import { Button } from '../../ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { HouseCard } from './HouseCard'

export default function FeaturedSection(props: FeaturedSectionProps) {
  const { featuredHouses } = props

  return (
    <section
      id='featured'
      className='mx-auto mb-[72px] flex w-full max-w-[1248px] flex-col items-center overflow-hidden bg-secGray5 px-5 py-12 md:mb-14 md:px-[50px] xl:rounded-xl'
    >
      <div className='w-full max-w-[930px]'>
        <h2 className='max-w-[220px] mx-auto min-[500px]:max-w-none mb-4 text-center'>Featured House You Would Like</h2>
        <p className='mb-14 text-center text-secGray2'>
          Our agency has access to a wide range of property listings, including
          off-market properties and exclusive listings that may not be available
          to the general public.
        </p>
      </div>

      <div id='swiper-container' className='mb-8 w-full'>
        <Swiper
          spaceBetween={20}
          breakpoints={{
            768: {
              spaceBetween: 43,
            },
          }}
          slidesPerView='auto'
        >
          {featuredHouses?.map((house, index) => (
            <SwiperSlide key={index}>
              <HouseCard key={index} data={house} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Button variant='secondary' className='w-full md:w-auto border border-mainBlue h-[54px] px-11'>
        See More
      </Button>
    </section>
  )
}
