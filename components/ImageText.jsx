import React from "react";
import Image from "next/image";

const Stars = () => {
  return <Image src="/images/rating.svg" width="28" height="28" alt="rating" />;
};

const ImageText = ({
  title,
  description,
  buttonText,
  imageDes,
  order,
  marginBottom = "20",
  height = "350px",
  buttonR = false,
}) => {
  // console.log(order)

  return (
    <div
      className={`drop-shadow-xl w-full mdu:h-[${height}] mb-${marginBottom} sm:mb-${marginBottom} bg-black flex mdu:flex-row flex-col`}
    >
      {/* Text */}
      <div
        className={`bg-[#1B4845] w-full max-[861px]:order-2 mdu:w-[50%] ${order} flex justify-center items-center`}
      >
        <div className="w-full p-5 sm:p-10 gap-4 mdu:gap-4 flex flex-col justify-start">
          <h2 className="text-white font-bold drop-shadow-xl  sm:text-2xl">
            {title}
          </h2>
          <p className="text-gray-200 text-sm sm:text-sm lg:text-lg">
            {description}
          </p>
          {!buttonR ? (
            <button className="bg-[#73D043] shadow-md text-white w-fit py-1 px-2.5 sm:py-2 sm:px-4 rounded-lg font-semibold">
              {buttonText}
            </button>
          ) : (
            <div className="flex justify-start items-center">
              <Stars />
              <Stars />
              <Stars />
              <Stars />
              <Stars />
            </div>
          )}
        </div>
      </div>
      {/* Image */}
      <div className="w-full mdu:w-[50%] ">
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
};

export default ImageText;
