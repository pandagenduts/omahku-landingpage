import { headerMenu } from "@/lib/config";
import Link from "next/link";

export default function DesktopMenu() {
  return (
    <nav className='hidden lg:block'>
    <menu className='flex gap-10'>
      {headerMenu?.map((menu) => <Link href={menu.href} key={menu.title}>{menu.title}</Link>)}
    </menu>
  </nav>
  )
}
