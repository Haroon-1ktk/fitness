import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex flex-row justify-around'>
      <h1>Logo</h1>
      <div className='flex gap-3'>
        <NavLink to={'/'} className='px-4'>Home</NavLink>
        <NavLink to={'#excercises'}>Exercises</NavLink>
      </div>
    </div>
    </>
  )
}

export default Navbar