import React from 'react'
import { useState,useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { exerciseOptions,fetchData } from '../utiis/fetchData';
import ExerciseCard from './ExerciseCard';
import { Link } from 'react-router-dom';
const Exercises = ({exercises,setExercises,bodypart}) => {
  console.log(exercises)
  const [currentPage,setCurrentpage]=useState(1);
 
   // to show the exercise for selected bodypart
   useEffect(()=>{
    const fetchExercisesData=async()=>{
      let exercisesData=[]
      if(bodypart==='all'){
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,exerciseOptions)
      }else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`,exerciseOptions)
      }
      setExercises(exercisesData)
    }
    fetchExercisesData()
   },[bodypart])
  return (
    <div className='max-w-6xl mx-auto justify-center items-center p-5 mt-10 md:mt-28' id='excercises' name="excercises">
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
        {exercises.map((item,index)=>{
          return(
            <>
           <ExerciseCard item={item} key={index}/>
            </>
          )
        })}
      </div>
   
    </div>
  )
}

export default Exercises