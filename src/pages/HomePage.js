import React from 'react';
//import './HomePage.css';
import AboutUs from '../components/AboutUs';


function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to FarmShield</h1>
      <p>Your AI-powered tool for disease detection and management in agriculture.</p>
      <AboutUs />
    </div>
  );
}

export default HomePage;
