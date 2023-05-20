import Image from 'next/image'
import React from 'react'

const BathroomBanner = () => {
  return (
    <div className=" w-full h-[300px] md:h-[450px] mb-10 md:mb-20 relative">
      <Image
        className="w-full h-full object-cover bg-cover"
        src="./images/bathroomBackground.svg"
        alt=""
        width={"0"}
        height={"0"}
      />
      <div className="absolute  top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      <div className="absolute   top-1/2 left-1/2 rounded-md shadow-black shadow-2xl transform -translate-x-1/2 -translate-y-1/2 bg-white  w-[230px] md:w-[450px] h-[150px] md:h-[200px] flex justify-center flex-col items-center text-center">
        <h1 className=" drop-shadow-xl tracking-[5px] md:text-2xl text-[#1B4845] //text-[#F1A78C]// mb-5">
          Exquisite <br /> Bathroom <br /> Renovations
        </h1>
        <button className="bg-[#1B4845] hover:bg-[#73D043] drop-shadow-xl text-white w-fit py-1 px-2 sm:mb-2 md:mb-0 sm:py-2 sm:px-6 rounded-md md:rounded-lg font-semibold">
          Request Callback
        </button>
      </div>
    </div>
  );
}

export default BathroomBanner
