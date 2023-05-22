import React, { Fragment } from 'react'
import Image from 'next/image'
import Heading from './Heading';
const Gallery = () => {
  return (
    <Fragment>
      {/* <h1 className=' mb-10 font-bold text-3xl drop-shadow-2xl text-center'>Gallery Of Bathrooms</h1> */}
      <Heading
        our="Gallery"
        afterOurText="Of Bathrooms"
        mb="10"
        textColor="text-[#73D043]"
      />
      <div className="flex flex-wrap mb-20 gap-3 justify-center items-center">
        <Image
          src="/images/bathroom/bathroom3.svg"
          width="0"
          height="0"
          sizes="100vw"
          className="drop-shadow-2xl w-full h-full mdu:h-[250px] mdu:w-[350px] object-cover bg-cover"
          alt="Bathroom Gallery"
        />
        <Image
          src="/images/bathroom/bahtroom4.svg"
          width="0"
          height="0"
          sizes="100vw"
          className="drop-shadow-2xl w-full h-full mdu:h-[250px] mdu:w-[350px] object-cover bg-cover"
          alt="Bathroom Gallery"
        />
        <Image
          src="/images/bathroom/bathroom5.svg"
          width="0"
          height="0"
          sizes="100vw"
          className="drop-shadow-2xl w-full h-full mdu:h-[250px] mdu:w-[350px] object-cover bg-cover"
          alt="Bathroom Gallery"
        />
      </div>
    </Fragment>
  );
}

export default Gallery