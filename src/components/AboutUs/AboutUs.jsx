import CompanyOverview from "./CompanyOverview";
import WhyChooseUs from "./WhyChooseUs";
// import OurServices from "./OurServices";
import OurTeam from "./OurTeam";
import Contact from "./Contact";

const AboutUs = () => {
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
