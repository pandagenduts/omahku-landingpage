'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { Menu as MenuIcon } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const menus = [
  { title: 'Buy House', href: '/' },
  { title: 'Rent Apartment', href: '/' },
  { title: 'Sell Properties', href: '/' },
  { title: 'News & Article', href: '/' },
  { title: 'About Us', href: '/' },
]

export default function Header() {
  return (
    <header className='container flex items-center justify-between py-6'>
      <p>Logo</p>
      <DesktopMenu />
      <MobileMenu />
      <div className='hidden gap-4 lg:flex'>
        <Button variant='ghost'>Log in</Button>
        <Button>Sign up</Button>
      </div>
      {/* <AuthMenu /> */}
    </header>
  )
}

function DesktopMenu() {
  return (
    <nav className='hidden lg:block'>
      <menu className='flex gap-10'>
        {menus?.map((menu) => <Link href={menu.href} key={menu.title}>{menu.title}</Link>)}
      </menu>
    </nav>
  )
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className='h-6 w-6 lg:hidden' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <SheetHeader className='mb-8'>
          <SheetTitle>Omahku</SheetTitle>
        </SheetHeader>
        <div className='flex flex-1 flex-col'>
          <menu className='flex flex-1 flex-col gap-4'>
            {menus?.map((menu) => <Link href={menu.href} key={menu.title}>{menu.title}</Link>)}
          </menu>
          <div className='flex flex-col gap-4'>
            <Button variant='ghost'>Log in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function AuthMenu(props: { parentClassName?: string }) {
  const { parentClassName } = props

  return (
    <div className={cn('flex gap-4', parentClassName)}>
      <Button variant='ghost'>Log in</Button>
      <Button>Sign up</Button>
    </div>
  )
}
