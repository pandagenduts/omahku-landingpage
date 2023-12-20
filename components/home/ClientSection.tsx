import { homeClientsCompanyLogo } from '@/lib/config'
import Image from 'next/image'

export default function ClientSection() {
  return (
    <section className='container mb-[74px] md:mb-[124px]'>
      <p className='text-secGray2 mb-9 text-center text-base font-medium'>
        Trusted by Multinational Companies
      </p>
      <div className='flex flex-wrap justify-center gap-[40px] md:gap-[52px]'>
        {homeClientsCompanyLogo?.map((logo) => (
          <Image
            src={logo.src}
            alt={logo.company}
            width={logo.width}
            height={logo.height}
            className={`object-contain company-logo ${logo.company}`}
            key={logo.company}
          />
        ))}
      </div>
    </section>
  )
}
