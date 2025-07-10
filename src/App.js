import AISection from "./components/AISection/AISection";
import ContactSection from "./components/ContactSection/ContactSection";
import FooterSection from "./components/FooterSection/FooterSection";
import HeroSection from "./components/HeroSectoion/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import IndustriesSection from "./components/IndsutriesSection/IndustriesSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/Services/ServicesSection";
import SuccessStories from "./components/SuccessStories/SuccessStories";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <AISection/>
      <IndustriesSection/>
      <SuccessStories/>
      <HowItWorksSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
