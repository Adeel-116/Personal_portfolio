import React from 'react'

function TestimonialCard({name}) {
    return (
        <div className='w-[25%] h-auto bg-lightWhite flex-shrink-0'>
            <div className='w-full h-full border-l-[3.5px] py-10 flex flex-col gap-y-5 items-center justify-center border-lightGreen'>
                <div className='text w-[85%]  text-xl select-none'>
                    <h1>Portfolio is the perfect theme for business that want to create a stylish and functional website</h1>
                </div>

                <div className='w-[85%] h-auto flex flex-row items-center'>
                    <div className="w-[48px] h-[48px] bg-yellow-800 bg-center rounded-full ">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src="../../../src/assets/profilePicture/testimonialPicture.png"
                            alt="Testimonial"
                        />
                    </div>
                    <div className='py-1 px-2'>
                        <h1 className='font-medium'>Jenny Wilson</h1>
                        <p className='text-[14px] font-medium'>{name}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
