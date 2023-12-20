import { Button } from '../ui/button'

export default function Footer() {
  return (
    <footer className='flex'>
      <section className='container px-9 pb-9 pt-12 mb-[60px] md:mb-20'>
        <h2 className='mb-4 text-center'>
          Don’t Need to Wait Start Invest Your Future From Now.
        </h2>
        <p className='mb-12 text-center'>
          Contact us to schedule a consultation and learn how we can help you
          achieve your real estate investment goals.
        </p>
        <div className='flex justify-center gap-4'>
          <Button>Schedule Consultation</Button>
          <Button>Learn More</Button>
        </div>
      </section>

      <section>
        <div className=''></div>
        <div className=''></div>
        <div className=''></div>
      </section>
    </footer>
  )
}
