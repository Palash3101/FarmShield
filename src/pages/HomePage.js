import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AboutUs from '../components/AboutUs';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to FarmShield</h1>
      <p>Your AI-powered tool for disease detection and management in agriculture.</p>
      
      {/* Add the Diagnose Now button */}
      <Link to="/disease">
        <button className="diagnose-button">Diagnose Now</button>
      </Link>
      
      <AboutUs />
    </div>
  );
}

export default HomePage;
