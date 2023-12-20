import { Button } from '../ui/button'

export default function FeaturedSection() {
  return (
    <section className='container'>
      <div className='bg-secGray5 flex flex-col items-center rounded-xl py-12 px-[50px]'>
        <div className='w-full max-w-[930px]'>
          <h2 className='mb-4 text-center'>Featured House You Would Like</h2>
          <p className='text-secGray2 mb-14 text-center'>
            Our agency has access to a wide range of property listings,
            including off-market properties and exclusive listings that may not
            be available to the general public.
          </p>
        </div>
        <div className='mb-8'>

        </div>
        <Button variant='secondary' className='border-mainBlue border'>
          See More
        </Button>
      </div>
    </section>
  )
}
