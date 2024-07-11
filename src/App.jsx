import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
const App = () => {
  return (
    <>
    <div className='max-w-6xl mx-auto'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exercise/:id' element={<ExerciseDetails/>}/>
    </Routes>
    </div>
     <Footer/>
     </>
  )
}

export default App