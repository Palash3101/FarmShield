import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/disease">Disease Diagnosis</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
