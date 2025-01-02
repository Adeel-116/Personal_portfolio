import React from 'react'
import Button from '../../src/Components/Button'
import { IoIosSend } from 'react-icons/io'
import ServiceCard from './ServiceCard'
import FAQ from './FAQ'

function ServicesPage() {
    return (
        <main className="w-full min-h-screen">
            <section className="w-full flex justify-center items-center h-auto border-darkGray border-b-[1px]">
                <div className="w-[75%] mt-10 flex flex-col gap-y-2.5 justify-center items-center h-auto py-12">
                    <h1 className="text-[2.1rem] font-bold">Services & Pricing</h1>
                    <p className="w-[70%] text-center">I have 10+ years of development experience building software for the web and mobile devices. You can take a look at my <a href="#" className="text-teal-500">online resume</a> and <a href="#" className="text-teal-500">project portfolio</a> to find out more about my skills and experiences.</p>
                    <div className='w-[13%] gap-2 mt-1.5'>
                        <Button buttonText={"Hire Me"} buttonIcon={<IoIosSend />} />
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center items-center h-auto mt-12 py-0">
                <div className="w-[81%] h-auto py-0">
                    <div className="w-full flex flex-col">
                        <div className="w-full h-auto  border-l-4 border-lightGreen flex items-center">
                            <h1 className="pl-2.5 p-2 text-6xl text-black font-bold">Service Packages</h1>
                        </div>
                        <div>
                            <p className="text-gray-700 mt-2 text-[16px] font-normal w-[55%]">
                                Explore the range of services I provide to help bring your projects to life. From initial concept to final delivery, I am committed to delivering high-quality results tailored to your needs
                            </p>
                        </div>
                    </div>


                    <div className='w-full h-auto py-10 g-green-300'>
                        <div className='w-full flex gap-x-5'>
                            <ServiceCard />
                            <ServiceCard />
                            <ServiceCard />
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-full flex justify-center items-center h-auto border-darkGray border-b-[1px]">
                <div className="w-full flex flex-col gap-y-2.5 justify-center items-center h-auto py-8">
                    <h1 className="text-[2.1rem] font-bold">Want to hire me for custom package?
                    </h1>
                    <p className="w-[40%] text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className='w-[10%] gap-2 py-3'>
                        <Button buttonText={"Hire Me"} buttonIcon={<IoIosSend />} />
                    </div>
                </div>
            </section>


            <section className='w-full h-auto flex justify-center items-center'>
                <div className="w-[81%] h-auto py-16">
                    <div className="w-full flex flex-col">
                        <div className="w-full h-auto  border-l-4 border-lightGreen flex items-center">
                            <h1 className="pl-2.5 p-2 text-6xl text-black font-bold">Have any question?</h1>
                        </div>
                        <div>
                            <p className="text-gray-700 mt-2 text-[16px] font-normal w-[55%]">
                                You can use this section to address any queries your potential clients may have.
                            </p>
                        </div>
                    </div>




                    <div className='w-full h-auto flex justify-center items-center mt-10'>
                        <div className='w-1/2 py-16  h-uto'>
                            <FAQ />
                        </div>
                        <div className='w-1/2 p-1 flex justify-end  h-uto'>
                            <img src="../../../src/assets/profilePicture/FAQ_pic.webp" alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default ServicesPage
