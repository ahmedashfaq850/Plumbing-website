import Image from 'next/image'
import Heading from './Heading'
const services = [
  {
    title: 'Emergency Plumbers',
    description: 'No matter the nature of the plumbing problem you have, we can send one of our expert plumbers to identify the problem and soon get it resolved.',
    imageSrc: '/images/plumbing/emergency.svg',
  },
  {
    title: 'Plumbing Installations',
    description: 'Our plumbers can install your new tap, toilet, radiator, bath, washing machine, boiling water taps, and any other appliances you want fitted.',
    imageSrc: '/images/plumbing/installations.svg',
  },
  {
    title: 'Plumbing Repairs',
    description: 'With repairs, we can dispatch a plumber to you quickly to assess the issue, provide you with a quote, and resolve the problem.',
    imageSrc: '/images/plumbing/repairs.svg',
  },
  
]
const PlumbingServices = () => {
  return (
    <div className='p-12'>  
        <Heading afterOurText='PLUMBING SERVICES'/>
        <div className='flex gap-10 mb-7 sm:mb-10 flex-wrap justify-center mt-10'>
            {services.map((service, index) => (
                <div key={index} className='flex p-3 md:p-0 flex-col max-w-[300px]  items-center justify-center sm:w-[320px] sm:p-3   md:min-w-[320px] md:min-h-[370px] 2xl:min-w-[400px]  bg-[#73D043] rounded-lg shadow-lg  '>
                    
                        <div className='w-12 h-12 md:w-[110px] md:h-[100px]'>
                            <Image className='mt-4 md:mt-0' src={service.imageSrc} alt={service.title} width={100} height={100} />
                        </div>
                        <h3 className='mt-7 mb-0   sm:mb-1 text-lg sm:text-2xl  font-semibold drop-shadow-lg    '>{service.title}</h3>
                        <p className='text-center p-3 md:p-4 text-white md:text-base     text-xs'>{service.description}</p>
                    
                </div>
            ))}


        </div>
    </div>
  )
}

export default PlumbingServices;