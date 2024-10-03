// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png';
import BurgerIcon from '../../assets/BurgerIcon.svg';
import CloseIcon from '../../assets/CloseIcon.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    if (isMenuOpen) toggleMenu(); // Close the menu if it's open
    if (location.pathname === '/') {
      // If already on the home page, just scroll to the section
      scrollToSection(sectionId);
    } else {
      // Navigate to home page and pass the target section
      navigate('/', { state: { targetSection: sectionId } });
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Calculate the position of the section
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;

    // Define the smooth scroll function
    const smoothScroll = (targetPosition) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition - 140;
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
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    };

    // Execute the smooth scroll function
    smoothScroll(sectionTop);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'show' : ''}`}>
      <div className="navbar-brand">
        {/* Wrap the logo in an <a> tag for full page reload */}
        <a href="/" aria-label="BankerLinks Home">
          <img src={Logo} alt="BankerLinks Logo" style={{ cursor: 'pointer' }} />
        </a>
      </div>
      <div className={`navbar-center ${isMenuOpen ? 'show' : ''}`}>
        <a
          href="#home"
          onClick={(e) => handleNavigation(e, 'home')}
          className="nav-link"
        >
          About
        </a>
        {/* <a href="#price" onClick={(e) => {e.preventDefault(); scrollToSection('team'); toggleMenu();}} className="nav-link">Team</a> */}
        <a
          href="#features"
          onClick={(e) => handleNavigation(e, 'features')}
          className="nav-link"
        >
          Features
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavigation(e, 'contact')}
          className="nav-link1"
        >
          <strong className="contact-button">
            Contact
          </strong>
        </a>
      </div>

      <div className="burger-menu" onClick={toggleMenu}>
        <img
          src={isMenuOpen ? CloseIcon : BurgerIcon}
          alt="Menu"
          className="menu-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
