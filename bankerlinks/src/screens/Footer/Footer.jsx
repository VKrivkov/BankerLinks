import React from 'react';
import "./Footer.css";
import Logo from "../../assets/Logo.svg"


const Footer = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
  
    // Calculate the position of the section
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    console.log('Section ID:', sectionId, 'Section Top:', sectionTop);

    // Define the smooth scroll function
    const smoothScroll = (targetPosition) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Duration of the scroll animation in milliseconds
      let startTime = null;
  
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const nextScrollPosition = ease(timeElapsed, startPosition, distance, duration);
  
        window.scrollTo(0, nextScrollPosition);
  
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
  
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      requestAnimationFrame(animation);
    };
  
    // Execute the smooth scroll function
    smoothScroll(sectionTop);
  };

  return (
    <div className='footer-container'>
      <div className='footer-first-level'>
        <div className='company-container'>
          <img onClick={() => scrollToSection('home')} src={Logo} alt="Logo" />
          <p>BankerLinks s.à.r.l.</p>
        </div>
        <div className='contact-info-container'>
          <h6>Contact us</h6>
          <p>info@bankerlinks.com</p>
          <p>+352 621 405 208</p>
          <p>9, rue du Laboratoire, L-​1911 Luxembourg</p>
        </div>
        <div className='navigation-footer'>
          <a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home');}} className="footer-link">About</a>
          <a href="#price" onClick={(e) => {e.preventDefault(); scrollToSection('team');}} className="footer-link">Team</a>
          <a href="#gallery" onClick={(e) => {e.preventDefault(); scrollToSection('features');}} className="footer-link">Features</a>
          <a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact');}} className="footer-link">Contact</a>
        </div>
        <div className='nobody-reads-container'>
          <div>
            <a href='https://www.termsfeed.com/live/d0d010f5-8595-402f-9861-1c7a2983e992'><p>Privacy Policy</p></a>
            <a href='https://www.termsfeed.com/live/bf129419-7b70-4169-9545-0031703c1caa'><p>Terms & Conditions</p></a>
          </div>
          <p className='Rights'>© 2024, All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
