import { homeStatisticsValues } from '@/lib/config'
import { ValueStatistics } from '@/lib/types'
import { Building3, StatusUp, Messages2 } from 'iconsax-react'

export default function ValueSection() {
  return (
    <section className='container mb-[81px] flex flex-col gap-[54px] md:gap-12 md:mb-[142px] md:flex-row'>
      <div className='flex-1 flex flex-col items-center md:items-start'>
        <div className='bg-secBlue1 text-mainBlue mb-7 inline-block w-auto rounded-full px-6 py-4 text-sm font-medium'>
          Why Choose Omahku
        </div>
        <h2 className='mb-11 text-center md:mb-[76px] md:text-left'>
          We are Committed to Providing Exceptional Service and Support to All
          Our Clients.
        </h2>
        <div className='flex w-full flex-col items-center justify-between gap-6 md:max-w-[513px] md:flex-row'>
          {homeStatisticsValues?.map((value) => (
            <Statistics number={value.number} text={value.text} />
          ))}
        </div>
      </div>

      <div className='flex flex-1 flex-col gap-6'>
        <div className='bg-secBlue2 flex items-start gap-4 rounded-[6px] px-6 py-3'>
          <div className='bg-secBlue1 rounded-full p-[10px]'>
            <Building3 size={26} color='#2276C5' variant='Bold' />
          </div>
          <div>
            <h3 className='mb-2'>Personalized Service</h3>
            <p className='text-secGray2'>
              We are committed to helping you find the right property that meets
              all your needs and exceeds your expectations.
            </p>
          </div>
        </div>

        <div className='bg-secBlue2 flex items-start gap-4 rounded-[6px] px-6 py-3'>
          <div className='bg-secBlue1 rounded-full p-[10px]'>
            <StatusUp size={26} color='#2276C5' variant='Bold' />
          </div>
          <div>
            <h3 className='mb-2'>Personalized Service</h3>
            <p className='text-secGray2'>
              We can provide valuable insights and guidance to help you make
              informed decisions when buying or selling a property.
            </p>
          </div>
        </div>

        <div className='bg-secBlue2 flex items-start gap-4 rounded-[6px] px-6 py-3'>
          <div className='bg-secBlue1 rounded-full p-[10px]'>
            <Messages2 size={26} color='#2276C5' variant='Bold' />
          </div>
          <div>
            <h3 className='mb-2'>Personalized Service</h3>
            <p className='text-secGray2'>
              We provide comprehensive support and guidance throughout the
              entire real estate process, from the initial consultation to the
              successful closing of your transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Statistics(props: ValueStatistics) {
  const { number, text } = props

  return (
    <div className='w-full max-w-[155px]'>
      <p className='mb-2 text-center text-[32px] font-bold leading-normal md:text-left'>
        {number}
        <span className='text-mainBlue text-[32px] leading-normal'>+</span>
      </p>
      <p className='text-secGray2 text-center text-base font-medium md:text-left'>
        {text}
      </p>
    </div>
  )
}