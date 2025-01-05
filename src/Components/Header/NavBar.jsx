import React from 'react'
import ButtonNav from './ButtonNav';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaCogs } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


function NavBar() {
  return (
    <div className='w-full h-auto flex lg:flex-col lg:gap-y-3 lg:justify-center justify-between items-center lg:py-2'>
      <div className='lg:w-full h-auto rounded-lg'>
        <ButtonNav buttonText={"About Us"} buttonIcon={<FaRegUser />} />
      </div>
      <div className='lg:w-full h-auto'>
        <ButtonNav buttonText={"Portfolio"} buttonIcon={<MdOutlineWorkOutline />} />
      </div>
      <div className='lg:w-full h-auto'>
        <ButtonNav buttonText={"Services"} buttonIcon={<FaCogs />} />
      </div>
      <div className='lg:w-full h-auto'>
        <ButtonNav buttonText={"Resume"} buttonIcon={<FaFileAlt />} />
      </div>
      <div className='lg:w-full h-auto'>
        <ButtonNav buttonText={"Contact"} buttonIcon={<MdOutlineMail />} />
      </div>
    </div>
  )
}

export default NavBar
