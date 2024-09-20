import React from 'react'
import './Feature.css'

export const Feature = ({header, text, pathToIcon}) => {
  return (
    <div className='feature-card-container'>
        <div className='feature-head'>
            <img className='feature-icon' src={pathToIcon} alt={header}/>
            <h5>{header}</h5>
        </div>
        <p>{text}</p>
    </div>
  )
}
