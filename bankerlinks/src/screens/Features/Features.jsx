import React from 'react'
import './Features.css';

const Features = () => {
  return (
    <div className='features-container' id = "features">
      <div className='header'>
        <div className="header-container">
          <h2 className="header-text"> Features </h2>
        </div>
        <p>Increase your productivity and take instant actions</p>
      </div>
      <div className='chat-container'>
        <div className='chat-question'>
          <h6>Why BankerLinks?</h6>
        </div>
        <p className='chat-answer'>The platform is designed to <strong>increase productivity</strong> and reduce risks in the 
        financial industry. Its powerful features, like <strong>counterpart information</strong> lookup, <strong>broadcasts and news</strong> and 
        various <strong>events and trainings</strong>, make it an essential tool for finance professionals.</p>
      </div>
    </div>
  )
}

export default Features