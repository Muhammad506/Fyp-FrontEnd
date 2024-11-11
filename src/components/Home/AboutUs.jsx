import { useInView } from "react-intersection-observer";
import { MdCallMade } from "react-icons/md";
import { Link } from "react-router-dom";

const AboutUS = () => {
  // Use Intersection Observer to detect if the component is in view
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main className=" container bg-[#F7F7F7] pt-20 flex flex-col gap-8 items-center px-4 md:px-10 lg:px-20 mx-auto mt-8 space-y-8  lg:mt-16  lg:flex-row lg:items-start lg:space-y-0">
      <div
        ref={leftContentRef}
        className={`lg:w-1/2 space-y-6 lg:space-y-8 lg:pr-10 ${
          leftContentInView ? "animate-slideInLeft" : "opacity-0"
        }`}
      >
        <h className="text-3xl md:text-4xl xl:text-5xl  font-bold text-gray-800  ">
          About Us
        </h>
        <p className="max-w-full text-base text-gray-700 text-justify sm:text-lg lg:text-xl lg:max-w-2xl">
          At Solar Intelli Solutions, we specialize in innovative solar energy
          management systems designed to optimize energy efficiency and usage.
          Our platform provides a user-friendly interface to monitor and control
          solar panels in real-time, ensuring efficient and sustainable energy
          practices. With cutting-edge technologies and AI-driven insights, we
          are revolutionizing how solar energy is managed.
        </p>
        <div className="flex justify-start">
          <Link to="/about-us">
            <button className="services gap-2 relative flex justify-between items-center overflow-hidden rounded-full lg:rounded-sm  px-6 py-3 lg:px-4 lg:py-4  border-2 border-gray-900 bg-yellow-400  font-semibold z-10 snap-center text-black  group">
              <span className="relative z-10">Learn About Solar Energy</span>
              <MdCallMade className="relative z-10" />
              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-[#021430] transition-all duration-500 group-hover:h-full"></span>
              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 delay-75 border-[#021430] transition-all duration-500 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 delay-100 border-[#021430] transition-all duration-500 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 delay-150 border-[#021430] transition-all duration-500 group-hover:h-full"></span>
            </button>
          </Link>
        </div>
      </div>
      <div
        ref={rightContentRef}
        className={`lg:w-1/2 items-center flex justify-center self-center ${
          rightContentInView ? "animate-slideInRight" : "opacity-0"
        }`}
      >
        <img
          className="w-full md:w-3/4 items-center flex justify-center self-center lg:w-11/12 max-h-screen  rounded-lg shadow-xl transform  hover:scale-110 transition duration-1000"
          src="AboutUs.jpg"
          alt="About Us"
        />
      </div>
    </main>
  );
};

export default AboutUS;
