'use client'

import Link from 'next/link'
import { Button } from '../../ui/button'
import Image from 'next/image'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className='container flex items-center justify-between py-6'>
      <Link href='/'>
        <Image src='/logo-black.svg' width={151} height={29} alt='Omahku Logo' className='hidden md:block md:w-28 lg:w-[151px]' />
        <Image src='/logo-mobile.svg' width={24} height={24} alt='Omahku Logo' className= 'md:hidden' />
      </Link>

      <DesktopMenu />
      <MobileMenu />
      <div className='hidden gap-4 lg:flex'>
        <Button variant='ghost'>Log in</Button>
        <Button>Sign up</Button>
      </div>
    </header>
  )
}