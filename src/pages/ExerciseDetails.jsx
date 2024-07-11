import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {exerciseOptions,fetchData,youtubeOptions} from '../utiis/fetchData';
import Details from '../Components/Details';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';
const ExerciseDetails= () => {
  const [exercisesdetails,setExercisesdetails]=useState({});
  const [exercisevideos,setExercisevideos]=useState([]);
  const [targetmuscleexercises,setTargetmuscleexercises]=useState([]);
  const {id}=useParams();
  useEffect(()=>{
    const fetchexercisesData=async ()=>{
    const exerciseDburl='https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
    const exercisesData=await fetchData(`${exerciseDburl}/exercises/exercise/${id}`,exerciseOptions);
    setExercisesdetails(exercisesData);
    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exercisesData.name} exercise`, youtubeOptions);
      setExercisevideos(exerciseVideosData.contents);
      const targetmusles=await fetchData(`${exerciseDburl}/exercises/target/${exercisesData.target}`,exerciseOptions);
     setTargetmuscleexercises(targetmusles)
    }
    fetchexercisesData()
  },[id])
  return (
    <>
    <Details exercisesdetails={exercisesdetails}/>
    <ExerciseVideos exercisevideos={exercisevideos} name={exercisesdetails.name}/>
    <SimilarExercises exercises={targetmuscleexercises}/>
    </>
  )
}

export default ExerciseDetails