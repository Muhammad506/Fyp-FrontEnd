import CompanyOverview from "./CompanyOverview";
import WhyChooseUs from "./WhyChooseUs";
// import OurServices from "./OurServices";
import OurTeam from "./OurTeam";
import Contact from "./Contact";
import { useEffect } from "react";

const AboutUs = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F7F7F7] ">
      <CompanyOverview />
      <WhyChooseUs />
      {/* <OurServices /> */}
      <Contact />
      <OurTeam />
    </div>
  );
};

export default AboutUs;
