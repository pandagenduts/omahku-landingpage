import {
  footerMenuAboutUs,
  footerMenuMore,
  footerMenuOurServices,
} from '@/lib/config'
import Link from 'next/link'

export default function FooterBottom() {
  return (
    <section className='bg-mainGray text-mainWhite pb-[128px] pt-[86px]'>
      <div className='container flex flex-col justify-between md:flex-row md:gap-4'>
        <div className='flex flex-col gap-4 md:gap-6 mb-10 w-full max-w-[295px] md:m-0 md:max-w-[195px] lg:max-w-[295px]'>
          <p>Logo</p>
          <p className='text-secGray1'>
            Jalan Nirwanasari Raya No. 18 A, Jatimulyo, Kota Semarang, Jawa
            Tengah, Indonesia
          </p>
          <a href='mailto:omahku@creative.com'>omahku@creative.com</a>
        </div>

        <div className='mb-10 flex w-full flex-col justify-between gap-12 md:gap-6 md:m-0 md:max-w-[394px] md:flex-row lg:max-w-[570px]'>
          <div>
            <h4 className='text-secGray1 mb-6'>Our Services</h4>
            <div className='flex flex-col gap-4'>
              {footerMenuOurServices?.map((menu) => (
                <Link href={menu.href} key={menu.title}>
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className='text-secGray1 mb-6'>About Us</h4>
            <div className='flex flex-col gap-4'>
              {footerMenuAboutUs?.map((menu) => (
                <Link href={menu.href} key={menu.title}>
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className='text-secGray1 mb-6'>More</h4>
            <div className='flex flex-col gap-4'>
              {footerMenuMore?.map((menu) => (
                <Link href={menu.href} key={menu.title}>
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full max-w-[120px] lg:max-w-[158px]'>
          <h4>Follow Us</h4>
        </div>
      </div>
    </section>
  )
}
