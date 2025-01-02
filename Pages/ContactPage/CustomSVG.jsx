import React from 'react'

function CustomSVG({ fill = "#78aba8", width = "3.2rem", height = "3.2rem", stroke = "currentColor", strokeWidth = "0", svgPath=""}) {
  return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill={fill}
            width={width}
            height={height}
            stroke={stroke}
            strokeWidth={strokeWidth}
        >
            {svgPath}
        </svg>
  
  )
}

export default CustomSVG
