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
            <button className="relative bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] text-white transition duration-700 ease-in-out rounded-full text-base px-8 py-4 font-semibold shadow-md transform hover:scale-105 overflow-hidden">
              <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-30 transition duration-300"></span>
              <span className="relative flex gap-3">
                Register <MdCallMade className="size-5  " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default RegisterCTA;
