import Gallery from '@/components/Gallery'
import React, { Fragment } from 'react'
import ImageText from '@/components/ImageText';
import BathroomImageText from '@/components/BathroomImageText'
import Team from '@/components/Team';
import Community from '@/components/Community';
import CTA from '@/components/CTA';
import Heading from '@/components/Heading';
import RefurbServices from '@/components/RefurbServices';

const page = () => {
  return (
    <Fragment>
      <div className="mb-20 mdu:mb-0 ">
        <ImageText
          title="A local team of refurbs"
          description="Our home refurbishment services 
          are tailored to your needs.
           We provide innovative and functional solutions for kitchen, bathroom, and structural works bringing your home refurbishment project to life."
          buttonText="Call Us"
          imageDes="/images/refurbs/banner1.jpg"
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
        title="Transform your home"
        description="No matter what your vision is for your home refurbishment, we're here to turn it into a reality. 
        Contact us today to book your no-obligation consultation."
        buttonText="Book a Refurb"
        imageDes="/images/refurbs/banner2.jpg"
        order="order-2"
        marginBottom="20"
        textTitleClass="text-[#1B4845]"
        textdescClass="text-gray-700"
        bgClass="bg-white"
        height="h-[400px]"
        buttonClass="bg-[#1B4845]"
      />
      <div className="px-12 mdu:px-24  ">
      <Gallery blackText="Gallery of" colorText="Refurbs" image1="/images/refurbs/gallery1.jpg" image2="/images/refurbs/gallery2.jpg" image3="/images/refurbs/gallery3.jpg"/>
        {/* Pending */}
        {/* <BathroomImageText
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
        /> */}  
        <RefurbServices />
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
    </Fragment>
  );
}

export default page
