import React from 'react'
import './Features.css';
import { Feature } from '../../components/Feature/Feature';
import Icon1 from '../../assets/Icon4.png'
import Icon2 from '../../assets/Icon5.png'
import Icon3 from '../../assets/Icon6.png'


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
      <div className='card-container'>
        <Feature 
          header = "Counterparts Information"
          text="Find the right contact, access Standard Settlement Instructions (SSI), and track market deadlines for your transactions."
          pathToIcon={Icon1}
        />
        <Feature 
          header = "Broadcasts & News"
          text="Send out a broadcast to your most important counterparties, share important information about your company"
          pathToIcon={Icon2}
        />
        <Feature 
          header = "Events & Training"
          text="Find the trainings, conferences, and finance events to support your learning and growth."
          pathToIcon={Icon3}
        />
      </div>
    </div>
  )
}

export default Features