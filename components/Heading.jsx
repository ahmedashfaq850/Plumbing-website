import React from 'react'

const Heading = ({afterOurText}) => {
  return (
    <div className="drop-shadow-xl w-full text-center mb-10 sm:mb-20 text-2xl sm:text-4xl">
      <h2 className="text-black drop-shadow-2xl font-extrabold">
        OUR <span className="text-[#73D043]">{afterOurText}</span>
      </h2>
    </div>
  );
}

export default Heading