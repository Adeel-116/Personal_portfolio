import React from 'react'
import Button from './Button'
import { IoIosSend } from 'react-icons/io'

function Heading({ heading, paragraph, link }) {
    return (
        <div>
            <div className="w-full h-auto flex flex-row">
                <div className="lg:w-[80%] w-[90%] h-auto">
                    <div className="w-full flex flex-col">
                        <div className="w-full h-auto border-l-4 border-lightGreen flex items-center">
                            <h1 className="pl-2.5 p-1 sm:text-5xl text-4xl text-black font-bold">{heading}</h1>
                        </div>
                        <div>
                            <p className="text-gray-700 mt-2 text-[16px] font-medium xl:w-[77%] w-[97%]">
                                {paragraph+""} 
                                {link && (
                                    <>
                                        <a href="#" className="text-teal-500 underline"> online resume</a> and
                                        <a href="#" className="text-teal-500 underline"> project portfolio</a>
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:w-[20%] h-full flex justify-end py-3 items-end ">
                    <div className="xl:w-[75%] xl:block hidden">
                        <Button buttonText={"View Resume"} buttonIcon={<IoIosSend />} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Heading
