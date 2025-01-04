import React from 'react'

function DetailsInfo({number, text}) {
  return (
    <div className="flex items-center xl:flex-row ">
      {/* Number */}
      <p className="2xl:text-[5rem] text-[4rem] font-bold text-lightGreen">{number}</p>
      {/* Divider */}

      <div className='flex justify-center items-center gap-2 p-1'>
      <div className="border-l border-gray-300 h-10"></div>

      {/* Text */}
      <div className='sm:w-full w-[100px]'>
        <p className="md:text-[15px] font-normal xl:w-16 lg:w-full text-gray-800">{text}</p>
      </div>
      </div>

    </div>
  )
}

export default DetailsInfo
