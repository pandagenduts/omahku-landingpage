import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu as MenuIcon } from 'lucide-react'
import { headerMenu } from '@/lib/config'

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className='h-6 w-6 lg:hidden' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <SheetHeader className='mb-8'>
          <SheetTitle>
          <Image src='/logo-black.svg' width={151} height={29} alt='Omahku Logo' className='w-28' />
          </SheetTitle>
        </SheetHeader>
        <div className='flex flex-1 flex-col'>
          <menu className='flex flex-1 flex-col gap-4'>
            {headerMenu?.map((menu) => (
              <Link href={menu.href} key={menu.title}>
                {menu.title}
              </Link>
            ))}
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
