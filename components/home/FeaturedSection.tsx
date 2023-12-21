'use client'

import Image from 'next/image'
import { FeaturedSectionProps, HouseCardProps } from '@/lib/types'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Location } from 'iconsax-react'
import { TbViewportWide } from 'react-icons/tb'
import { MdOutlineBed } from 'react-icons/md'
import { LiaBathSolid } from 'react-icons/lia'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

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

function HouseCard(props: HouseCardProps) {
  const { picture, price, description, model, location } = props.data

  return (
    <div className='max-w-[257px] overflow-hidden rounded-xl bg-white md:max-w-[354px]'>
      <div className='relative'>
        <Image
          src={picture}
          width='354'
          height='236'
          alt='featued-house-image'
          className='featured-image max-h-[236px] w-full object-cover'
        />
        <div className='absolute right-4 top-4 rounded-full bg-white px-4 py-2 font-medium text-mainBlue'>
          {model}
        </div>
      </div>
      <div className='px-5 py-4 md:px-6 md:py-5'>
        <span className='mb-1 flex items-center text-secGray2'>
          <Location size='16' color='#9496A5' className='mr-[6px]' /> {location}
        </span>
        <p className='mb-4 text-2xl font-bold'>{`$${price}.000`}</p>
        <div className='flex flex-wrap gap-y-3'>
          <span className='flex items-center gap-[6px]'>
            <TbViewportWide className='h-4 w-4' /> {description.size}
          </span>
          <Separator orientation='vertical' className='mx-[14.5px] h-auto' />
          <span className='flex items-center gap-[6px]'>
            <MdOutlineBed className='h-4 w-4' />{' '}
            {`${description.bedroom} Bedroom`}
          </span>
          <Separator orientation='vertical' className='mx-[14.5px] h-auto' />
          <span className='flex items-center gap-[6px]'>
            <LiaBathSolid className='h-4 w-4' />{' '}
            {`${description.bathroom} Bathroom`}
          </span>
        </div>
      </div>
    </div>
  )
}
