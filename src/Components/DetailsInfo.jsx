import React from 'react'

function DetailsInfo({number, text}) {
  return (
    <div className="flex items-center flex-row">
      {/* Number */}
      <p className="text-[5rem] font-bold text-lightGreen">{number}</p>
      {/* Divider */}

      <div className='flex justify-center items-center gap-2 p-1'>
      <div className="border-l border-gray-300 h-10 "></div>

      {/* Text */}
      <div>
        <p className="text-[15px] font-normal w-16 text-gray-800">{text}</p>
      </div>
      </div>

    </div>
  )
}

export default DetailsInfo
