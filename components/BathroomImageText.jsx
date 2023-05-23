import React from "react";
import Image from "next/image";

const Stars = () => {
  return <Image src="/images/rating.svg" width="28" height="28" alt="rating" />;
};

const BathroomImageText = ({
  title,
  imageDes,
  desc,
  order,
  marginBottom = "20",
  height,
  bgClass = "bg-[#1B4845]",
  textTitleClass = "text-white",
  textdescClass = "text-gray-200",
  widthImage = "50%",
  widthText = "50%",
  bulletPoints
}) => {
  // console.log(order)

  return (
    <div
      className={`shadow-2xl w-full mdu:${height}
       mb-${marginBottom} sm:mb-${marginBottom} ${bgClass} flex mdu:flex-row flex-col`}
    >
      {/* Text */}
      <div
        className={`${bgClass} w-full max-[861px]:order-2 mdu:w-[${widthText}] ${order} flex justify-center items-center`}
      >
        <div className="w-full p-5 sm:p-10 gap-4 mdu:gap-4 flex flex-col justify-start">
          <h2
            className={`${textTitleClass} font-bold drop-shadow-xl  sm:text-2xl`}
          >
            {title}
          </h2>
          <p className={`${textdescClass} text-sm sm:text-sm lg:text-lg`}>
            {desc}
          </p>
          <div>
            {bulletPoints?.map((item,index)=>(
              <p key={index} className={`${textdescClass}  text-sm sm:text-sm lg:text-lg`}>
                - {item}
              </p>
            ))}
          </div>
          
        </div>
      </div>
      {/* Image */}
      <div className={`w-full mdu:w-[${widthImage}]`}>
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

export default BathroomImageText;
