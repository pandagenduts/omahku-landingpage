import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${plusJakartaSans.className} ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
