import React from 'react'

const ExerciseVideos = ({exercisevideos,name}) => {
  
  return (
    <div className='mb-4'>
      <h1 className='text-center text-2xl capitalize font-bold mt-14'>Watch <span className='text-[#ff2625]'>{name}</span> exercise videos</h1>
      <div className='flex gap-3 mt-10 flex-wrap justify-start items-center'>
      {exercisevideos.slice(0,6).map((item,index)=>{
         return(
         <>
         <a
       rel='noreffer' 
       key={index}
       href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
       target='_blank'>
        <img src={item.video.thumbnails[0].url} alt={item.video.title} className='rounded-md w-72'/>
        <div className='flex flex-col'>
          <h5 className='font-semibold text-slate-800'>{item.video.title.slice(0,15)}...</h5>
          <h5 className='text-sm font-semibold text-slate-400'>{item.video.channelName}</h5>
        </div>
        </a>
        </>
         )
         })}
      </div>
    </div>
  )
}

export default ExerciseVideos