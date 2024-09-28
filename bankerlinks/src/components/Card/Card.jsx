import React from 'react'
import "./Card.css"

const Card = ({header, text, color, pathToIcon}) => {
  const borderBottomColor = `${color}`;
  
  return (
    <div className='welcome-card-container'>
      <div className='card-text' style={{borderBottomColor: borderBottomColor}}>
        <h5>{header}</h5>
        <p>{text}</p>
      </div>
        <img className='card-icon' src={pathToIcon} alt={header}/>
    </div>
  )
}

export default Card
