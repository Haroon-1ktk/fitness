import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className=' text-lg flex flex-row justify-around mt-3'>
      <Link to={'/'} className='font-bold'>Fitness Freak</Link>
      <div className='flex gap-3'>
        <NavLink to={'/'} className='px-4'>Home</NavLink>
        <NavLink to={'#excercises'}>Exercises</NavLink>
      </div>
    </div>
    </>
  )
}

export default Navbar
