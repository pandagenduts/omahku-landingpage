import Image from "next/image"
import { Location } from 'iconsax-react'
import { TbViewportWide } from 'react-icons/tb'
import { MdOutlineBed } from 'react-icons/md'
import { LiaBathSolid } from 'react-icons/lia'
import { HouseCardProps } from "@/lib/types"
import { Separator } from "@/components/ui/separator"

export function HouseCard(props: HouseCardProps) {
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