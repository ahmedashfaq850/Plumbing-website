import Image from 'next/image'
import React from 'react'

const BathroomBanner = () => {
  return (
    <div className='w-full h-[300px] md:h-[450px] mb-10 md:mb-20 relative'>
      <Image className='w-full h-full object-cover bg-cover' src="./images/bathroomBackground.svg" alt="" width={"0"} height={"0"}/>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40'></div>
      <div className='absolute top-1/2 left-1/2 rounded-md shadow-lg transform -translate-x-1/2 -translate-y-1/2 bg-white w-[230px] md:w-[350px] h-[150px] md:h-[200px] flex justify-center flex-col items-center text-center'>
        <h1 className='font-bold md:text-2xl text-[#F1A78C] mb-5'>Exquisite <br /> Bathroom <br /> Renovations</h1>
        <button className="bg-[#73D043] shadow-lg text-white w-fit py-1 px-2.5 sm:mb-2 md:mb-0 sm:py-2 sm:px-6 rounded-lg md:rounded-2xl font-semibold">
        Request Callback
      </button>
      </div>
    </div>
  )
}

export default BathroomBanner
