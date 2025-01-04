import React from 'react'
import BlogsCard from './BlogsCard'
import Heading from '../Heading'

function Blogs() {
  return (
    <div className='2xl:w-[80%] xl:w-[85%] w-[90%] flex flex-col h-auto py-10'>
      <Heading heading={"Latest Blog Posts"} paragraph={"More than 1500+ agencies using portfolio"} link={""}/>
        <div className='grid 2xl:grid-cols-3 sm:grid-cols-2  gap-5 py-12'>
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
        </div>
    </div>
  )
}

export default Blogs

