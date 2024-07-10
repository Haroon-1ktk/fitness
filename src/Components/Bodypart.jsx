import React from 'react'
import { MdSportsGymnastics } from "react-icons/md";
const Bodypart = ({item,bodypart,setBodypart}) => {
  const handleClick = () => {
    setBodypart(item);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  }
  return (
  <>
  <div  
  className={`cursor-pointer w-64 h-72 ronded hover:scale-105 hover:ease-in-out transition-all ${bodypart === item ? 'border-t-2 border-red-500' : ''}`}
  onClick={handleClick}>
    <MdSportsGymnastics /><span className='font-bold text-xl '>{item}</span> </div>
  </>
  )
}

export default Bodypart