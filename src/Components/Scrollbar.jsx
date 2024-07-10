import React from 'react'
import Bodypart from './Bodypart';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Scrollbar = ({data,bodypart,setBodypart}) => {
  return (
    <Carousel responsive={responsive}>
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
    </Carousel>
  )
}

export default Scrollbar