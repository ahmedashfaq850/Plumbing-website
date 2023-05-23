import CTA from "@/components/CTA";
import Community from "@/components/Community";
import HeatingServices from "@/components/HeatingServices";
import Heading from "@/components/Heading";
import ImageText from "@/components/ImageText";
import Team from "@/components/Team";
import Image from "next/image";
import { Fragment } from "react";

const jobs = [
  {
    description: "New boiler installations",
    imageSrc: "/images/heater/image1.svg",
  },
  {
    description: "Radiators installed",
    imageSrc: "/images/heater/image2.svg",
  },
  {
    description: "Radiator power flushing",
    imageSrc: "/images/heater/image3.svg",
  },
  {
    description: "Boiler repairs",
    imageSrc: "/images/heater/image4.svg",
  },
  {
    description: "Gas leak repairs",
    imageSrc: "/images/heater/image5.svg",
  },
  {
    description: "Central heating systems",
    imageSrc: "/images/heater/image6.svg",
  },
  {
    description: "Gas safety checks",
    imageSrc: "/images/heater/image7.svg",
  },
  {
    description: "Gas safety certificates",
    imageSrc: "/images/heater/image8.svg",
  },
  {
    description: "Cooker installations",
    imageSrc: "/images/heater/image9.svg",
  },

];

const Heating = () => {
  return (
    <Fragment>
      <div className="mb-20 mdu:mb-0">
          <ImageText
            title="Heating when you need it!"
            description="Whether it’s repairing a broken gas boiler, fixing a gas leak, installing a new central heating system, or carrying out a gas safety check, the Homesmith team are here to help."
            buttonText="Call Us"
            imageDes="/images/heater/Banner1.svg"
            order="order-none"
            marginBottom="0"
          />
        </div>
        <ImageText
          title="Book a Heating Engineer"
          description="We understand how frustrating and stressful it is to be without hot water or central heating when you need it. When you call the Homesmith team, we’ll do everything we can to get one of our qualified gas engineers to you as quickly as possible."
          buttonText="Book a Plumner"
          imageDes="/images/heater/Banner2new.svg"
          order="order-2"
          marginBottom="20"
        />
    <div className="px-12 mdu:px-24">
        {/* TESTIMONIAL SECTION */}
        <ImageText
          title="Our Clients"
          description="Quote from Michael at Silver Cup
Carousel perhaps with another from Al;lsop,
And others from other customers.
"
          buttonR= {true}
          imageDes="/images/testimonial.svg"
          order="order-none"
          marginBottom="20"
          height="500px"
        />
    </div>

        <HeatingServices />
        <div className="px-12 mdu:px-24">
          <Team />
        </div>
        {/* Heading and Paragragh */}
        <div className=" flex px-8 mdu:px-24  flex-col gap-5 mb-10 ">
          <h3 className="text-xl sm:text-3xl font-semibold">
            Heating services from Homesmith
          </h3>
          <p className="text-sm     sm:text-xl ">
            The most common heating jobs we receive include:
          </p>
        </div>

        {/* Plumbing jobs */}
        <div className="p-4 md:p-10 lg:p-20  2xl:p-24">
          <div className="flex gap-5 sm:gap-10 mb-7  flex-wrap  justify-center  ">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="flex p-1   md:p-2 flex-col max-w-[150px] max-h-[150px]  items-center justify-center sm:min-w-[180px] sm:p-3   md:min-w-[300px] md:min-h-[200px] 2xl:min-w-[400px]  bg-white rounded-lg  shadow-lg  "
              >
                <div className="w-12 h-12 md:w-[90px] md:h-[100px]">
                  <Image
                    className="mt-4 md:mt-2"
                    src={job.imageSrc}
                    alt={job.title}
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-center mt-5 sm:mt-0 p-3 md:p-4 text-[#73D043] md:text-base 2xl:text-xl text-xs">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-12 mdu:px-24">
          <CTA
            CtaText="Not sure which trade you need? Just ask us!"
            buttonText="Request Callback"
          />
          <Community />
          <Heading afterOurText="LOCATIONS" />

          <ImageText
            title="We have you covered!"
            description="Our team are based in Harpenden and St Albans covering all the surrounding areas including Redbourn,Wheathampstead, Kimpton, Sandridge, Markyate, Slip End, Caddington, and more."
            buttonText="Our Locations"
            imageDes="/van1.svg"
            order="order-2"
            marginBottom="20"
          
          />
        </div>
      
    </Fragment>
  );
};

export default Heating;
