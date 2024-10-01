import React, { useEffect } from 'react';
import './App.css';
import { Features, Footer, Navbar, Hero, Team, Welcome, Contact, PrivacyPolicy, CookiesPolicy, NotFoundPage } from './screens';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const targetSection = location.state?.targetSection;
    if (targetSection) {
      // Use your custom scroll function
      scrollToSection(targetSection);
    }
  }, [location]);

  // Custom smooth scroll function
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

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ScrollHandler />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Welcome />
                {/* <Team /> */}
                <Features />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <Navbar />
                <PrivacyPolicy />
                <Footer />
              </>
            }
          />
          <Route
            path="/cookies-policy"
            element={
              <>
                <Navbar />
                <CookiesPolicy />
                <Footer />
              </>
            }
          />
          <Route path="*" element={
            <>
              <Navbar />
              <NotFoundPage />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;