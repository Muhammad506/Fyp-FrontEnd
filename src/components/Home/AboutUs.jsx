import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const AboutUS = () => {
  const [buttonRef, buttonInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main className="max-w-7xl container font-poppins pt-6 lg:pt-10 bg-[#F7F7F7] justify-between flex flex-col items-center gap-10 px-4 mx-auto md:px-10 lg:px-20 lg:flex-row lg:items-start">
      {/* Image Section */}
      <div
        ref={rightContentRef}
        className={`lg:w-[40%] flex justify-center items-center self-center transition-transform duration-1000 ${rightContentInView ? "animate-slideInLeft" : "opacity-0 translate-x-[-50px]"}`}
      >
        <img className="max-h-screen rounded-xl h-[450px] w-auto " src="about.jpg" alt="About Us" loading="lazy" />
      </div>

      {/* Content Section */}
      <div
        ref={leftContentRef}
        className={`lg:w-[55%] space-y-6 transition-all self-center duration-1000 ${leftContentInView ? "animate-slideInRight" : "opacity-0 translate-x-[50px]"}`}
      >
        <div className="space-y-4">
          <h1 className="text-[#5B9B37] text-sm md:text-base uppercase font-bold font-funnel tracking-wider">About Us</h1>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-tight md:tracking-wide w-full md:w-[70%] lg:w-[90%] xl:w-[80%] self-center flex font-krona text-black drop-shadow-md">
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
            <motion.button
              ref={buttonRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={buttonInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-[#5B9B37] to-[#4A8D2B] text-white px-8 py-3 rounded-full font-medium border-2  hover:border-[#5B9B37] transform transition-all duration-700 relative overflow-hidden group hover:bg-blue-900 hover:text-white hover:scale-105"
            >
              <span className="absolute inset-0 bg-white rounded-full transform scale-0 group-hover:scale-100 transition-all duration-700"></span>
              <span className="relative group-hover:text-[#5B9B37] text-sm lg:text-base transition-all text-nowrap duration-700">
                Discover More
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </main>

  );
};

export default AboutUS;
