import { useInView } from "react-intersection-observer";

const SocietalImpact = () => {
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main className="bg-[#F7F7F7] py-20">
      <div className=" container bg-[#F7F7F7]  flex flex-col-reverse lg:flex-row  gap-8 items-center px-4 md:px-10 lg:px-20 mx-auto  space-y-8  lg:mt-16   lg:items-start lg:space-y-0">
        {/* Left Content (Image) */}
        <div
          ref={leftContentRef}
          className={`lg:w-1/2 my-4 flex self-center  md:w-9/12 lg:my-0 md:p-6 p-0 ${
            leftContentInView ? "animate-slideInLeft" : "opacity-0"
          }`}
        >
          <img
            className="w-full lg:w-11/12 max-h-screen  rounded-lg shadow-xl transform  hover:scale-110 transition duration-1000"
            src="https://green.org/wp-content/uploads/2024/01/Solar-Energy-and-Environmental-Impact-Assessment.jpg"
            alt="Solar Energy and Environmental Impact"
          />
        </div>

        {/* Right Content (Text & Button) */}
        <div
          ref={rightContentRef}
          className={`lg:w-1/2 space-y-6 lg:space-y-8 flex flex-col self-center lg:pl-8 ${
            rightContentInView ? "animate-slideInRight" : "opacity-0"
          }`}
        >
          <h className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800">
            Societal Impact
          </h>
          <p className="text-base sm:text-lg lg:text-xl max-w-full text-justify lg:max-w-2xl text-gray-700">
            Solar Intelli Solutions is designed to enhance the efficiency and
            management of solar energy systems, contributing to a cleaner and
            greener environment. Our platform allows users to monitor solar
            panel performance, track energy usage, and reduce energy wastage. By
            enabling precise control over individual solar plates, we promote
            sustainable energy practices that benefit both users and the
            environment.
          </p>
          {/* <div className="flex justify-start">
            <button className="relative bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] text-white transition duration-300 ease-in-out rounded-full text-base px-8 py-4 font-semibold shadow-md transform hover:scale-105 overflow-hidden">
              <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-30 transition duration-300"></span>
              <span className="relative">Contact Us Today</span>
            </button>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default SocietalImpact;
