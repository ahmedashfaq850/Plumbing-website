import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Tobar = () => {
  return (
    <div className='w-full h-[50px] bg-[#394141] flex justify-between items-center px-[20px] sm:px-[40px] lg:px-[90px] py-[20px]'>
        {/* left section  */}
      <div className='flex items-center gap-2'>
        <Image src="/images/phone.svg" alt="phone icon" width="30" height="30"/>
        <Link className='text-white text-[15px]' href="tel:07961067894">07961 067894</Link>
      </div>
      {/* right section */}
      <div className='flex items-center gap-4'>
        <Link href="/">
            <Image src="/images/whatsapp.svg" alt="icon" width="23" height="23"/>
        </Link>
        <Link href="/">
            <Image src="/images/messenger.svg" alt="icon" width="23" height="23"/>
        </Link>
        <Link href="/">
            <Image src="/images/instagram.svg" alt="icon" width="30" height="30"/>
        </Link>
      </div>
    </div>
  )
}

export default Tobar
