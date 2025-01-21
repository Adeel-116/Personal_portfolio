import React from 'react'
import Button from '../Button'
import { IoIosSend } from 'react-icons/io'
import ServiceCard from './ServiceCard'
import FAQ from './FAQ'

function ServicesPage() {
    return (
        <main className="w-full min-h-screen">
            <section className="w-full flex justify-center items-center h-auto border-darkGray border-b-[1px]">
                <div className="2xl:w-[75%] xl:w-[90%]  mt-10 flex flex-col gap-y-2.5 justify-center items-center h-auto py-12">
                    <h1 className="text-[2.1rem] font-bold">Services & Pricing</h1>
                    <p className="lg:w-[70%] sm:w-[90%] w-[95%] sm:text-[16px] text-[15px] text-center">I have 10+ years of development experience building software for the web and mobile devices. You can take a look at my <a href="#" className="text-teal-500">online resume</a> and <a href="#" className="text-teal-500">project portfolio</a> to find out more about my skills and experiences.</p>
                    <div className='2xl:w-[150px] lg:w-[130px] w-[150px] gap-2 mt-1.5'>
                        <Button buttonText={"Hire Me"} buttonIcon={<IoIosSend />} />
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center items-center h-auto mt-12 py-0">
                <div className="xl:w-[80%] w-[90%]  h-auto py-0">
                    <div className="w-full flex flex-col">
                        <div className="w-full h-auto  border-l-4 border-lightGreen flex items-center">
                            <h1 className="pl-2.5 p-2 sm:text-6xl text-5xl text-black font-bold">Service Packages</h1>
                        </div>
                        <div>
                            <p className="text-gray-700 mt-2 sm:text-[16px] text-[15px] font-normal 2xl:w-[55%] xl:w-[85%]">
                                Explore the range of services I provide to help bring your projects to life. From initial concept to final delivery, I am committed to delivering high-quality results tailored to your needs
                            </p>
                        </div>
                    </div>


                    <div className='w-full h-auto py-10 g-green-300'>
                        <div className='w-full flex xl:flex-nowrap flex-wrap xl:gap-x-5 gap-3 justify-center'>
                            <ServiceCard />
                            <ServiceCard />
                            <ServiceCard />
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-full flex justify-center items-center h-auto border-darkGray border-b-[1px]">
                <div className="xl:w-[80%] w-[90%]   flex flex-col gap-y-2.5 justify-center items-center h-auto py-8">
                    <h1 className="text-[2.1rem] font-bold">Want to hire me for custom package?
                    </h1>
                    <p className="xl:w-[40%] sm:w-[70%] w-[100%] sm:text-[16px] text-[14px] sm:text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className='w-[130px] gap-2 py-3'>
                        <Button buttonText={"Hire Me"} buttonIcon={<IoIosSend />} />
                    </div>
                </div>
            </section>


            <section className='w-full h-auto flex justify-center items-center'>
                <div className="xl:w-[80%] w-[90%]  h-auto py-16">
                    <div className="w-full flex flex-col">
                        <div className="w-full h-auto border-l-4 border-lightGreen flex items-center">
                            <h1 className="pl-2.5 p-2 md:text-6xl sm:text-5xl text-4xl text-black font-bold">Have any question?</h1>
                        </div>
                        <div>
                            <p className="text-gray-700 mt-2 text-[16px] font-normal md:w-[55%] w-[100%]">
                                You can use this section to address any queries your potential clients may have.
                            </p>
                        </div>
                    </div>




                    <div className='w-full  h-auto flex md:justify-center md:items-center sm:mt-10 mt-5' >
                        <div className='md:w-1/2 sm:w-[70%] w-[100%] sm:py-16 py-5  h-uto'>
                            <FAQ />
                        </div>
                        <div className='md:w-1/2 md:block hidden p-1 sm:flex justify-end  h-uto'>
                            <img src="../../../src/assets/FAQ_pic.webp" alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default ServicesPage
