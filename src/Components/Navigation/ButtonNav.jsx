import React from 'react'

function ButtonNav({ buttonText, buttonIcon, bgColor}) {
    return (
        <div className='w-full rounded-[9px] py-1.5 px-3 flex flex-row gap-x-1' 
        style={{ backgroundColor: bgColor ? '#78aba8' : ''}}
        >
            <div className={`font-bold flex items-center ${bgColor ? 'text-white' : 'text-black'} text-[13px]`}>
                {buttonIcon}
            </div>

            {/* Text */}
            <div className="px-2">
                <p className={`font-normal text-[1rem] ${bgColor ? 'text-white' : 'text-black'} `}>{buttonText}</p>
            </div>
        </div>
    )
}

export default ButtonNav
