import { useEffect } from "react";
import AboutUS from "./AboutUs";
import Cta from "./Cta";
import Faqs from "./Faqs";
import Features from "./Features";
import LandingPage from "./LandingPage";
import TechnologicalStack from "./TechnologicalStack";
import OurTeam from "../AboutUs/OurTeam";
import Contact from "../AboutUs/Contact";

const HomePage = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F7F7F7] scroll-smooth">
      <LandingPage />
      <AboutUS />
      <Cta />
      <TechnologicalStack />
      <Features />
      <Faqs />
      <Contact />
      <OurTeam />
    </div>
  );
};

export default HomePage;
