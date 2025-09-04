import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (elementId) => {
    setIsOpen(false);
    
    // If we're not on homepage, navigate to homepage first
    if (location.pathname !== '/') {
      window.location.href = `/#${elementId}`;
      return;
    }
    
    // If we're on homepage, scroll to element
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleContactClick = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Nexoura
        </Link>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/jobs" 
                onClick={() => setIsOpen(false)}
              >
                Jobs
              </Link>
            </li>
            <li>
              <a 
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('services');
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#ai"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('ai');
                }}
              >
                Our AI Assistant
              </a>
            </li>
            <li>
              <a 
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('how-it-works');
                }}
              >
                The Nexoura Way
              </a>
            </li>
            <li className="mobile-only">
              <button className="outline-btn">+1 (352) 247-2292</button>
            </li>
            <li className="mobile-only">
              <button 
                className="solid-btn"
                onClick={handleContactClick}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-right desktop-only">
        <button className="outline-btn">+1 (352) 247-2292</button>
        <button 
          className="solid-btn"
          onClick={handleContactClick}
        >
          Contact Us
        </button>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}