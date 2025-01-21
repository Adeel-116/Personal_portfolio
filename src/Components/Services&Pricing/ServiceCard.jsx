import React from 'react'
import Button from '../Button'
import { FaArrowRight } from "react-icons/fa";
function ServiceCard() {
  return (
    <div className='xl:basis-1/2 sm:basis-[45%] basis-[90%] h-auto flex justify-center items-center bg-whiteGray border-[1px] border-darkGray'>
        
        <div className='w-[90%] h-auto'>
        <div className='w-full h-auto py-6  flex flex-col justify-center items-center  border-b-[2px] border-darkGray'>
             <p className='text-lg font-normal'>Basic</p>
             <h1 className='text-5xl text-lightGreen font-bold py-1'>$ 900</h1>
             <p className='text-lg font-normal'>Per Month</p>
        </div>


        <div className='w-full h-auto flex flex-col py-4'>

            <div className='w-full h-auto flex py-1.5'>
                <div className=' flex justify-center items-center'>
                <svg stroke="#78aba8" fill="#78aba8" stroke-width="0" viewBox="0 0 256 256" height="1.1rem" width="1.1rem" xmlns="http://www.w3.org/2000/svg"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                </div>
                 <p className='px-2'>Web Development</p> 
            </div>


            <div className='w-full h-auto flex py-1.5'>
                <div className=' flex justify-center items-center'>
                <svg stroke="#78aba8" fill="#78aba8" stroke-width="0" viewBox="0 0 256 256" height="1.1rem" width="1.1rem" xmlns="http://www.w3.org/2000/svg"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                </div>
                 <p className='px-2'>UI/UX</p> 
            </div>
            

            <div className='w-full h-auto flex py-1.5'>
                <div className=' flex justify-center items-center'>
                <svg stroke="#78aba8" fill="#78aba8" stroke-width="0" viewBox="0 0 256 256" height="1.1rem" width="1.1rem" xmlns="http://www.w3.org/2000/svg"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                </div>
                 <p className='px-2'>Webflow Development</p> 
            </div>


            <div className='w-full h-auto flex py-1.5'>
                <div className=' flex justify-center items-center'>
                <svg stroke="#78aba8" fill="#78aba8" stroke-width="0" viewBox="0 0 256 256" height="1.1rem" width="1.1rem" xmlns="http://www.w3.org/2000/svg"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                </div>
                 <p className='px-2'>Website optimization</p> 
            </div>


            <div className='w-full h-auto flex py-1.5'>
                <div className=' flex justify-center items-center'>
                <svg stroke="#78aba8" fill="#78aba8" stroke-width="0" viewBox="0 0 256 256" height="1.1rem" width="1.1rem" xmlns="http://www.w3.org/2000/svg"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                </div>
                 <p className='px-2'>24/7 Support</p> 
            </div>
        </div>


        <div className='w-full flex justify-center items-center py-6 '>
            <div className='w-[170px] h-auto'>
            <Button buttonText={"Choose Basic"} buttonIcon={<FaArrowRight />} />
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default ServiceCard
