import React from 'react'
import './Loading.css'
function Loading() {
  return (
    <div className='w-full h-screen bg-lightWhite relative flex justify-center items-center'>
      
        <div className='flex gap-x-1'>
                <div className='circle h-5 w-5 bg-lightGreen rounded-full'></div>
                <div className='circle h-5 w-5  bg-lightGreen rounded-full'></div>
                <div className='circle h-5 w-5  bg-lightGreen rounded-full'></div>
                <div className='circle h-5 w-5  bg-lightGreen rounded-full'></div>
        </div>


    </div>
  )
}

export default Loading
