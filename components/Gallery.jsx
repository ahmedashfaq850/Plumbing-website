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
        textColor="text-[#2F83B8]"
      />
      <div className="flex mb-20 gap-3 justify-center items-center">
        <Image
          src="/images/bathroomBackground.svg"
          width="0"
          height="0"
          sizes="100vw"
          className="drop-shadow-2xl mdu:h-[250px] mdu:w-full object-cover bg-cover"
          alt="Bathroom Gallery"
        />
        <Image
          src="/images/bathroomBackground.svg"
          width="0"
          height="0"
          sizes="100vw"
          className="mdu:h-[250px] mdu:w-full object-cover bg-cover"
          alt="Bathroom Gallery"
        />
        <Image
          src="/images/bathroomBackground.svg"
          width="0"
          height="0"
          sizes="100vw"
          className="mdu:h-[250px] mdu:w-full object-cover bg-cover"
          alt="Bathroom Gallery"
        />
      </div>
    </Fragment>
  );
}

export default Gallery