'use client'

import { useEffect, useLayoutEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { TestiCard } from './TestiCard'
import { homeTestimonials } from '@/lib/config'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'

export default function TestiSlider() {
  useEffect(() => {
    const defaultPrev = document.querySelector(
      '#testimonials #swiper-container .swiper-button-prev',
    )
    const defaultNext = document.querySelector(
      '#testimonials #swiper-container .swiper-button-next',
    )
    const customPrev = document.querySelector(
      '#testimonials #swiper-container .custom-navigation .prev',
    )
    const customNext = document.querySelector(
      '#testimonials #swiper-container .custom-navigation .next',
    )

    const clickPrev = () => {
      defaultPrev?.click()
    }

    const clickNext = () => {
      defaultNext?.click()
    }

    customPrev?.addEventListener('click', clickPrev)
    customNext?.addEventListener('click', clickNext)

    return () => {
      customPrev?.removeEventListener('click', clickPrev)
      customNext?.removeEventListener('click', clickNext)
    }
  }, [])

  return (
    <div id='swiper-container' className='relative'>
      <Swiper
        spaceBetween={36}
        breakpoints={{
          768: {
            slidesPerView: 'auto',
          },
        }}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
      >
        {homeTestimonials?.map((testi, index) => (
          <SwiperSlide key={index}>
            <TestiCard key={testi.name} data={testi} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='pointer-events-none custom-navigation absolute top-1/2 z-20 flex w-full -translate-y-1/2 justify-between md:hidden'>
        <div className='pointer-events-auto prev shadow-custShadow2 relative flex -translate-x-1/2 items-center justify-center rounded-full bg-mainWhite p-1'>
          <ArrowLeft2 size='16' color='#2d2d2d' />
        </div>
        <div className='pointer-events-auto next shadow-custShadow2 relative flex translate-x-1/2 items-center justify-center rounded-full bg-mainWhite p-1'>
          <ArrowRight2 size='16' color='#2d2d2d' />
        </div>
      </div>
    </div>
  )
}
