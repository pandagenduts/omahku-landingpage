import {
  footerMenuAboutUs,
  footerMenuMore,
  footerMenuOurServices,
  socialMedias,
} from '@/lib/config'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa'
import { PiInstagramLogoFill } from 'react-icons/pi'
import { FaYoutube } from 'react-icons/fa'

export default function FooterBottom() {
  return (
    <section className='bg-mainGray py-10 md:pb-[128px] md:pt-[86px] text-mainWhite'>
      <div className='container flex flex-col justify-between md:flex-row md:gap-4'>
        <div className='mb-10 flex w-full max-w-[295px] flex-col gap-4 md:m-0 md:max-w-[195px] md:gap-6 lg:max-w-[295px]'>
          {/* <p>Logo</p> */}
          <Link href='/'>
            <Image
              src='/logo-white.svg'
              width={151}
              height={29}
              alt='Omahku Logo'
            />
          </Link>
          <p className='text-secGray1'>
            Jalan Nirwanasari Raya No. 18 A, Jatimulyo, Kota Semarang, Jawa
            Tengah, Indonesia
          </p>
          <a href='mailto:omahku@creative.com'>omahku@creative.com</a>
        </div>

        <div className='mb-10 flex w-full flex-col justify-between gap-12 md:m-0 md:max-w-[394px] md:flex-row md:gap-6 lg:max-w-[570px]'>
          <div>
            <h4 className='mb-6 text-secGray1'>Our Services</h4>
            <div className='flex flex-col gap-4'>
              {footerMenuOurServices?.map((menu) => (
                <Link href={menu.href} key={menu.title}>
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className='mb-6 text-secGray1'>About Us</h4>
            <div className='flex flex-col gap-4'>
              {footerMenuAboutUs?.map((menu) => (
                <Link href={menu.href} key={menu.title}>
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className='mb-6 text-secGray1'>More</h4>
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
          <h4 className='mb-4'>Follow Us</h4>
          <div className='flex gap-4 text-white'>
            {socialMedias?.map((social, index) => {
              let socialMediaIcon

              if (index === 0) {
                socialMediaIcon = <FaFacebook className='w-5 h-5' />
              } else if (index === 1) {
                socialMediaIcon = <PiInstagramLogoFill className='w-5 h-5' />
              } else if (index === 2) {
                socialMediaIcon = <FaYoutube className='w-5 h-5' />
              }
              return (
                <a href={social.href} target='_blank' rel='noopener noreferrer' key={index}>
                  {socialMediaIcon}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
