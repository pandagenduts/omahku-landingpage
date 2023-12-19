import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div
        id='web-wrapper'
        className={`${plusJakartaSans.className} ${inter.variable}`}
      >
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
