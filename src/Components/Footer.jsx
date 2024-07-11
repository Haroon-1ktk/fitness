import React from 'react'
import { GiMuscleUp } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='w-full bg-pink-200 py-5'>
      <div className='flex justify-center items-center flex-col'>
        <div className='text-lg font-extrabold text-amber-950 flex justify-center items-center'>
          <GiMuscleUp/>
          <h3>Fitness Freak</h3>
          </div>
        <div className='text-base text-amber-600 flex justify-center items-center'>
          <h1>Made with</h1> <FaHeart/><h1 className='pl-1'>by Haroon</h1></div>
      </div>
    </div>
  )
}

export default Footer