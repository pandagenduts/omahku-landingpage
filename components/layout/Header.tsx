'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex justify-between container'>
      <p>Logo</p>
      <Menu />
      <div>
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </header>
  )
}

function Menu() {
  const menus = [
    { title: 'Buy House', href: '/' },
    { title: 'Rent Apartment', href: '/' },
    { title: 'Sell Properties', href: '/' },
    { title: 'News & Article', href: '/' },
    { title: 'About Us', href: '/' },
  ]

  return (
    <nav>
      <menu className='flex gap-10'>
        {menus?.map((menu) => <Link href={menu.href}>{menu.title}</Link>)}
      </menu>
    </nav>
  )
}
