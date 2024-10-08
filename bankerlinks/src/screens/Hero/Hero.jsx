import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container' id="hero">
      <div className='image-container'> 
        <div className='headline-container'>
          <div className='group-header-container'>
            <h1 className='headline'>CREATE BUSINESS OPPORTUNITIES</h1>
            <h2 className='sub-headline'>REDUCE FINANCIAL OPERATIONAL RISKS</h2>
          </div>
        </div>
        <div className="scroll-indicator">
            <p className='ScrollText'>SCROLL DOWN</p>
            <div className='line'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero