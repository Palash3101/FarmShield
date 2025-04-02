import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/"><b>Home</b></Link></li>
        <li><Link to="/disease"><b>Disease Diagnosis</b></Link></li>
        <li><Link to="/reports"><b>Reports</b></Link></li>
        <li><Link to="/profile"><b>Profile</b></Link></li>
        <li><Link to="/login"><b>Login</b></Link></li> {/* Login link */}
      </ul>
    </nav>
  );
}

export default Navbar;
