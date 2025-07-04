import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
      
        'Agentic AI enthsiasist',
        1000, 
        'MERN Stack Developer',
        1000,
        'Graphic Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      className= "xl:text-[50px] lg:text-[40px] sm:text-[30px] text-[25px] text-white"
      repeat={Infinity}
    />
  )
}

export default TypeWriteEffect