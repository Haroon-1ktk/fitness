import React from 'react'
import Bodypart from './Bodypart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const Scrollbar = ({data,bodypart,setBodypart}) => {
  return (
    <ScrollMenu>
        {data.map(item=>{
           return(
           <>
            <div 
            key={item.id||item}
            title={item.id||item}
            itemId={item.id||item}>
                <Bodypart item={item} bodypart={bodypart} setBodypart={setBodypart}/>
            </div>
           </>
           )
      })}
    </ScrollMenu>
  )
}

export default Scrollbar