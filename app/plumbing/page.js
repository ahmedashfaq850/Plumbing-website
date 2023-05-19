import PlumbingServices from '@/components/PlumbingServices'
import Image from 'next/image'

const jobs = [
  {
    description: 'Fitting taps, sinks, toiletscand showers',
    imageSrc: '/images/plumbing/One.svg',
  },
  {
    description: 'Installing new pumps and replacing broken ones',
    imageSrc: '/images/plumbing/Two.svg',
  },
  {
    description: 'Fixing showers, taps and replacing cartridges',
    imageSrc: '/images/plumbing/Three.svg',
  },
  {
    description: 'Locating and fixing leaks',
    imageSrc: '/images/plumbing/Four.svg',
  },
  {
    description: 'Running pipework for washing machines and dishwaters',
    imageSrc: '/images/plumbing/Five.svg',
  },
  {
    description: 'Installing water softeners and filters',
    imageSrc: '/images/plumbing/Six.svg',
  },{
    description: 'Installing boiling water taps',
    imageSrc: '/images/plumbing/Seven.svg',
  },{
    description: 'Repairing toilet flush mechanisms',
    imageSrc: '/images/plumbing/Eight.svg',
  },{
    description: 'All types of shower system repairs and installations',
    imageSrc: '/images/plumbing/Nine.svg',
  },
  
]



const Plumbing = () => {
  return (
    <div>
        <div>

            <PlumbingServices />
            {/* Heading and Paragragh */}
            <div className='px-[20px] sm:px-[40px] md:px-[90px] flex flex-col gap-5 mb-20 '>
              <h3 className='text-3xl font-semibold'>Plumbing services from Homesmith</h3>
              <p className='text-xl '>The most common plumbing jobs we receive include:</p>

              {/* Plumbing jobs */}
              <div className='p-12'>  
       
                <div className='flex gap-10 mb-7 sm:mb-10 flex-wrap justify-center  '>
                  {jobs.map((job, index) => (
                  <div key={index} className='flex p-3  md:p-0 flex-col max-w-[180px] max-h-[180px]  items-center justify-center sm:min-w-[200px] sm:p-3   md:min-w-[300px] md:min-h-[200px] 2xl:min-w-[400px]  bg-white rounded-lg  shadow-lg  '>
                    <div className='w-12 h-12 md:w-[90px] md:h-[100px]'>
                      <Image className='mt-4 md:mt-2' src={job.imageSrc} alt={job.title} width={100} height={100} />
                    </div>
                    {/* <h3 className='mt-7   mb-2 text-lg sm:text-2xl  font-semibold drop-shadow-lg'>{service.title}</h3> */}
                    <p className='text-center mt-5 sm:mt-0 p-3 md:p-4 text-[#73D043] md:text-base 2xl:text-xl text-xs'>{job.description}</p>
                    
                  </div>
            ))}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Plumbing