import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Icon from "../Icon"
import CardSection from './CardSection';
import Input from './Input'
import Button from '../Button';
function ContactPage() {
    const svgPath = {
        phone: (
            <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM140,60a12,12,0,1,1-12-12A12,12,0,0,1,140,60Z" />
        ),
        location: (
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z" />
        ),
        Email: (
            <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z" />
        ),
    };

    return (
        <main className="w-full min-h-screen">
            <section className="w-full flex justify-center items-center h-auto border-darkGray border-b-[1px]">
                <div className="w-[75%] mt-10 flex flex-col gap-y-2.5 justify-center items-center h-auto py-12">
                    <h1 className="text-[2.1rem] font-bold">Contact</h1>
                    <p className="w-[70%] text-center">Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to <a href="#" className="text-teal-500 underline">evans@yourwebsite.com</a>. Want to get connected? Follow me on the social channels below.</p>
                    <div className='icons flex flex-row gap-2 mt-1.5'>
                        <div>
                            <Icon iconName={<FaLinkedin />} />
                        </div>
                        <div>
                            <Icon iconName={<FaGithub />} />
                        </div>
                        <div>
                            <Icon iconName={<FaFacebookF />} />
                        </div>
                    </div>

                </div>
            </section>

            <section className="w-full flex justify-center items-center h-auto py-12">
                <div className="w-[81%] h-auto">
                    <div className="w-full flex flex-col">
                        <div className="w-full h-auto  border-l-4 border-lightGreen flex items-center ">
                            <h1 className="pl-2.5 p-2 text-6xl text-black font-bold">Contact Details</h1>
                        </div>
                        <div>
                            <p className="text-gray-700 mt-2 text-[16px] font-normal w-[55%]">
                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            </p>
                        </div>
                    </div>



                    <div className='w-full h-auto flex space-x-4 py-10'>
                        <CardSection text={"Phone"} para={"+92 3112126587"} path={svgPath.phone} />
                        <CardSection text={"Location"} para={"Example street, Pakistan"} path={svgPath.location} />
                        <CardSection text={"Email"} para={"adeel@gmail.com"} path={svgPath.Email} />
                    </div>


                    <div className='w-full h-[45vh]'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7058099.341989812!2d63.69565314443664!3d30.255961609064105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1735029041003!5m2!1sen!2s" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                    <div className="w-full flex flex-col py-20">
                        <div className="w-full h-auto  border-l-4 border-lightGreen flex items-center ">
                            <h1 className="pl-2.5 p-2 text-6xl text-black font-bold">Get in Touch</h1>
                        </div>
                        <div>
                            <p className="text-gray-700 mt-2 text-[16px] font-normal w-[55%]">
                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            </p>
                        </div>
                    </div>



                    <div className='w-full h-auto py-10 px-10 border-[1px] border-darkGray rounded-[30px]'>

                        <div className='w-full flex flex-col gap-y-7 h-auto p-1'>
                            <div className='w-full flex gap-x-7 h-auto'>
                                <Input type={"text"} placeholder={"Your Name*"} />
                                <Input type={"text"} placeholder={"Your Email*"} />
                            </div>
                            <div className='w-full flex gap-x-7 h-auto'>
                                <Input type={"phone"} placeholder={"Phone*"} />
                                <Input type={"text"} placeholder={"Location*"} />
                            </div>

                            <div className='w-full h-48'>
                                <textarea
                                    className="w-full font-medium h-full px-3 py-3 border-[1px] border-darkGray rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-lightGreen"
                                    placeholder="Your Message:"
                                    value=""
                                    readOnly
                                ></textarea>
                            </div>

                            <div className='w-[15%] h-auto'>
                                <Button buttonText={"Send Message"} buttonIcon={""}/>
                            </div>
                        </div>

                    </div>


                </div>


            </section>


        </main>
    )
}

export default ContactPage
