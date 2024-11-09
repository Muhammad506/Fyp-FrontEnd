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
            <button className="relative bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430]  rounded-3xl md:text-base px-6 py-3 md:font-bold font-semibold text-sm text-white transition duration-700 ease-in-out    transform hover:scale-105 overflow-hidden  focus:outline-none">
              <span className="absolute inset-0 transition duration-300 bg-blue-800 opacity-0 group-hover:opacity-30"></span>
              <span className="relative flex gap-3">
                Learn About Solar Energy <MdCallMade className="size-5 " />{" "}
              </span>
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
