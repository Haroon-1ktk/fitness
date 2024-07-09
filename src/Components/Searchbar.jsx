import React, { useState } from 'react'

const Searchbar = () => {
  const [search,setSearch]=useState('');
  const handleSearch=()=>{

  }
  return (
    <>
    <div>
      <h1 className='text-center mb-6 text-6xl'>Awesome Exercises You<br/>Should Know</h1>
      <form className='flex justify-center items-center' onSubmit={handleSearch}>
     <input 
     type="text"  
     value={search}
     onChange={(e)=>setSearch(e.target.value.toLowerCase())}
     placeholder='Search Exercises'
     className='md:w-[800px] w-64 pl-2 bg-white rounded placeholder:text-gray-400 outline-none border-2 border-gray-400 h-10'/>
     <button className='hover:border-2 border-gray-400 bg-red-600 text-white rounded px-6 py-2 hover:bg-white hover:text-red-600'>Search</button>
        </form>
    </div>
    </>
  )
}

export default Searchbar