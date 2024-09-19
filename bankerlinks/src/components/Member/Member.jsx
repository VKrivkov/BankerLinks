import React from 'react'
import './Member.css'

const Member = ({name, position, p, color}) => {
  const borderBottomStyle = `5px solid ${color}`;

  return (
    <div className='member-card'>
      <div className='wrapper'>
        <div className='upper-text'>
          <h5>{name},</h5>
          <h6>{position}</h6>
        </div>
        <p>{p}</p>
      </div>
      <div className='line-container' style={{borderBottom: borderBottomStyle}} ></div>
    </div>
  )
}

export default Member