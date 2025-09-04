import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page, elementId = null) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsOpen(false);
    
    // If we're navigating to an element on the homepage
    if (page === 'home' && elementId) {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a 
          href="#hero" 
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home', 'hero');
          }}
        >
          Nexoura
        </a>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#jobs"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('jobs');
                }}
              >
                Jobs
              </a>
            </li>
            <li>
              <a 
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home', 'services');
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
                  handleNavClick('home', 'ai');
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
                  handleNavClick('home', 'how-it-works');
                }}
              >
                The Nexoura Way
              </a>
            </li>
            <li className="mobile-only">
              <button className="outline-btn">+1 (352) 247-2292</button>
            </li>
            <li className="mobile-only">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home', 'contact');
                }}
              >
                <button className="solid-btn">Contact Us</button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-right desktop-only">
        <button className="outline-btn">+1 (352) 247-2292</button>
        <a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home', 'contact');
          }}
        >
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