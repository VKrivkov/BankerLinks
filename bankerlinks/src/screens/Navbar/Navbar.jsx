import React, { useState }  from 'react';
import './Navbar.css';
import Logo from "../../assets/Logo.png"
import BurgerIcon from '../../assets/BurgerIcon.svg'; // Path to burger menu icon
import CloseIcon from '../../assets/CloseIcon.svg'; // Path to close menu icon




const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
  
    // Calculate the position of the section
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    console.log('Section ID:', sectionId, 'Section Top:', sectionTop);

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
    <div className={`navbar ${isMenuOpen ? "show" : ""}`}>
      <div className='navbar-brand'>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={`navbar-center ${isMenuOpen ? "show" : ""}`}>
        <a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home');}} className="nav-link">About</a>
        <a href="#price" onClick={(e) => {e.preventDefault(); scrollToSection('team');}} className="nav-link">Team</a>
        <a href="#gallery" onClick={(e) => {e.preventDefault(); scrollToSection('features');}} className="nav-link">Features</a>
        <a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact');}} className="nav-link1"><strong style={{color: "#fff", padding: "10px 60px", borderRadius: "10px", background: "linear-gradient(0deg, #2D3B97 0%, #2D3B97 100%)"}}>Contact</strong></a>
      </div>

      <div className="burger-menu" onClick={toggleMenu}>
          <img src={isMenuOpen ? CloseIcon : BurgerIcon} alt="Menu" className="menu-icon" />
        </div>
    </div>
  );
};



export default Navbar;
