import React from 'react'
import ExerciseCard from '../Components/ExerciseCard';
import Loader from './Loader';
const SimilarExercises = ({exercises}) => {
  return (
    <>
    <h3 className='text-lg font-bold my-4'>Check Similar exercises</h3>
    <div className='flex flex-wrap gap-3'>
      {exercises.length>0?
      exercises.map((item,index)=>{
        return(
          <>
          <ExerciseCard key={index} item={item}/>
          </>
        )
      }):<Loader/>}
    </div>
    </>
  )
}

export default SimilarExercises