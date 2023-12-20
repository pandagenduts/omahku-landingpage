import { Button } from '../ui/button'

export default function Footer() {
  return (
    <footer className='flex'>
      <section className='mx-auto mb-[60px] w-full max-w-[1255px] bg-[url("/footer-bg.png")] bg-cover bg-center bg-no-repeat px-9 pb-[252px] lg:pb-9 pt-12 md:mb-20'>
        <div className='mx-auto w-full max-w-[618px]'>
          <h2 className='mb-4 text-center'>
            Don’t Need to Wait Start Invest Your Future From Now.
          </h2>
          <p className='mb-12 text-center'>
            Contact us to schedule a consultation and learn how we can help you
            achieve your real estate investment goals.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Button>Schedule Consultation</Button>
            <Button>Learn More</Button>
          </div>
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
