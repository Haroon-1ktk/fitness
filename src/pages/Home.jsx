import React from 'react'
import Banner from '../Components/Banner';
import  Searchbar from '../Components/Searchbar';
import Exercises from '../Components/Exercises';
const Home = () => {
  return (
    <div>
      <Banner/>
      <Searchbar/>
      <Exercises/>
    </div>
  )
}

export default Home