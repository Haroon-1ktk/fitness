import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <section className='flex flex-col md:flex-row'>
    <div className='mt-24 ml-12 w-[550px]'>
      <div >
        <h1 className='text-red-600 text-lg pb-1 font-semibold'>Fitness Club</h1>
        <h2 className='font-bold text-xl mb-6 mt-7'>Sweat,Smile and Repeat</h2>
         <p className='pb-1'>Check out the most effective exercises</p>
         <Link to={'#exercises'}>
         <button className='mt-4 bg-red-500 text-white rounded px-4 py-2'>Checkout exercises</button>
         </Link>
         <h1 className='md:block text-red-200 hidden text-[200px]'>Excercises</h1>
      </div>
    </div>
  <div className='mt-4 w-[750px]'>
  <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   alt="Fitness Freek" 
   className='h-[500px] w-full z-20 rounded bg-cover'/>
  </div>
    </section>
    </>
  )
}

export default Banner