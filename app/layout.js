import Tobar from '@/components/Tobar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({  subsets: ['latin'] , weight: ['100','200','300','400','500','600','700','800','900']})

export const metadata = {
  title: 'PlumbSmith',
  description: 'Plumbing, Electrics, Heating, Bathrooms, Kitchens and Refurbs services ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Tobar/>
        <Header  />
        {children}
        <Footer />
      </body>
    </html>
  )
}
