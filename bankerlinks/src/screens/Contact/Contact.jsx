import React from 'react'
import './Contact.css'
import ContactCard from '../../components/ContactCard/ContactCard'
import Icon1 from '../../assets/Icon7.png'
import Icon2 from '../../assets/Icon8.png'
import Icon3 from '../../assets/Icon9.png'

const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
      <div className='header'>
        <div className="header-container">
          <h2 className="header-text"> Contact </h2>
        </div>
        <p>Leave your contact info and we will be in touch shortly</p>
      </div>
      <div className='contacts-container'>
        <ContactCard
          pathToIcon={Icon1}
          header = "Visit us"
          text="BankerLinks s.à.r.l."
          contact="9, Rue du Laboratoire, L-1911 Luxembourg"
        />
        <ContactCard
          pathToIcon={Icon2}
          header = "Call us"
          text="We are available  for phone calls from Monday to Friday at 8AM to 6PM"
          contact=" +352 621 405 208"
        />
        <ContactCard
          pathToIcon={Icon3}
          header = "Contact us"
          text="Drop us an email at any time"
          contact="info@bankerlinks.com"
        />
      </div>
    </div>
  )
}

export default Contact