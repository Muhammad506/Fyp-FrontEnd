import AboutUS from "./AboutUs";
import Cta from "./Cta";
import Faqs from "./Faqs";
import Features from "./Features";
import LandingPage from "./LandingPage";
import TechnologicalStack from "./TechnologicalStack";
import OurTeam from "../AboutUs/OurTeam";
// import ProjectComplexity from "./ProjectComplexity";
// import RegisterCTA from "./RegisterCTA";
// import SocietalImpact from "./SocietalImpact";

const HomePage = () => {
  return (
    <div className="bg-[#F7F7F7] ">
      <LandingPage />
      <AboutUS />
      <Cta />
      <TechnologicalStack />
      <Features />
      <Faqs />
      <OurTeam />
      {/* <ProjectComplexity /> */}
      {/* <SocietalImpact /> */}
      {/* <RegisterCTA /> */}
    </div>
  );
};

export default HomePage;
