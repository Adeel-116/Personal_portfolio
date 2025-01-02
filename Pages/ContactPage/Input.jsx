import React from 'react'


function Input({type, placeholder}) {
  return (
    <div className="w-1/2 h-auto">
        <input
        type={type}
        placeholder={placeholder}
        className="w-full py-3 font-medium px-3 border-[1px] border-darkGray focus:outline-none focus:ring-2 focus:ring-lightGreen"
    />
    </div>
  )
}

export default Input
