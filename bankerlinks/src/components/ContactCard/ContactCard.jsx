import React from 'react'
import './ContactCard.css'

const ContactCard = ({pathToIcon, header, text, contact}) => {
  return (
    <div className='contact-card-container'>
        <div className='upper-part'>
            <img className='contact-card-icon' src={pathToIcon} alt={header}/>
            <div className='contact-card-text'>
                <h5>{header}</h5>
                <p>{text}</p>
            </div>
        </div>
        <p>{contact}</p>
    </div>
  )
}

export default ContactCard