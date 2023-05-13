import Image from 'next/image'
import Link from 'next/link'
import Heading from './Heading'
const services = [
  {
    title: 'Plumbing',
    description: 'Our plumbing solutions can help with leaking taps, new  toilets, showers, and more.',
    imageSrc: '/images/plumbing.svg',
  },
  {
    title: 'Electrics',
    description: 'Our electricians can fit your spotlights, sockets, switches, extractor fans, and more.',
    imageSrc: '/images/electrics.svg',
  },
  {
    title: 'Heating',
    description: 'Professional heating engineers who can provide boiler, central heating, and gas services.',
    imageSrc: '/images/heating.svg',
  },
  {
    title: 'Bathrooms',
    description: 'Our Bathrooms solutions can help with leaking taps, showers, and more.',
    imageSrc: '/images/bathroom.svg',
  },
  {
    title: 'Kitchens',
    description: 'From fixing leaky faucets to installing new sinks and garbage disposals.',
    imageSrc: '/images/kitchen.svg',
  },
  {
    title: 'Refurbs',
    description: 'Our Refurbs solutions can help with painting on walls.',
    imageSrc: '/images/refurbs.svg',
  },
]
const Services = () => {
  return (
    <div>  
        <Heading afterOurText='SERVICES'/>
        <div className='flex gap-10 mb-7 sm:mb-10 flex-wrap justify-center mt-10'>
            {services.map((service, index) => (
                <div key={index} className='flex flex-col items-center justify-center sm:w-[220px]  md:w-[300px] md:h-[400px] bg-white rounded-lg shadow-lg  '>
                    
                        <div className='w-12 h-12 md:w-[100px] md:h-[100px]'>
                            <Image className='mt-4 md:mt-0' src={service.imageSrc} alt={service.title} width={100} height={100} />
                        </div>
                        <h3 className='mt-7  mb-2 text-2xl md:text-3xl text-[#73D043] font-semibold  '>{service.title}</h3>
                        <p className='text-center p-3 md:p-4 md:text-sm text-xs'>{service.description}</p>
                        <Link href='/services' className='mt-4 text-center text-[#73D043] flex items-center justify-end mb-3 md:mb-0  hover:text-green-700' >
                            Learn More 
                            <span>
                                <Image className='ml-1 mt-1' src={'/images/arrow.svg'} alt='arrow' width={13} height={20} />
                            </span>
                        </Link>
                    
                </div>
            ))}


        </div>
    </div>
  )
}

export default Services