import React from 'react';
import './AISection.css';
import img1 from '../../Images/img1.png'

export default function AISection() {
  return (
    <section id="ai" className="ai-section">
      <div className="ai-content">
        <div className="ai-text">
          <h2 className="ai-title">Meet Our AI Career Assistant</h2>
          <p className="ai-subtext">
            Our advanced AI analyzes millions of job postings and successful applications to provide personalized
            recommendations and insights.
          </p>
          <ul className="ai-list">
            <li>Analyze your resume against job requirements</li>
            <li>Generate personalized interview questions</li>
            <li>Predict success rates for different positions</li>
            <li>Optimize your job search strategy</li>
          </ul>
          <button className="ai-button">Try AI Tool</button>
        </div>
        <div className="ai-image-wrapper">
          <div className="ai-image">
            <img src={img1} alt="AI Tool Dashboard" />
            <div className="ai-badge">
              <div className="ai-badge-top">98%</div>
              <div className="ai-badge-bottom">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
