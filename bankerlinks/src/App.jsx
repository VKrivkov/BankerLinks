import React from 'react';

import './App.css'
import { Features, Footer, Navbar, Hero, Team, Welcome, Contact } from './screens';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Team/>
      <Features/>
      <Contact/>
      <Footer/>
    </>
          
  );

}

export default App
