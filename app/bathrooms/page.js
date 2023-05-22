import Gallery from '@/components/Gallery'
import React from 'react'
import ImageText from '@/components/ImageText';
import BathroomImageText from '@/components/BathroomImageText'
import Team from '@/components/Team';
import Community from '@/components/Community';
import CTA from '@/components/CTA';
import Heading from '@/components/Heading';

const page = () => {
  return (
    <div className="px-12 mdu:px-24 flex flex-col  items-center ">
      <div className="mb-20 mdu:mb-0 flex flex-col  items-center">
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
          textTitleClass="text-[#1B4845]"
          textdescClass="text-gray-700"
          bgClass="bg-white"
          height="h-[400px]"
          buttonClass="bg-[#1B4845]"
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
        textTitleClass="text-[#1B4845]"
        textdescClass="text-gray-700"
        bgClass="bg-white"
        height="h-[400px]"
        buttonClass="bg-[#1B4845]"
      />
      <Gallery />
      <BathroomImageText
        title="Expert tradespeople"
        desc="Full refurbishment of a bathroom isn’t just about 
plumbing and tiling. We have expert tradespeople 
for every stage of your project – no matter how 
modest or extensive your plans are!
"
        buttonText="Book a Plumner"
        imageDes="/images/bathroom/working.svg"
        order="order-none"
        marginBottom="20"
        textTitleClass="text-white"
        textdescClass="text-gray-300"
        bgClass="bg-[#1B4845]"
        height="h-[550px]"
        buttonClass="bg-[#1B4845]"
        widthImage="40%"
        widthText="60%"
        detailDescripCheck={true}
      />
      <Team />
      {/* TESTIMONIAL SECTION */}
      <ImageText
        title="Our Clients"
        description="Quote from Michael at Silver Cup
Carousel perhaps with another from Al;lsop,
And others from other customers.
"
        buttonR={true}
        imageDes="/images/testimonial.svg"
        order="order-none"
        marginBottom="20"
        height="500px"
      />
      {/* Community Section */}
      <Community />
      <CTA
        CtaText="Not sure which trade you need? Just ask us!"
        buttonText="Request Callback"
      />
      <Heading afterOurText="LOCATIONS" />
      <ImageText
        title="We have you covered!"
        description="Our team are based in Harpenden and St Albans covering all the surrounding areas including Redbourn,Wheathampstead, Kimpton, Sandridge, Markyate, Slip End, Caddington, and more."
        buttonText="Our Locations"
        imageDes="/van1.svg"
        order="order-2"
      />
    </div>
  );
}

export default page
