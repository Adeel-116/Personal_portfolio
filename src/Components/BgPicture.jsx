import React from 'react'
import Button from "../Components/Button"
import { IoIosSend } from 'react-icons/io'
import bgImg from '../assets/bg.png'

function BgPicture() {
    return (
        <div className="w-full h-auto bg-cover bg-center flex items-center sm:py-10 py-5 justify-center" style={{ backgroundImage: `url('${bgImg}')` }}>
            <div className='2xl:w-[80%] lg:w-[90%] w-[90%] h-auto py-16 flex flex-wrap xl:flex-nowrap flex-row'>

                <div className="2xl:w-[80%] sm:w-[90%] w-full h-auto">
                    <h1 className='sm:text-5xl text-[40px]  font-bold text-white xl:w-2/3 md:w-[85%]  sm:leading-[65px] leading-[50px]'>Let’s Work together on your next Project</h1>

                    <p className="text-white mt-4 mb-4 xl:text-[18px] sm:text-[17px] text-[16px] font-normal">I am available for freelance projects. Hire me and get your project done.</p>

                </div>

                <div className="2xl:w-[20%] w-auto h-auto flex justify-center items-center">

                    <div className="2xl:w-[180px] w-[190px]">
                        <Button buttonText={"Let's get in touch"} buttonIcon={<IoIosSend />} />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default BgPicture
