import React from 'react'
import './Welcome.css';
import bankerlinks from '../../assets/bankerlinks.svg'
import Card from '../../components/Card/Card'
import Icon1 from '../../assets/Icon1.png'
import Icon2 from '../../assets/Icon2.png'
import Icon3 from '../../assets/Icon3.png'


const Welcome = ({}) => {
  return (
    <div className='welcome-container' id='home'>
      <div className='header'>
        <div className="header-container">
          <h2 className="header-text">
            Welcome to <span className="hidden-text"> BankerLinks </span>
          </h2>
          <div className="overlay">
            <img src={bankerlinks} alt="BankerLinks" className="overlay-image" />
          </div>
        </div>
        <p>The first collaboration app for the financial industry</p>
      </div>

      <div className='chat-container'>
        <div className='chat-question'>
          <h6>What is BankerLinks?</h6>
        </div>
        <p className='chat-answer'>BankerLinks is a secure <strong>collaboration platform</strong> for financial services to
             work together more efficiently and reduce risks. It helps <strong>manage transactions</strong>, <strong>share updates</strong>,
              and <strong>exchange documents</strong> safely, keeping finance professionals connected and informed.</p>
      </div>


      <div className='card-container'>      
        <Card
            header = "Collaborate"
            text = "BankerLinks allows secure collaboration between financial services across the financial industry."
            color='#2D3B97'
            pathToIcon = {Icon1}
        />
        <Card
            header = "Oversee transactions"
            text = "BankerLinks allows you to oversee transactions across all your counterparties and help you reduce operational issues."
            color='#EE220D'
            pathToIcon = {Icon2}
        />
        <Card
            header = "Get notified"
            text = "BankerLinks notifies you on important information updates within your financial services network."
            color='#2D3B97'
            pathToIcon = {Icon3}
        />
      </div>

    </div>
  )
}

export default Welcome