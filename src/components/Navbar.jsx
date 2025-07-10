import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
       <a href="#hero" className="logo">Nexoura</a>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#ai">Our AI Assistant</a></li>
            <li><a href="#how-it-works">The Nexoura Way</a></li>
            <li className="mobile-only">
              <button className="outline-btn">+1 (352) 247-2292</button>
            </li>
            <li className="mobile-only">
              <a href="#contact">
                <button className="solid-btn">Contact Us</button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-right desktop-only">
        <button className="outline-btn">+1 (352) 247-2292</button>
        <a href="#contact">
          <button className="solid-btn">Contact Us</button>
        </a>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}
