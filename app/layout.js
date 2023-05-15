import Tobar from '@/components/Tobar'
import './globals.css'
import { Outfit } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'PlumbSmith',
  description: 'Plumbing, Electrics, Heating, Bathrooms, Kitchens and Refurbs services ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Tobar/>
        <Header  />
        {children}
        <Footer />
      </body>
    </html>
  )
}
