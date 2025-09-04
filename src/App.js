import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AISection from "./components/AISection/AISection";
import ContactSection from "./components/ContactSection/ContactSection";
import FooterSection from "./components/FooterSection/FooterSection";
import HeroSection from "./components/HeroSectoion/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import IndustriesSection from "./components/IndsutriesSection/IndustriesSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/Services/ServicesSection";
import SuccessStories from "./components/SuccessStories/SuccessStories";
import JobsPage from "./components/JobPage/JobsPage";
import JobApplicationForm from "./components/JobPage/JobApplicationForm";

// Homepage component
const HomePage = () => (
  <>
    <HeroSection />
    <ServicesSection />
    <AISection />
    <IndustriesSection />
    <SuccessStories />
    <HowItWorksSection />
    <ContactSection />
  </>
);

// Job application page wrapper
const JobApplicationPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const jobKey = urlParams.get('job') || 'python';
  
  return <JobApplicationForm jobKey={jobKey} />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/apply" element={<JobApplicationPage />} />
        </Routes>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;