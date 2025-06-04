import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../assets/images/Logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  //states for burger menu

  const toggleMenu = () => setIsOpen(!isOpen);  //toggles mobile menu
  const closeMenu = () => setIsOpen(false);  //closes menu

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" aria-label="Logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>

      {/*Burger menu */}
      <button
        className={`burger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
      >
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>

      <nav className={`navbar ${isOpen ? "active" : ""}`} aria-label="Primary navigation">
        <ul className="nav-list" id="primary-navigation">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/standings" onClick={closeMenu}>Standings</Link></li>
          <li><Link to="/profile" onClick={closeMenu}>Profile</Link></li>
          <li><Link to="/schedule" onClick={closeMenu}>Race Schedule</Link></li>
          <li><Link to="/predictions" onClick={closeMenu}>Predictions</Link></li>
          <li><Link to="/archives" onClick={closeMenu}>Archives</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
