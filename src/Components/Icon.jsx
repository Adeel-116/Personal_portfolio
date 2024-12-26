import React from 'react'

function Icon({iconName}) {
  return (
    <div className='w-8 h-8 bg-lightGreen rounded-full flex justify-center items-center'>
        <div className='flex justify-center items-center text-white text-xl'>
            {iconName}
        </div>

    </div>
  )
}

export default Icon
