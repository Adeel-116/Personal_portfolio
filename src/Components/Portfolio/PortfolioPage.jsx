import React from 'react'
import { IoIosSend } from 'react-icons/io'
import Button from "../Button"
import PortfolioSection from '../PortfolioSection/PortfolioSection'
function PortfolioPage() {
  return (
    <div className='w-full h-auto'>
        <section className="w-full flex justify-center items-center h-auto border-darkGray border-b-[1px]">
                <div className="w-[75%] mt-10 flex flex-col gap-y-2.5 justify-center items-center h-auto py-12">
                    <h1 className="text-[2.1rem] font-bold">A collection of my best projects</h1>
                    <p className="w-[70%] text-center">With many years in web development, I acquired extensive experience working on projects across multiple industries and technologies. Let me show you my best creations.</p>
                    <div className='w-[13%] gap-2 mt-1.5'>
                        <Button buttonText={"Hire Me"} buttonIcon={<IoIosSend />} />
                    </div>
                </div>
            </section>

             <section>
                    <div className="w-full h-auto flex justify-center items-center">
                      <PortfolioSection />
                    </div>
                </section>


    </div>
  )
}

export default PortfolioPage
