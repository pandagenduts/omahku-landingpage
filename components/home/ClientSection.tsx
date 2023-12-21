import { homeClientsCompanyLogo } from '@/lib/config'
import Image from 'next/image'

export default function ClientSection() {
  return (
    <section className='container mb-[74px] md:mb-[124px]'>
      <p className='mb-9 hidden text-center text-sm font-medium text-secGray2 md:block md:text-base'>
        Trusted by Multinational Companies
      </p>
      <p className='mb-9 text-center text-sm font-medium text-secGray2 md:hidden md:text-base'>
        Trusted by
        <br /> Multinational Companies
      </p>
      <div className='flex flex-wrap justify-center gap-[40px] md:gap-[52px]'>
        {homeClientsCompanyLogo?.map((logo) => (
          <Image
            src={logo.src}
            alt={logo.company}
            width={logo.width}
            height={logo.height}
            className={`company-logo object-contain ${logo.company}`}
            key={logo.company}
          />
        ))}
      </div>
    </section>
  )
}
