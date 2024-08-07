import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({key,item,type}) => {
  return (
    <Link to={`/exercise/${item.id}`} key={key}>
        <div className={`border-t-2  border-gray-400 rounded border-b-2 pb-4 `}>
        <img src={item.gifUrl} alt={item.name} loading='lazy'/>
        <div className='flex flex-row gap-2 -mt-8 pb-4'>
        <button className='bg-pink-300 text-white rounded px-2 py-1'>{item.bodyPart}</button>
        <button className='bg-yellow-300  text-white rounded px-2 py-1'>{item.target}</button>
        </div>
        <h1 className='mt-3 font-bold capitalize text-xl '>{item.name}</h1>
        </div>
       
    </Link>
  )
}

export default ExerciseCard