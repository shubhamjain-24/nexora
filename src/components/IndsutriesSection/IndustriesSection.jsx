import React from 'react';
import './IndustriesSection.css';
import { FaCode, FaDatabase, FaCloud, FaLock, FaRobot, FaServer } from 'react-icons/fa';

export default function IndustriesSection() {
  return (
    <section className="industries-wrapper">
      <div className="industries-card">
        <h2 className="industries-title">Industries We Serve</h2>
        <div className="industries-grid">
          <div className="industry-item">
            <FaCode className="industry-icon" />
            <span>Software Development</span>
          </div>
          <div className="industry-item">
            <FaDatabase className="industry-icon" />
            <span>Data Science</span>
          </div>
          <div className="industry-item">
            <FaCloud className="industry-icon" />
            <span>Cloud Computing</span>
          </div>
          <div className="industry-item">
            <FaLock className="industry-icon" />
            <span>Cybersecurity</span>
          </div>
          <div className="industry-item">
            <FaRobot className="industry-icon" />
            <span>AI/ML</span>
          </div>
          <div className="industry-item">
            <FaServer className="industry-icon" />
            <span>DevOps</span>
          </div>
        </div>
      </div>
    </section>
  );
}
