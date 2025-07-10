// servicesSection.jsx
import React from 'react';
import './ServicesSection.css';
import { FaBrain, FaChalkboardTeacher, FaMapSigns } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="icon"><FaBrain /></div>
          <h3>AI Resume Optimization</h3>
          <p>Our AI analyzes thousands of successful resumes to optimize yours for maximum impact</p>
          <ul>
            <li>Smart keyword optimization</li>
            <li>ATS-friendly formatting</li>
            <li>Industry-specific templates</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="icon"><FaChalkboardTeacher /></div>
          <h3>Career Coaching</h3>
          <p>One-on-one guidance from experienced tech recruiters and industry experts</p>
          <ul>
            <li>Personalized career strategy</li>
            <li>Mock interviews</li>
            <li>Salary negotiation training</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="icon"><FaMapSigns /></div>
          <h3>Job Search Strategy</h3>
          <p>Data-driven approach to finding and landing your dream tech role in America</p>
          <ul>
            <li>Market insights</li>
            <li>Company research</li>
            <li>Application optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;