import React from 'react';
import './HeroSection.css';
import img1 from '../../Images/p1.png'
import img2 from '../../Images/p2.png'
import img3 from '../../Images/p3.png'
import img4 from '../../Images/p4.png'

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <span className="hero-tag">Empowering Staffing Firms with Top Tech Talent</span>
        <h1 className="hero-title">
        Begin sourcing   from
 where impossible becomes <span className="hero-highlight">inevitable </span>
        </h1>
        <p className="hero-sub">Empower your clients with contract-based tech experts, pre-screened for performance.

</p>
        <button className="hero-button">Start Sourcing Talent</button>
        <p className="hero-caption">We’re listening. What roles are you hiring for?</p>
      </div>

      <div className="hero-right marquee-container">
        <div className="marquee-columns">
          <div className="marquee-column marquee-up">
            <div className="block green"></div>
            <div className="card">
              <img src={img1} alt="Candidate 1" />
              {/* <div className="label">DevOps Engineer</div> */}
              {/* <div className="company">Placed at <img src="/slack-logo.png" alt="Slack" /></div> */}
            </div>
            <div className="card">
              <img src={img2} alt="Candidate 3" />
            </div>
            <div className="block green"></div>
          </div>
          <div className="marquee-column marquee-down">
            <div className="block orange"></div>
            <div className="card">
              <img src={img3} alt="Candidate 2" />
            </div>
            <div className="card">
              <img src={img4} alt="Candidate 4" />
            </div>
            <div className="block orange"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
