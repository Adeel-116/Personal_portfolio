import React from 'react'

function TagsButton({Text}) {
  return (
    <div className='inline-block'>
    <p className='px-3 py-1 text-[13px] rounded-2xl border-[1px] border-black'>
      {Text}
    </p>
  </div>
  )
}
 
export default TagsButton
