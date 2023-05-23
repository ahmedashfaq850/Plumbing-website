"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

    const handleHover = () => {
        setIsHovered(!isHovered);
      };


  return (
    <div id="home">
      <header className="flex justify-between items-center w-full px-[20px] sm:px-[40px] md:px-[90px] h-[110px]">
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width="200" height="200" />
        </Link>

        <div className="hidden lg:block">
          <nav className="flex gap-5 font-bold text-[17px] text-[#73D043]">
            <Link href="/">HOME</Link>
            <Link href="/plumbing">PLUMBING</Link>
            <Link href="/electrics">ELECTRICS</Link>
            <Link href="/heating">HEATING</Link>
            <Link href="/bathrooms">BATHROOMS</Link>
            <Link href="/kitchens">KITCHENS</Link>
            <Link href="/refurbs">REFUBS</Link>
            <Link href="/contact/#contact">CONTACT</Link>
          </nav>
        </div>
        <Link
          onClick={toggleSideNav}
          className="lg:hidden cursor-pointer"
          href="/"
        >
          <Image src="/images/menuicon.svg" alt="" width={30} height={30} />
        </Link>
      </header>
      <div
        className={
          isOpen
            ? "w-full h-screen bg-white  fixed top-0 left-0 z-10 duration-300 flex flex-col items-center pt-[200px] text-[25px] text-center font-bold "
            : "w-full h-screen bg-white  fixed top-30 left-[-100%] z-10 duration-300"
        }
      >
        <Image
          onClick={toggleSideNav}
          className="absolute cursor-pointer hover:text-[#73D043] top-2 right-3"
          src="/images/CloseIcon.svg"
          alt=""
          width={30}
          height={30}
        />
        <nav className="flex flex-col gap-4 duration-200">
          
            <Link className="hover:text-[#73D043] duration-300" href="/">HOME</Link>
            <Link className="hover:text-[#73D043] duration-300" href="/plumbing">PLUMBING</Link>
            <Link className="hover:text-[#73D043] duration-300" href="/electrics">ELECTRICS</Link>
            <Link className="hover:text-[#73D043] duration-300" href="/heating">HEATING</Link>
            <Link className="hover:text-[#73D043] duration-300" href="/bathrooms">BATHROOMS</Link>
            <Link className="hover:text-[#73D043] duration-300" href="/kitchens">KITCHENS</Link>
            <Link className="hover:text-[#73D043] duration-300" href="/refurbs">REFUBS</Link>
            <Link className="hover:text-[#73D043] duration-300" href="/contact/#contact">CONTACT</Link>
          <Link
            className="hover:text-[#73D043] duration-300"
            href="/contact/#contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
