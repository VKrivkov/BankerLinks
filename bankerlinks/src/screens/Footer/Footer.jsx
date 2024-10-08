import React from 'react';
import './Footer.css';
import Logo from '../../assets/Logo.svg';
import F from '../../assets/Facebook.png';
import L from '../../assets/LinkedIn.png';
import T from '../../assets/Twitter.png';
import I from '../../assets/Instagram.png';

import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If already on the home page, just scroll to the section
      scrollToSection(sectionId);
    } else {
      // Navigate to home page and pass the target section
      navigate('/', { state: { targetSection: sectionId } });
    }
  };

  // Your existing scrollToSection function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Smooth scroll logic (unchanged)
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const smoothScroll = (targetPosition) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition - 140;
      const duration = 800;
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
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    };

    smoothScroll(sectionTop);
  };

  return (
    <div className='footer-container'>
      <div className='footer-first-level'>
        <div className='company-container'>
          {/* Wrap the logo in an <a> tag for full page reload */}
          <a href='/' aria-label="BankerLinks Home">
            <img src={Logo} alt="BankerLinks Logo" style={{ cursor: 'pointer' }} />
          </a>
          <p>BankerLinks s.à.r.l.</p>
          <div className='footer-icon-container' style={{ display: "flex", flexDirection: "row", gap: "25px", alignItems: "center" }}>
            <a href='https://www.facebook.com/BankerLinks/' target="_blank" rel="noopener noreferrer">
              <img className='contact-card-icon' style={{ maxWidth: "35px" }} src={F} alt="Facebook" />
            </a>
            <a href='https://lu.linkedin.com/company/bankerlinks' target="_blank" rel="noopener noreferrer">
              <img className='contact-card-icon' style={{ maxWidth: "35px" }} src={L} alt="LinkedIn" />
            </a>
            <a href='https://www.instagram.com/bankerlinks.lu/' target="_blank" rel="noopener noreferrer">
              <img className='contact-card-icon' style={{ maxWidth: "35px" }} src={I} alt="Instagram" />
            </a>
            <a href='http://www.twitter.com/bankerlinks' target="_blank" rel="noopener noreferrer">
              <img className='contact-card-icon' style={{ maxWidth: "35px" }} src={T} alt="Twitter" />
            </a>
          </div>
        </div>
        <div className='contact-info-container'>
          <h6>Contact us</h6>
          <p>info@bankerlinks.com</p>
          <p>+352 621 405 208</p>
          <span>9, Rue du Laboratoire,
          <p>L-1911 Luxembourg</p></span>
        </div>
        <div className='navigation-footer'>
          <a href="#home" onClick={(e) => handleNavigation(e, 'home')} className="footer-link">
            About
          </a>
          <a href="#features" onClick={(e) => handleNavigation(e, 'features')} className="footer-link">
            Features
          </a>
          <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')} className="footer-link">
            Contact
          </a>
        </div>
        <div className='nobody-reads-container'>
          <div>
            <Link to="/privacy-policy"> <p>Privacy Policy</p> </Link>
            <Link to="/cookies-policy"> <p>Cookies Policy</p> </Link>
          </div>
          <p className='Rights'>© 2024, All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
