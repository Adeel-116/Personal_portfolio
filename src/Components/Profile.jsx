import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Icon from "../Components/Icon"

function Profile() {
    return (
        <>
            <div className='w-full h-auto flex flex-col justify-center items-center'>
                <div className="relative w-24 h-24 p-0.5 rounded-full  flex justify-center items-center">
                    <img
                        src="../../src/assets/profilePicture/pictures1.png"
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover border-2 border-lightGreen"
                    />

                    <div className='absolute h-8 w-8 bg-white bottom-2 right-0 rounded-full'>
                        <div className='flex justify-center items-center text-yellow-200 p-0.5'>
                            <img
                                src="../../src/assets/profilePicture/wave.png"
                                alt="Profile"
                                className="w-8 h-8  object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-center font-bold text-2xl'> Chris Evans</h1>
                    <p className='text-center font-light'>Senior Software Engineer</p>
                </div>

                <div className='icons flex flex-row gap-2 mt-1.5'>
                    <div>
                        <Icon iconName={<FaLinkedin />}/>
                    </div>
                    <div>
                        <Icon iconName={<FaGithub />}/>
                    </div>
                    <div>
                        <Icon iconName={<FaFacebookF />}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
