import Gallery from '@/components/Gallery'
import React from 'react'
import ImageText from '@/components/ImageText';

const page = () => {
  return (
    <div className="px-12 mdu:p-24 ">
      <div className="mb-20 mdu:mb-0">
        <ImageText
          title="Over 20 years fitting 
bathrooms!"
          description="The plumbsmith team have been providing exceptional
bathroom renovation services for over 20 years,
serving homeowners in Harpenden, St Albans, and the
surrounding areas.
"
          buttonText="Call Us"
          imageDes="/images/bathroom/bathroom1.svg"
          order="order-none"
          marginBottom="0"
          textTitleClass="text-[#2F83B8]"
          textdescClass="text-gray-700"
          bgClass="bg-white"
          height="450px"
          buttonClass="bg-[#2F83B8]"
        />
      </div>
      <ImageText
        title="Expert bathroom renovations"
        description="We’re Harpenden’s bathroom experts. Our professional
team will ensure your new bathroom is flawlessly brought
to life with the minimum disruption to your home."
        buttonText="Book a Plumner"
        imageDes="/images/bathroom/bathroom21.svg"
        order="order-2"
        marginBottom="20"
        textTitleClass="text-[#2F83B8]"
        textdescClass="text-gray-700"
        bgClass="bg-white"
        height="450px"
        buttonClass="bg-[#2F83B8]"
      />
      <Gallery />
    </div>
  );
}

export default page
