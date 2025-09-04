import React, { useState } from 'react';
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

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'jobs':
        return <JobsPage />;
      case 'home':
      default:
        return (
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
    }
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      {renderPage()}
      <FooterSection />
    </div>
  );
}

export default App;