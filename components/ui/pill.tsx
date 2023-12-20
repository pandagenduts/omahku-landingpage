export default function Pill(props: { children: React.ReactNode }) {
  return (
    <div className='bg-secBlue1 text-mainBlue mb-7 inline-block w-auto rounded-full px-6 py-4 text-sm font-medium'>
      {props.children}
    </div>
  )
}
