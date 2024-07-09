import React from 'react'

const Scrollbar = ({data}) => {
  return (
    <div>
        {data.map(item=>{
           return(
           <>
            <div 
            key={item.id||item}
            title={item.id||item}
            itemId={item.id||item}>
                {item}
            </div>
           </>
           )
      })}
    </div>
  )
}

export default Scrollbar