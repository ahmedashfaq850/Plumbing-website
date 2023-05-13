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
          src="/images/heroimage.svg"
          alt="Banner image"
          width="0"
          height="0"
          sizes="100vw"
          priority
        />
      </div>
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Text & Button updated*/}
      <div className="absolute top-4 left-4 sm:top-[200px] sm:left-[80px]  md:top-[200px] md:left-[150px] gap-4 flex flex-col items-start ">
        <h1 className="font-bold text-white text-[18px] sm:text-[35px] md:text-[50px]">Celebrating <span className="text-[#73D043]">20 years</span> serving <br /> Harpenden & St Albans! </h1>
        <p className="text-white text-[11px] sm:text-[18px] md:text-[25px]">
        Homesmith are the home maintenance experts providing <br/>
        plumbing, heating, electrics, and handyman services to <br /> properties across Harpenden, St Albans, and the surrounding areas.
        
        </p>
        <Link href="#contact">
        <button className="bg-[#73D043] text-white  shadow-xl rounded-lg py-2 md:py-4 px-3 sm:px-5 font-bold">
        EXPLORE OUR SERVICES
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;