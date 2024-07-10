import React from 'react'
import Bodypart from './Bodypart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const Scrollbar = ({data,bodypart,setBodypart}) => {
  return (
    <div>
        {data.map(item=>{
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
      })}
    </div>
  )
}

export default Scrollbar