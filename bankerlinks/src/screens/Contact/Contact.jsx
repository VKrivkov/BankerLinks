import React from 'react'
import './Contact.css'
import ContactCard from '../../components/ContactCard/ContactCard'
import Icon1 from '../../assets/Icon7.png'
import Icon2 from '../../assets/Icon8.png'
import Icon3 from '../../assets/Icon9.png'
import Location from '../../components/Location/Location'

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
      {/* <Location/> */}
      <iframe 
        loading="lazy" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.6699671533743!2d6.134122176507585!3d49.60397287144286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548ce66a88d57%3A0xf66509b7a650fb98!2s9%20Rue%20du%20Laboratoire%2C%201911%20Gare%20Luxembourg!5e0!3m2!1sru!2slu!4v1726846407947!5m2!1sru!2slu" 
        style={{ width: '100vw', height: '500px', border: 0 }} 
        allowFullScreen={true} 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}

export default Contact