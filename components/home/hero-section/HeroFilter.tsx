import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Location, Home2, DollarCircle, SearchNormal1 } from 'iconsax-react'

export default function HeroFilter() {
  return (
    <div className='bg-mainWhite shadow-custShadow1 absolute -top-[43px] left-1/2 hidden w-full max-w-[1018px] -translate-x-1/2 items-center rounded-[6px] px-5 py-4 lg:flex'>
    <div className='flex flex-1 justify-between'>
      <div className='w-full max-w-[262px] px-4'>
        <div className='mb-[6px] flex items-center'>
          <Location
            size='16'
            color='#9496A5'
            variant='Outline'
            className='mr-[6px]'
          />
          <span className='text-secGray2'>Location</span>
        </div>
        <span className='text-xl font-medium'>Semarang, Indonesia</span>
      </div>

      <Separator className='h-[48px]' orientation='vertical' />

      <div className='w-full max-w-[262px] px-4'>
        <div className='mb-[6px] flex items-center'>
          <Home2
            size='16'
            color='#9496A5'
            variant='Outline'
            className='mr-[6px]'
          />
          <span className='text-secGray2'>Style</span>
        </div>
        <span className='text-xl font-medium'>Scandinavian</span>
      </div>

      <Separator className='h-[48px]' orientation='vertical' />

      <div className='mr-[6px] w-full max-w-[262px] px-4'>
        <div className='mb-[6px] flex items-center'>
          <DollarCircle
            size='16'
            color='#9496A5'
            variant='Outline'
            className='mr-[6px]'
          />
          <span className='text-secGray2'>Range Price</span>
        </div>
        <span className='text-xl font-medium'>$50.000 - $60.000</span>
      </div>
    </div>

    <Button>
      <SearchNormal1
        size='16'
        color='#FDFDFD'
        variant='Outline'
        className='mr-2'
      />
      Search
    </Button>
  </div>
  )
}