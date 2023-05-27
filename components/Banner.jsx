import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className=" relative h-auto w-full ">
      {/* Banner Image */}
      <div class="relative">
      <div className="  sm:h-[709px]">
        <Image
          className="object-cover  w-full sm:h-[709px]"
          src="/images/heroimage.png"
          alt="Banner image"
          width="0"
          height="0"
          sizes="100vw"
          priority
        />
      </div>
        <div class="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      {/* Text & Button updated*/}
      <div className="absolute top-6 left-4 md:top-[200px] md:left-[80px] sm:top-[200px] sm:left-[80px]  lg:top-[180px] lg:left-[150px] gap-4 flex flex-col items-start ">
        <h1 className="font-bold text-white text-[18px] sm:text-[35px] md:text-[50px]">Celebrating <span className="text-[#73D043]">20 years</span> serving <br /> Harpenden & St Albans! </h1>
        <p className="text-white text-[10px] sm:text-[18px] md:text-xl">
        Homesmith are the home maintenance experts providing <br/>
        plumbing, heating, electrics, and handyman services to <br /> properties across Harpenden, St Albans, and the surrounding areas.
        
        </p>
        <Link href="#services">
        <button className="bg-[#73D043] text-xs sm:text-xl text-white md:mt-5  shadow-xl rounded-lg py-2 md:py-4 px-3 sm:px-5 font-bold">
        EXPLORE OUR SERVICES
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;