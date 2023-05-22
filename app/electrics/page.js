import CTA from "@/components/CTA";
import Community from "@/components/Community";
import Heading from "@/components/Heading";
import ImageText from "@/components/ImageText";
import PlumbingServices from "@/components/PlumbingServices";
import Team from "@/components/Team";
import Image from "next/image";

const jobs = [
  {
    description: "Spotlights installed",
    imageSrc: "/images/electrics/image1.svg",
  },
  {
    description: "Lighting replacements",
    imageSrc: "/images/electrics/image2.svg",
  },
  {
    description: "Outdoor lighting",
    imageSrc: "/images/electrics/image3.svg",
  },
  {
    description: " CCTV installations ",
    imageSrc: "/images/electrics/image4.svg",
  },
  {
    description: "Sockets & Switches fitted",
    imageSrc: "/images/electrics/image5.svg",
  },
  {
    description: "Rewiring of fixed installations",
    imageSrc: "/images/electrics/image6.svg",
  },
  {
    description: "Alterations and extensions to circuits",
    imageSrc: "/images/electrics/image7.svg",
  },
  {
    description: "Consumer unit (fuse board) upgrades",
    imageSrc: "/images/electrics/image8.svg",
  },
  {
    description: "Electrical safety checks (EICR and PAT) ",
    imageSrc: "/images/electrics/image9.svg",
  },
  {
    description: "EV charger installation",
    imageSrc: "/images/electrics/image10.svg",
  },
];

const Electrics = () => {
  return (
    <div className="px-12 mdu:px-24">
      <div>
        <div className="mb-20 mdu:mb-0">
          <ImageText
            title="Local plumbers you can trust"
            description="We have been offering bathroom and plumbing 
services for over 15 years in Harpenden, St Albans, 
and the surrounding areas. Our team are 
professional, reliable, offering a service that is 
second to none.
"
            buttonText="Call Us"
            imageDes="/plumbingsmith.svg"
            order="order-none"
            marginBottom="0"
          />
        </div>
        <ImageText
          title="Book  a Homesmith Plumber"
          description="We’re here to help with leaking taps, shower repairs, toilet repairs, as well as installing new sinks, taps, and appliances. As well as providing quotes for planned work, we offer fully bathroom refurbs."
          buttonText="Book a Plumner"
          imageDes="/van1.svg"
          order="order-2"
          marginBottom="20"
        />

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

        <PlumbingServices />
        <Team />
        {/* Heading and Paragragh */}
        <div className=" flex flex-col gap-5 mb-10 ">
          <h3 className="text-xl sm:text-3xl font-semibold">
            Plumbing services from Homesmith
          </h3>
          <p className="text-sm     sm:text-xl ">
            The most common plumbing jobs we receive include:
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
    </div>
  );
};

export default Electrics;
