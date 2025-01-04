import React from 'react'

function BlogsCard() {

    return (
        <div className='w-full h-auto rounded-lg overflow-hidden flex flex-col items-center group'>
            <div className="relative w-full h-auto">
                <img
                    className="rounded-lg w-full"
                    src="../../../src/assets/profilePicture/blogPicture.png"
                    alt=""
                />
                <div className="absolute inset-0 bg-lightGreen transform -translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-45 rounded-lg"></div>
            </div>

            <div className='w-[90%] h-auto py-5'>
                <p>April 18, 2024 &nbsp; / &nbsp; Articles</p>
                <div className='relative w-full h-auto'>
                    <h1 className='mt-1 w-full font-semibold lg:text-2xl text-[20px] transition-colors duration-500 ease-in-out group-hover:text-lightGreen'>
                        7 Great Web Development Languages to Learn this Year
                    </h1>
                </div>
            </div>
        </div>


    )
}

export default BlogsCard
