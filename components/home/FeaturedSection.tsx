import Image from 'next/image'
import { FeaturedSectionProps, HouseCardProps } from '@/lib/types'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Location } from 'iconsax-react'
import { TbViewportWide } from 'react-icons/tb'
import { MdOutlineBed } from 'react-icons/md'
import { LiaBathSolid } from 'react-icons/lia'

export default function FeaturedSection(props: FeaturedSectionProps) {
  const { featuredHouses } = props

  return (
    <section className='mx-auto mb-[72px] flex w-full max-w-[1248px] flex-col items-center overflow-hidden bg-secGray5 px-[50px] py-12 md:mb-14 xl:rounded-xl'>
      <div className='w-full max-w-[930px]'>
        <h2 className='mb-4 text-center'>Featured House You Would Like</h2>
        <p className='mb-14 text-center text-secGray2'>
          Our agency has access to a wide range of property listings, including
          off-market properties and exclusive listings that may not be available
          to the general public.
        </p>
      </div>
      <div className='mb-8 flex gap-4'>
        {featuredHouses?.map((house, index) => (
          <HouseCard key={index} data={house} />
        ))}
      </div>
      <Button variant='secondary' className='border border-mainBlue'>
        See More
      </Button>
    </section>
  )
}

function HouseCard(props: HouseCardProps) {
  const { picture, price, description, model, location } = props.data

  return (
    <div className='overflow-hidden rounded-xl bg-white'>
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
        <div className='flex flex-wrap'>
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
