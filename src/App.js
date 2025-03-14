import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DiseasePage from './pages/DiseasePage';
import ReportsPage from './pages/ReportsPage';
import ProfilePage from './pages/ProfilePage';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="Navbar">
          <Navbar />
        </header>
        <main className="main-content">
          <div className="overlay">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/disease" element={<DiseasePage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </main>
        <footer className="Footer">
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
