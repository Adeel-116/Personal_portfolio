import React from 'react'
import Button from "../Components/Button"
import { IoIosSend } from 'react-icons/io'

function BgPicture() {
    return (
        <div className="w-full h-auto bg-cover bg-center flex items-center py-10 justify-center" style={{ backgroundImage: "url('../../src/assets/profilePicture/bg.png')" }}>
            <div className='w-[80%] h-auto py-16 flex flex-row'>

            <div className="w-[80%] h-auto">
                <h1 className='text-5xl font-bold text-white w-2/3 leading-[65px]'>Let’s Work together on your next Project</h1>

                <p className="text-white mt-4 text-[18px] font-normal">I am available for freelance projects. Hire me and get your project done.</p>
       
            </div>

            <div
            
            className="w-[20%] h-auto flex justify-center items-center">
       
                <div className="w-[90%] ">
                <Button buttonText={"Let's get in touch"} buttonIcon={<IoIosSend />} />
                </div>

            </div>
            </div>
        </div>

    )
}

export default BgPicture
