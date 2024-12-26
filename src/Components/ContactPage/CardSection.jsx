import React from 'react'
import CustomSVG from './CustomSVG';

function CardSection({text, para, path}) {


    

    return (
        <div className='w-full h-auto py-5'>
            <div className='w-full py-3 flex border-l-[1px] border-lightGreen'>

                <div className=" flex">
                    <div className='px-4'>
                    <CustomSVG fill="#78aba8" width="3rem" height="4.7rem" stroke="" strokeWidth="1" svgPath={path}/>
                    </div>
                    <div className='w-full flex flex-col'>
                        <h1 className='font-medium text-2xl'>{text}</h1>
                        <p className='text-[14px] font-normal mt-1.5'>{para}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSection
