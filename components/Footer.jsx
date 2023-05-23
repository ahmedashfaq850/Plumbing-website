import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Main Footer */}
            <footer class="bg-[#1B4845] w-full">
                <div class="container mx-auto px-4 ">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-7 py-4 ">
                        {/* left side */}
                        <div>
                            <h1 className='text-[#2AB237] font-bold text-2xl mb-[10px] md:mb-[30px]'>Our Services</h1>
                            <ul className='text-white'>
                                <Link href="/plumbing"><li>Plumbing</li></Link>
                                <Link href="/electrics"><li>Electrics</li></Link>
                                <Link href="/heating"><li>Heating</li></Link>
                                <Link href="/bathrooms"> <li>Bathrooms</li></Link>
                                <Link href="/kitchens"><li>Kitchens</li></Link>
                                <Link href="/refubs"><li>Refurbs</li></Link>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-[#2AB237] font-bold text-2xl mb-[10px] md:mb-[30px]'>Find Us</h1>
                            <p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39466.03685632757!2d-0.40333600470408654!3d51.81297026639258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876380b9f7e3c13%3A0x4eeb400a0ce7b472!2sHarpenden%2C%20UK!5e0!3m2!1sen!2s!4v1684595011867!5m2!1sen!2s" width="200" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </p>
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
                                        <p className='text-white text-[15px]'>07961 067894</p>
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