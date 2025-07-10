
import React from 'react';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section id="contact"className="contact-wrapper">
      <div className="contact-card">
        {/* LEFT: Motivational Quote */}
        <div className="contact-left">
          <h2 className="contact-title">Talk to Us</h2>
          <p className="contact-quote">
            Have a question, an idea, or a hiring need? We’d love to hear from you.
          </p>
        </div>

        {/* RIGHT: Form */}
        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
