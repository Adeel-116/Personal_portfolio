import React, { useEffect, useState } from 'react'
import TagsButton from './TagsButton'
import { GoArrowUpRight } from "react-icons/go";
function PortfolioCard() {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth)

        useEffect(()=>{
            const handleResize = ()=>{
                setWindowWidth(window.innerWidth)
            }

            window.addEventListener('resize', handleResize);

            // Clean up event listener on component unmount
            return () => window.removeEventListener('resize', handleResize);
        }, [])

        
    


    return (
        <div className='w-[100%] h-auto flex justify-center'>
            {console.log(window.innerWidth)}
            <div className="relative xl:w-[100%] sm:w-[100%] w-[100%] h-auto flex justify-center items-center flex-col">
                <img
                    className="w-full hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="../../../src/assets/profilePicture/blogPicture.png"
                    alt=""
                />


                <div className='xl:w-[95%] lg:w-[100%] h-auto flex sm:py-7 py-4'>
                    <div className='w-[80%]'>
                    
                        <div className={`flex md:block sm:hidden ${(windowWidth<400)? 'hidden':'block'} flex-row xl:gap-x-3 lg:gap-x-2 gap-x-3 gap-y-1 flex-wrap`}>
                            <TagsButton Text={"Reactjs"} />
                            <TagsButton Text={"Reactjs"} />
                            <TagsButton Text={"Reactjs"} />
                        </div>
                        <h1 className='xl:text-2xl lg:text-xl text-[21px] mt-2 font-semibold text-gray-800 hover:text-lightGreen transition-all duration-400 ease-in-out '>Crypto Website Development for Defi X</h1>
                    </div>
                    <div className='w-[20%] h-auto flex justify-end items-center'>
                        <div className="w-12 h-12 rounded-full flex justify-center items-center text-black font-bold bg-darkGray hover:bg-lightGreen hover:text-white hover:rotate-45 transition-all duration-300 ease-in-out transform">
                            <GoArrowUpRight />
                        </div>


                    </div>
                </div>

            </div>




        </div>
    )
}

export default PortfolioCard
