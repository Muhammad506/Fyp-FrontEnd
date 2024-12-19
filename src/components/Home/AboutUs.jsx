import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const AboutUS = () => {
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main className="container bg-[#F7F7F7] flex flex-col items-center gap-10 px-4  mx-auto mt-8 md:px-10 lg:px-20 lg:mt-16 lg:flex-row lg:items-start">
      {/* Image Section */}
      <div
        ref={rightContentRef}
        className={`lg:w-1/2 flex justify-center items-center self-center  transition-transform duration-1000 ${
          rightContentInView
            ? "animate-slideInLeft"
            : "opacity-0 translate-x-[-50px]"
        }`}
      >
        <img
          className="w-full max-h-screen rounded-lg  md:w-3/4 lg:w-11/12 transform hover:shadow-[#5B9B37]/30 hover:shadow-lg "
          src="about.jpg"
          alt="About Us"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div
        ref={leftContentRef}
        className={`lg:w-1/2 space-y-8 transition-all self-center duration-1000 ${
          leftContentInView
            ? "animate-slideInRight"
            : "opacity-0 translate-x-[50px]"
        }`}
      >
        <div className="space-y-4">
          <h1 className="text-lg font-semibold tracking-widest text-[#5B9B37] drop-shadow-sm md:text-xl lg:text-2xl font-funnel">
            About Us
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider md:tracking-widest text-gray-900 drop-shadow-md font-funnel">
            Get Connected for Enhanced Vision
          </h2>
        </div>
        <p className="text-gray-700 text-justify text-base leading-relaxed sm:text-lg lg:text-xl lg:max-w-2xl">
          At Solar Intelli Solutions, we specialize in innovative solar energy
          management systems designed to optimize energy efficiency and usage.
          Our platform provides a user-friendly interface to monitor and control
          solar panels in real-time, ensuring efficient and sustainable energy
          practices. With cutting-edge technologies and AI-driven insights, we
          are revolutionizing how solar energy is managed.
        </p>
        <div>
          <Link to="/about-us">
            <button className="relative px-6 py-3 text-white hover:scale-95 duration-700 font-semibold bg-gradient-to-r from-[#5B9B37] to-[#4A8D2B] hover:bg-[#4a8c2c] rounded-full shadow-lg  transition-transform  ">
              Learn More
              <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-all duration-300 group-hover:opacity-10"></span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutUS;
