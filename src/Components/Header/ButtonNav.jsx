import React, { useState } from 'react';
import {NavLink} from "react-router-dom"

function ButtonNav({ buttonText, buttonIcon, route}) {
    const [defaultColor, setDefaultColor] = useState("#DCDCDC");
    const [hovered, setHovered] = useState(false); 

    return (
       
        <div
            className='w-full rounded-[9px] lg:py-1.5 sm:py-3 sm:px-2 p-3 flex flex-row lg:gap-x-1 sm:gap-x-[1px]'
            style={{
                backgroundColor: hovered ? '#78aba8' : "",
            }}
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)} 
        >
            <div
                className={`font-bold flex items-center xl:text-[14px] lg:text-[13px] sm:text-[13px] text-[20px] ${hovered ? 'text-white' : defaultColor}`} 
            >
                {buttonIcon}
            </div>

            {/* Text */}
            <div className="sm:px-2 sm:block hidden">
                <p
                    className={`font-normal xl:text-[14px] lg:text-[13px] sm:text-[13px]  ${hovered ? 'text-white' : defaultColor}`}
                >
                    {buttonText}
                </p>
            </div>
        </div>
    );
}

export default ButtonNav;
