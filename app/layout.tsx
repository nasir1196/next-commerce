import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import TopLoading from './components/TopLoading'


const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: 'Next-Commerce',
  description: 'Biggest E-commerce in Bangladesh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <div className='flex flex-col min-h-screen'>
          <TopLoading />
          <Navbar />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
