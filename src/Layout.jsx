import React,{useEffect} from 'react'
import Header from "./Components/Header/Header"
import Loading from "./Components/Loading"


export default function Layout({ children }) {
     const  [loading, setLoading] = React.useState(true);
    
        useEffect(()=>{
            setTimeout(()=>{
                setLoading(false)
            }, 3000)
        },)

    return (
        <div>
            {loading ? <Loading /> :
            <div className="w-full min-h-screen bg-white overflow-hidden">
                <Header />
                <main className='xl:w-[83%] lg:w-[75%] h-auto xl:ml-[20%] 2xl:ml-[17%] lg:ml-[25%] '>{children}</main>
            </div>
}
        </div>
    )
}
