import React from 'react'
import "./box.css";

const Box = ({items}) => {
    const {id , icon,title,paragraph} = items;
    
  return (
    <div className='box'>
        <div className='decomp m-4 '>
            <i className={icon + " icona"}></i>
            <h2>{title}</h2>
        </div>
        <p className='parag parag-1'>{paragraph}</p>
    </div>
  )
}

export default Box
