import React from 'react'
import TagsButton from './TagsButton'
import { GoArrowUpRight } from "react-icons/go";
function PortfolioSection() {
    return (
        <div className='w-[80%] h-auto'>
            <div className="relative w-1/2 h-auto flex justify-center items-center flex-col">
                <img
                    className="w-full hover:scale-110 transition-transform duration-300 ease-in-out"
                    src="../../../src/assets/profilePicture/blogPicture.png"
                    alt=""
                />


                <div className='w-[93%] h-auto flex py-10'>
                    <div className='w-[80%] py-3'>
                        <div className='flex flex-row gap-x-4 gap-y-2 flex-wrap'>
                            <TagsButton Text={"Reactjs"} />
                            <TagsButton Text={"Reactjs"} />
                            <TagsButton Text={"Reactjs"} />
                        </div>
                        <h1 className='text-2xl mt-2 font-semibold text-gray-800 hover:text-lightGreen transition-all duration-400 ease-in-out '>Crypto Website Development for Defi X</h1>
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

export default PortfolioSection
