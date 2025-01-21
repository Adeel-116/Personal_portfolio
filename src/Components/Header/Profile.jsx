import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Icon from '../Icon';
import wave from '../../assets/wave.png'
import personalPhoto from '../../assets/Picture.png'
function Profile() {
    return (
        <>
            <div className='w-full h-auto flex flex-col justify-center items-center'>
                <div className="relative w-24 h-24 p-0.5 rounded-full  flex justify-center items-center">
                    <img
                        src={personalPhoto}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover border-2 border-lightGreen"
                    />

                    <div className='absolute h-8 w-8 bg-white bottom-2 right-0 rounded-full'>
                        <div className='flex justify-center items-center text-yellow-200 p-0.5'>
                            <img
                                src={wave}
                                alt="Profile"
                                className="w-8 h-8  object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-center font-medium text-2xl'>M.Adeel</h1>
                    <p className='text-center font-light 2xl:text-[16px] xl:text-[14px]'>Software Developer</p>
                </div>

                <div className='icons flex flex-row gap-2 mt-1.5'>
                    <div>
                        <Icon iconName={<CiLinkedin />}/>
                    </div>
                    <div>
                        <Icon iconName={<FaGithub />} />
                    </div>
                    <div>
                        <Icon iconName={<CiFacebook />} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
