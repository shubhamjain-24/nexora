import React from 'react';
import { FaUsers, FaBolt, FaFileAlt, FaComments, FaRocket } from 'react-icons/fa';
import './HowItWorksSection.css'; // Make sure to include the CSS shared earlier

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <FaUsers />,
      title: 'Initial Assessment',
      description: 'We understand your background and goals',
    },
    {
      icon: <FaBolt />,
      title: 'Strategy Planning',
      description: 'Custom career path development',
    },
    {
      icon: <FaFileAlt />,
      title: 'Resume Enhancement',
      description: 'AI-powered resume optimization',
    },
    {
      icon: <FaComments />,
      title: 'Interview Prep',
      description: 'Realistic practice sessions',
    },
    {
      icon: <FaRocket />,
      title: 'Job Placement',
      description: 'Success guaranteed or free',
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How It Works</h2>
      <div className="how-cards">
        {steps.map((step, index) => (
          <div className="how-card" key={index}>
            <div className="how-icon">{step.icon}</div>
            <div className="how-title">{step.title}</div>
            <div className="how-desc">{step.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
