import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className='flex flex-row w-[100%] justify-center items-center'>
    <InfinitySpin color='gray'/>
    </div>
  )
}

export default Loader