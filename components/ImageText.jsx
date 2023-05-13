import React from 'react';
import Image from 'next/image'

const ImageText = ({title,description,buttonText,imageDes,order}) => {
    // console.log(order)
  return (
    <div className="drop-shadow-xl w-full mdu:h-[300px] mb-20 bg-black flex mdu:flex-row flex-col">
      {/* Text */}
      <div
        className={`bg-[#1B4845] w-full max-[861px]:order-2 mdu:w-[55%] ${order} flex justify-center items-center`}
      >
        <div className="w-full p-5 sm:p-10 gap-4 mdu:gap-4 flex flex-col justify-start">
          <h2 className="text-white font-extrabold  sm:text-xl">{title}</h2>
          <p className="text-white text-sm">{description}</p>
          <button className="bg-[#73D043] shadow-md text-white w-fit py-1 px-2.5 rounded-lg font-semibold">
            {buttonText}
          </button>
        </div>
      </div>
      {/* Image */}
      <div className="w-full mdu:w-[45%] ">
        <Image
          src={imageDes}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full bg-cover object-cover"
          alt="plumbing"
          priority
        />
      </div>
    </div>
  );
}

export default ImageText