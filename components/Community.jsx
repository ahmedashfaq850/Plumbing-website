import Image from 'next/image'
const Community = () => {
  return (
    <div className="drop-shadow-xl w-full mdu:h-[450px] mb-10 sm:mb-20 flex mdu:flex-row flex-col">
    
    {/* Text */}
    <div
      className={`bg-[#1B4845] w-full  mdu:w-[55%]  flex justify-center items-center`}
    >
      <div className="w-full p-5 sm:p-10 gap-4 mdu:gap-10 flex flex-col justify-start">
        <h2 className="text-white font-bold drop-shadow-xl  sm:text-2xl">Supporting our community</h2>
        <p className="text-gray-200 text-sm sm:text-sm lg:text-lg">We’re embedded in the local community and try to lend a helping hand where we can. Whether it’s supporting the local Rugby club, or the Ladies Lunch group. (Need Copy). Or the story of the Ladies Lunch raffle winner.</p>
       
      </div>
    </div>
    {/* Image */}
    <div className="w-full mdu:w-[45%] ">
      <Image
        src={'/images/community.png'}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-full bg-cover object-cover"
        alt="Support our community"
        priority
      />
    </div>
  </div>
  )
}

export default Community