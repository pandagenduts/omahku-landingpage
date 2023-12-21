import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TestiCardProps } from "@/lib/types"

export function TestiCard(props: TestiCardProps) {
  const { name, picture, role, testimonial } = props.data

  return (
    <div className='flex h-full min-h-[268px] flex-col justify-between rounded-[20px] bg-secGray5 px-6 py-8 md:min-h-[304px] md:w-[544px] md:px-12 md:py-9'>
      <p className='mb-[26px] font-inter text-base font-medium text-[#3e3e3e] md:mb-12 md:text-xl'>
        {testimonial}
      </p>
      <div className='flex gap-4'>
        <Avatar className='h-12 w-12'>
          <AvatarImage src={picture} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <div className='flex flex-col gap-1'>
          <span className='text-secGray2'>{name}</span>
          <span className='font-medium'>{role}</span>
        </div>
      </div>
    </div>
  )
}