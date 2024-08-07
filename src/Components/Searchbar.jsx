import React, { useEffect, useState } from 'react'
import { fetchData,exerciseOptions } from '../utiis/fetchData';
import Scrollbar from './Scrollbar';


const Searchbar = ({setExercises,setBodypart,bodypart}) => {
  const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
  const [search,setSearch]=useState('');
  const [bodyparts,setBodyparts]=useState([]);

  //we will fetch the bodyparts in useEffect
  useEffect(()=>{
    const fetchExerciseData=async()=>{
      const bodypartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      setBodyparts([...bodypartsData])
    }
    fetchExerciseData()
  },[])

  const handleSearch=async()=>{
 if (search){
  const exerciseData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,exerciseOptions)
 
  const searchedexercises=exerciseData.filter((exercise)=>exercise.name.toLowerCase().includes(search)
  ||exercise.bodyPart.toLowerCase().includes(search)
  ||exercise.target.toLowerCase().includes(search)
  ||exercise.equipment.toLowerCase().includes(search)
 );
 setSearch("");
 setExercises(searchedexercises)
 }
  }
 
  return (
    <>
    <div className='mt-4'>
      <h1 className='text-center font-bold mb-6 text-xl md:text-6xl'>Awesome Exercises You<br/>Should Know</h1>
      <div className='flex flex-row justify-center items-center'>
     <input 
     type="text"  
     value={search}
     onChange={(e)=>setSearch(e.target.value.toLowerCase())}
     placeholder='Search Exercises'
     className='md:w-[800px] w-48 pl-2 bg-white rounded placeholder:text-gray-400 outline-none border-2 border-gray-400 h-10'/>
     <button 
     onClick={handleSearch}
     className='hover:border-2 border-gray-400 bg-red-600 text-white rounded px-6 py-2 hover:bg-white hover:text-red-600'>Search</button>
        </div>
        <div className='mt-20'>       
         
          <Scrollbar 
          data={bodyparts} 
          bodypart={bodypart} 
          setBodypart={setBodypart} 
          setExercises={setExercises}/>
        
        </div>
    </div>
    </>
  )
}

export default Searchbar