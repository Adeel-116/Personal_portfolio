import React from 'react'
import { IoIosSend } from 'react-icons/io'
import ProfilePicture from '../ProfilePicture'
import DetailsInfo from "../DetailsInfo"
import Button from '../Button'
import App from '../../App'
import ContactPage from "../ContactPage/ContactPage"
import Blogs from "../Blogs/Blogs"
import Testimonial from "../Testimonial/Testimonial"
import BgPicture from "../BgPicture"
import PortfolioSection from "../PortfolioSection/PortfolioSection"


function Main_Component() {
    return (
        <div >
            <main className="xl:w-[83%] lg:w-[75%] h-auto xl:ml-[17%] lg:ml-[25%]">
                <section className="flex justify-center items-center xl:h-screen lg:h-auto  w-full flex-col">
                    <div className="2xl:w-[80%] lg:w-[85%] md:w-[80%] xl:mt-0 lg:mt-20  h-auto py-4 flex xl:flex-row md:flex-col lg:gap-y-6">
                        <div className="xl:w-[60%] md:w-[100%] h-auto xl:py-7 md:py-14">
                            <div className="flex flex-col justify-center">
                                <h1 className="2xl:text-[21px] md:text-[21px] font-medium text-gray-600">HI, I’M A FREELANCER</h1>
                                <h2 className="2xl:text-7xl md:text-6xl font-bold text-lightGreen">Developer</h2>
                                <p className="text-gray-700 mt-4 md:text-[17px] font-medium">
                                    I’m a software engineer specializing in scalable web apps. <br />
                                    Explore my <a href="#" className="text-teal-500 underline">blog</a>, <a href="#" className="text-teal-500 underline">project portfolio</a>, and <a href="#" className="text-teal-500 underline">online resume</a>.
                                </p>

                                <div className="w-full h-auto py-7 flex gap-7">
                                    <div className="2xl:w-[180px] md:w-[165px]">
                                        <Button buttonText={"View Portfolio"} buttonIcon={<IoIosSend />} />
                                    </div>
                                    <div className="2xl:w-[180px] md:w-[165px]">
                                        <Button buttonText={"View Resume"} buttonIcon={<IoIosSend />} />
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="xl:w-[40%] lg:w-[100%] h-auto flex xl:justify-end md:justify-center">
                            <ProfilePicture />
                        </div>
                    </div>

                    <div className="xl:w-[80%] md:w-[90%] flex xl:mt-0 md:mt-7 gap-x-8 h-auto ">
                        <DetailsInfo number={"5"} text={"Years of Experience"} />
                        <DetailsInfo number={"110"} text={"Project Complete"} />
                        <DetailsInfo number={"6K"} text={"Clinet Worldwide"} />
                    </div>

                    <span className="w-full h-0.5 bg-lightGreen mt-20"></span>
                </section>


                <section className="h-screen w-full flex justify-center items-center">
                    <div className="w-[80%] h-auto flex">

                        <div className="w-full h-auto  flex flex-row">
                            <div className="w-[80%] h-auto  ">
                                <div className="w-full flex flex-col">
                                    <div className="w-1/3 h-auto  border-l-4 border-lightGreen flex items-center ">
                                        <h1 className="pl-2.5 p-1 text-6xl text-black font-bold">What I do</h1>
                                    </div>
                                    <div>
                                        <p className="text-gray-700 mt-2 text-[16px] font-medium w-[77%]">
                                            I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my<a href="#" className="text-teal-500 underline"> online resume</a>, <a href="#" className="text-teal-500 underline">project portfolio</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[20%] h-full flex justify-end py-3 items-end ">
                                <div className="w-[90%] ">
                                    <Button buttonText={"View Resume"} buttonIcon={<IoIosSend />} />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                <section className="w-full h-auto flex">
                    <BgPicture />
                </section> 

                <section className="testimonial w-full h-auto mt-32">
                    <Testimonial />
                </section>


                <section>
                    <div className="w-full h-auto mt-32 flex justify-center items-center">
                        <Blogs />
                    </div>
                </section>

                <section>
                    <div className="w-full h-auto mt-32 flex justify-center items-center">
                        <PortfolioSection />
                    </div>
                </section>

                 <ContactPage />
            </main>
        </div>
    )
}

export default Main_Component
