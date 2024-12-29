import React, { useState } from 'react';

function ButtonNav({ buttonText, buttonIcon}) {
    const [defaultColor, setDefaultColor] = useState("#DCDCDC");
    const [hovered, setHovered] = useState(false); 

    return (
        <div
            className='w-full rounded-[9px] lg:py-1.5 md:py-3 px-2 flex flex-row lg:gap-x-1 md:gap-x-[1px]'
            style={{
                backgroundColor: hovered ? '#78aba8' : "",
            }}
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)} 
        >
            <div
                className={`font-bold flex items-center xl:text-[14px] lg:text-[13px] md:text-[14px] ${hovered ? 'text-white' : defaultColor}`} 
            >
                {buttonIcon}
            </div>

            {/* Text */}
            <div className="md:px-2 ">
                <p
                    className={`font-normal xl:text-[14px] lg:text-[13px] md:text-[14px] ${hovered ? 'text-white' : defaultColor}`}
                >
                    {buttonText}
                </p>
            </div>
        </div>
    );
}

export default ButtonNav;
