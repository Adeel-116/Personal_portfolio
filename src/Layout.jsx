import React from 'react'
import Header from "./Components/Header/Header"
export default function Layout({ children }) {
    return (
        <div>
            <div className="w-full min-h-screen bg-white overflow-hidden">
                <Header />
                <main className='xl:w-[83%] lg:w-[75%] h-auto xl:ml-[20%] 2xl:ml-[17%] lg:ml-[25%] '>{children}</main>
            </div>
        </div>
    )
}
