import React from 'react'
import './Member.css'

const Member = ({name, position, p, color}) => {
  const borderBottomColor = `${color}`;

  return (
    <div className='member-card'>
      <div className='wrapper'>
        <div className='upper-text'>
          <h5 className='member-name'>{name}, <span>{position}</span></h5>
        </div>
        <p>{p}</p>
      </div>
      <div className='line-container' style={{borderBottomColor: borderBottomColor}} ></div>
    </div>
  )
}

export default Member