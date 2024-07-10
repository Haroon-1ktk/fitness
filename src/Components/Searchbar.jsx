import React, { useEffect, useState } from 'react'
import { fetchData,exerciseOptions } from '../utiis/fetchData';
import Scrollbar from './Scrollbar';
import Empty from './Empty';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

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
    <div>
      <h1 className='text-center mb-6 text-6xl'>Awesome Exercises You<br/>Should Know</h1>
      <div className='flex justify-center items-center'>
     <input 
     type="text"  
     value={search}
     onChange={(e)=>setSearch(e.target.value.toLowerCase())}
     placeholder='Search Exercises'
     className='md:w-[800px] w-64 pl-2 bg-white rounded placeholder:text-gray-400 outline-none border-2 border-gray-400 h-10'/>
     <button 
     onClick={handleSearch}
     className='hover:border-2 border-gray-400 bg-red-600 text-white rounded px-6 py-2 hover:bg-white hover:text-red-600'>Search</button>
        </div>
        <div className='w-[400rem] mt-20'>       
         <Carousel responsive={responsive}>
          <Scrollbar 
          data={bodyparts} 
          bodypart={bodypart} 
          setBodypart={setBodypart} 
          setExercises={setExercises}/>
        </Carousel>
        </div>
    </div>
    </>
  )
}

export default Searchbar