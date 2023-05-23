import Image from 'next/image'
import Heading from './Heading'
const services = [
  {
    title: 'Structural Works',
    description: 'Our structural works and extension services are designed to transform your property and enhance its functionality and aesthetics.',
    imageSrc: '/images/refurbs/structure.svg',
  },
  {
    title: 'Bathrooms',
    description: 'From small, simple updates to full- scale bathroom renovations, our team has the expertise and experience needed to bring your vision to life.',
    imageSrc: '/images/refurbs/bathroom.svg',
  },
  {
    title: 'Kitchens',
    description: 'Our team will work to bring your dream kitchen to life, from all the structural works to the final finish , we`ll manage the entire project.',
    imageSrc: '/images/refurbs/kitchen.svg',
  },
  
]
const RefurbServices = () => {
  return (
    <div className="p-12 drop-shadow-2xl">
      <Heading afterOurText="REFURB SERVICES" />
      <div className="flex gap-10 mb-7 sm:mb-10 flex-wrap justify-center mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex p-3 md:p-0 flex-col max-w-[300px]  items-center justify-center sm:w-[320px] sm:p-3   md:min-w-[320px] md:min-h-[370px] 2xl:min-w-[400px]  bg-[#1B4845] rounded-lg shadow-lg  "
          >
            <div className="w-12 h-12 md:w-[110px] md:h-[100px]">
              <Image
                className="mt-4 md:mt-0"
                src={service.imageSrc}
                alt={service.title}
                width={100}
                height={100}
              />
            </div>
            <h3 className="mt-7 mb-0 text-white   sm:mb-1 text-lg sm:text-2xl  font-semibold drop-shadow-lg    ">
              {service.title}
            </h3>
            <p className="text-center p-3 md:p-4 text-white md:text-base      text-xs">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RefurbServices;