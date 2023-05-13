import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Main Footer */}
            <footer class="bg-[#1B4845] w-full">
                <div class="container mx-auto px-4 ">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-7 py-4 ">
                        {/* left side */}
                        <div>
                            <h1 className='text-[#2AB237] font-bold text-2xl mb-[10px] md:mb-[30px]'>Our Services</h1>
                            <ul className='text-white'>
                                <li>Plumbing</li>
                                <li>Electrics</li>
                                <li>Heating</li>
                                <li>Bathrooms</li>
                                <li>Kitchens</li>
                                <li>Refurbs</li>
                            </ul>
                        </div>
                        {/* middle */}
                        <div>
                            <h1 className='text-[#2AB237] font-bold text-2xl mb-[30px]'>Our Locations</h1>
                            <div className='flex gap-6 text-white'>
                                <ul>
                                    <li>Harpenden</li>
                                    <li>St Albans </li>
                                    <li>Redbourn</li>
                                    <li>Kimpton</li>
                                    <li>Wheathampstead</li>
                                    <li>Sandridge</li>
                                    <li>Markyate</li>
                                    <li>Slip End</li>
                                </ul>
                                <ul>
                                    <li>Caddington</li>
                                    <li>Hemel</li>
                                    <li>Kensworth</li>
                                    <li>Luton</li>
                                    <li>Hatfield </li>
                                    <li>Sandridge</li>
                                </ul>
                            </div>
                        </div>
                        {/* right side */}
                        <div>
                            <h1 className='text-[#2AB237] font-bold text-2xl mb-[30px]'>Get in Touch</h1> 
                            <div className='flex flex-col justify-start items-start gap-6'>
                                <div className='flex items-center gap-2'>
                                    <Image src="/images/whatsapp.svg" alt="icon" width="23" height="23"/>
                                        <p className='text-white text-[15px]'>WhatsApp Us!</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                    <Image src="/images/messenger.svg" alt="icon" width="23" height="23"/>
                                        <p className='text-white text-[15px]'>Messenger Us!</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                    <Image src="/images/instagram.svg" alt="icon" width="23" height="23"/>
                                        <p className='text-white text-[15px]'>Insta DM Us!</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Image src="/images/phone.svg" alt="phone icon" width="23" height="23"/>
                                        <p className='text-white text-[15px]'>07701 317406</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Bottom Footer */}
            <div className='w-full h-[50px] bg-[#394141] flex items-center justify-center'>
                <p className='text-white text-[15px] md:text-xl'>Copyright © 2023 PlumbSmith. All rights reserved.</p>
            </div>
    </div>
  )
}

export default Footer