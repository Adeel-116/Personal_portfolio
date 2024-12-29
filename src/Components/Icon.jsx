import React, { useState } from 'react'

function Icon({ iconName}) {
  const [bgColor, setbgColor] = useState(true)



  return (
    <div className={`w-8 h-8 ${bgColor ? 'bg-lightGreen' : 'bg-transparent border-[1px] border-darkGray'} rounded-full flex justify-center items-center`}
    onMouseEnter={() => setbgColor(false)} 
    onMouseLeave={() => setbgColor(true)} 
    style={{}}
    >
      <div className={`flex justify-center items-center ${bgColor ? 'text-white' : 'text-black'} text-[1]`}>
        {iconName}
      </div>
    </div>
  )
}

export default Icon
