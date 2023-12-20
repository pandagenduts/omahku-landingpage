import { Button } from '../ui/button'

export default function FeaturedSection() {
  return (
    <section className='bg-secGray5 mx-auto mb-[72px] flex w-full max-w-[1248px] flex-col items-center px-[50px] py-12 md:mb-14 xl:rounded-xl'>
      <div className='w-full max-w-[930px]'>
        <h2 className='mb-4 text-center'>Featured House You Would Like</h2>
        <p className='text-secGray2 mb-14 text-center'>
          Our agency has access to a wide range of property listings, including
          off-market properties and exclusive listings that may not be available
          to the general public.
        </p>
      </div>
      <div className='mb-8'></div>
      <Button variant='secondary' className='border-mainBlue border'>
        See More
      </Button>
    </section>
  )
}
