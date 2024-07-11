import React from 'react'
import Bodypart from './Bodypart';
import Loader from './Loader';

const Scrollbar = ({data,bodypart,setBodypart}) => {
  return (
    <div className='w-full grid grid-cols-3 gap-5 md:grid-cols-6'>
        {data.length>0?
        data.map(item=>{
           return(
           <>
            <div 
            key={item.id||item}
            title={item.id||item}
            itemID={item.id||item}>
            <Bodypart item={item} bodypart={bodypart} setBodypart={setBodypart}/>
            </div>
           </>
           )
      }):<Loader/>}
    </div>
  )
}

export default Scrollbar