import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';
import './FooterSection.css';

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand + Social */}
        <div className="footer-brand">
          <h2 className="footer-logo">Nexoura</h2>
          <p className="footer-desc">
            Connecting global talent to top U.S. tech roles through expert consulting and AI-driven solutions.
          </p>
          <div className="footer-socials">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#ai">The Nexoura Way</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <a href="tel:+13522472292" className="footer-contact-item">
            <FiPhone className="footer-icon" />
            +1 (352) 247-2292
          </a>
          <a href="mailto:info@Nexoura.tech" className="footer-contact-item">
            <FiMail className="footer-icon" />
            info@Nexoura.tech
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nexoura. All rights reserved.</p>
         <p className="footer-subtext">An initiative by <strong>Braincrafters Pvt. Ltd.</strong></p>
      </div>
    </footer>
  );
}
