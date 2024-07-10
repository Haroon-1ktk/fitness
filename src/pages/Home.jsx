import React, { useState } from 'react'
import Banner from '../Components/Banner';
import  Searchbar from '../Components/Searchbar';
import Exercises from '../Components/Exercises';
const Home = () => {
  const [exercises,setExercises]=useState([]);
  const [bodypart,setBodypart]=useState('all');
  console.log('body',bodypart)
  return (
    <div>
      <Banner/>
      <Searchbar 
      bodypart={bodypart} 
      setBodypart={setBodypart}
      setExercises={setExercises}/>
      <Exercises
    exercises={exercises} 
      bodypart={bodypart}
      setExercises={setExercises}/>
    </div>
  )
}

export default Home