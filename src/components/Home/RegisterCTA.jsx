import { useInView } from "react-intersection-observer";
import { MdCallMade } from "react-icons/md";
import { Link } from "react-router-dom";

const RegisterCTA = () => {
  // Using Intersection Observer for the main content
  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the container is visible
  });

  return (
    <main className="bg-[#F7F7F7] py-20">
      <div
        ref={containerRef}
        className={`flex flex-col items-start  text-left px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16 max-w-6xl mx-auto transition-opacity duration-1000 ${
          containerInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <h className="text-3xl md:text-4xl flex flex-col md:flex-row gap-2 xl:text-5xl font-bold text-gray-800 mb-6 md:mb-8 -ml-1 md:-ml-0 lg:mb-10 ">
          <span>Get Started with </span>
          <span className="text-nowrap"> Solar Intelli Solutions</span>
        </h>
        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 lg:mb-10 text-justify text-gray-700">
          Join us in transforming the way solar energy is managed. Whether you
          are a homeowner looking to reduce your energy bills, a business aiming
          to improve energy efficiency, or a community seeking to harness the
          full potential of renewable energy, Solar Intelli Solutions is here to
          guide you every step of the way. Our innovative platform not only
          helps you monitor and manage your solar energy systems in real-time
          but also ensures that you are making sustainable and impactful choices
          for a greener future.
        </p>
        <div className="flex w-full justify-start">
          <Link to="/register">
            <button className="services gap-2 relative flex justify-between items-center overflow-hidden  rounded-full lg:rounded-sm  px-6 py-3 lg:px-3 lg:py-3  border-2 border-gray-900 bg-yellow-400  font-semibold z-10 snap-center text-black  group">
              <span className="relative z-10">Register</span>
              <MdCallMade className="relative z-10" />
              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-[#021430] transition-all duration-500 group-hover:h-full"></span>
              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 delay-75 border-[#021430] transition-all duration-500 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 delay-100 border-[#021430] transition-all duration-500 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 delay-150 border-[#021430] transition-all duration-500 group-hover:h-full"></span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default RegisterCTA;
