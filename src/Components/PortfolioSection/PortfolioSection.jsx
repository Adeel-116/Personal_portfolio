import React from 'react'
import Heading from '../Heading'
import PortfolioCard from './PortfolioCard'

function PortfolioSection() {
  return (
    <div className='2xl:w-[80%] xl:w-[85%] w-[90%] flex flex-col h-auto py-10'>
      <Heading heading={"Featured Project"} paragraph={"My step-by-step guide ensures a smooth project journey, from the initial consultation to the final delivery. I take care of every detail, allowing you to focus on what you do best."} link={""}/>
       <div className='py-12 grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5'>
       <PortfolioCard />
       <PortfolioCard />
       <PortfolioCard />
       <PortfolioCard />
       <PortfolioCard />
       <PortfolioCard />
       </div>
    </div>
  )
}
 
export default PortfolioSection
