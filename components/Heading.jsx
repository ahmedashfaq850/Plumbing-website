import React from 'react'

const Heading = ({afterOurText}) => {
  return (
    <div className='w-full text-center mb-20 text-2xl sm:text-4xl'>
    <h2 className="text-black font-extrabold">
      OUR <span className="text-[#73D043]">{afterOurText}</span>
    </h2>
    </div>
  );
}

export default Heading