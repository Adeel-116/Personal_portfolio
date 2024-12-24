import React from 'react'
import ButtonNav from './ButtonNav'
import { FaUser } from "react-icons/fa";

function NavBar() {
  return (
    <div className='w-full h-auto flex flex-col gap-y-3 justify-center items-center py-2'>
      <div className='w-full h-auto rounded-lg'>
        <ButtonNav buttonText={"About Us"} buttonIcon={<FaUser />} bgColor={true}/>
      </div>
      <div className='w-full h-auto'>
        <ButtonNav buttonText={"Portfolio"} buttonIcon={<FaUser />}/>
      </div>
      <div className='w-full h-auto'>
        <ButtonNav buttonText={"Services & pricing"} buttonIcon={<FaUser />}/>
      </div>
      <div className='w-full h-auto'>
        <ButtonNav buttonText={"Resume"} buttonIcon={<FaUser />}/>
      </div>
      <div className='w-full h-auto'>
        <ButtonNav buttonText={"Product"} buttonIcon={<FaUser />}/>
      </div>
      <div className='w-full h-auto'>
        <ButtonNav buttonText={"Contact"} buttonIcon={<FaUser />}/>
      </div>
    </div>
  )
}

export default NavBar
