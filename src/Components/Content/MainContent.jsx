import React from 'react'
import { IoIosSend } from 'react-icons/io'
import ProfilePicture from '../ProfilePicture'
import DetailsInfo from "../DetailsInfo"
import Button from '../Button'
import ContactPage from "../ContactPage/ContactPage"
import Blogs from "../Blogs/Blogs"
import Testimonial from "../Testimonial/Testimonial"
import BgPicture from "../BgPicture"
import PortfolioSection from "../PortfolioSection/PortfolioSection"
import TechnicalSkills from '../TechnicalSkills'
import CardSection from '../CardSection'
import App from '../../App'
import Heading from '../Heading'


function Main_Component() {
    return (
        <div>
            <main className="xl:w-[83%] lg:w-[75%] h-auto xl:ml-[20%] 2xl:ml-[17%] lg:ml-[25%] ">
                <section className="flex justify-center items-center xl:h-screen sm:h-auto  w-full flex-col">
                    <div className="2xl:w-[80%] lg:w-[85%] sm:w-[83%] w-[90%] xl:mt-0 lg:mt-20  h-auto py-4 flex xl:flex-row flex-col lg:gap-y-6">
                        <div className="xl:w-[60%] sm:w-[100%] h-auto xl:py-7 py-14">
                            <div className="flex flex-col justify-center">
                                <h1 className="2xl:text-[21px] sm:text-[21px] font-medium text-gray-600">HI, I’M A FREELANCER</h1>
                                <h2 className="2xl:text-7xl sm:text-6xl text-5xl font-bold text-lightGreen">Developer</h2>
                                <p className="text-gray-700 mt-4 md:text-[17px] text-[15px] font-medium">
                                    I’m a a passionate web and app developer with a strong foundation in modern technologies and development practices. With a focus on creating responsive, user-friendly interfaces and efficient backend systems, I specialize in web development, and mobile applications solutions. I aim to provide tailored solutions that help businesses thrive in the digital world
                                    Explore my <a href="#" className="text-teal-500 underline">blog</a>, <a href="#" className="text-teal-500 underline">project portfolio</a>, and <a href="#" className="text-teal-500 underline">online resume</a>.
                                </p>

                                <div className="w-full h-auto py-7 flex flex-wrap sm:gap-7">
                                    <div className="2xl:w-[175px]  w-[165px]">
                                        <Button buttonText={"View Portfolio"} buttonIcon={<IoIosSend />} />
                                    </div>
                                    <div className="2xl:w-[175px] sm:w-[165px] sm:block hidden">
                                        <Button buttonText={"View Resume"} buttonIcon={<IoIosSend />} />
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="xl:w-[40%] lg:w-[100%] h-auto flex xl:justify-end justify-center">
                            <ProfilePicture />
                        </div>
                    </div>

                    <div className="xl:w-[80%] w-[90%] flex flex-wrap xl:mt-0 md:mt-7 gap-x-8 h-auto ">
                        <DetailsInfo number={"5"} text={"Years of Experience"} />
                        <DetailsInfo number={"110"} text={"Project Complete"} />
                        <DetailsInfo number={"6K"} text={"Clinet Worldwide"} />
                    </div>

                    <span className="w-full h-0.5 bg-lightGreen xl:mt-20 mt-5"></span>
                </section>


                <section className="h-auto w-full flex justify-center items-center">
                    <div className="2xl:w-[80%] xl:w-[85%] w-[90%] h-auto xl:py-0 pt-16">
                        <Heading heading={"What I do"} paragraph={"  I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my"} link={"yes"} />
                        <CardSection />
                        <TechnicalSkills />
                    </div>
                </section>



                <section className="w-full h-auto flex">
                    <BgPicture />
                </section>

                <section className="testimonial w-full h-auto ">
                    <Testimonial />
                </section>


               

                <section>
                    <div className="w-full h-auto flex justify-center items-center">
                      <PortfolioSection />
                    </div>
                </section>


                <section>
                    <div className="w-full h-auto flex justify-center items-center">
                        <Blogs />
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Main_Component
