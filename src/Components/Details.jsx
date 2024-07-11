import React from 'react'

const Details = ({exercisesdetails}) => {
  const {name,bodyPart,equipment,gifUrl,target}=exercisesdetails;
  return (
   <>
   <div className='flex md:flex-row flex-col justify-center items-center mt-24 gap-8'>
    <img src={gifUrl} alt={name} loading='lazy' className='rounded bg-transparent'/>
    <div className='flex flex-col'>
      <h1 className='font-bold text-xl p-2 capitalize'>{name}</h1>
      <p className='font-semibold text-gray-400 p-2'>Exercise keeps you strongs {name}{' '}<br/>
      is one of the best exercises to target your{target}.it will help you<br/>
      improve your mood and gain energy</p>
    </div>
   </div>
   </>
  )
}

export default Details