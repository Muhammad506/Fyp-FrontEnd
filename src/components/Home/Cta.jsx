import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Cta = () => {
  const [buttonRef, buttonInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Set up Intersection Observer hooks for the left and right content
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <main className="container pt-6 lg:pt-10 font-poppins bg-[#F7F7F7] flex flex-col items-center gap-10 px-4 mx-auto md:px-10 lg:px-20 lg:flex-row lg:items-start">
      {/* Left Content (Text & Button) */}
      <div
        ref={rightContentRef}
        className={`lg:w-1/2 space-y-8 transition-all self-center duration-1000 ${rightContentInView ? "animate-slideInLeft" : "opacity-0 translate-x-[50px]"}`}
      >
        <div className="space-y-4">
          <h1 className="text-[#5B9B37] text-sm md:text-base uppercase font-bold font-funnel tracking-wider">
            Take the Next Step</h1>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-tight md:tracking-wide w-full md:w-[70%] lg:w-[90%] xl:w-[80%] self-center flex font-krona text-black drop-shadow-md">
            Power that Doesn’t Cost the Earth
          </h2>
        </div>
        <p className="text-gray-700 text-justify text-base leading-relaxed sm:text-lg lg:text-xl lg:max-w-2xl">
          If  you have questions or need advice, we’re here to help. Click below to visit our Contact Us page and share your details. Let us know your requirements, and our team will respond promptly. Your journey to smarter solutions starts with a click. We’re here to support your goals!
        </p>
        <div>
          <Link to="/contact-us">
            <motion.button
              ref={buttonRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={buttonInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-[#5B9B37] to-[#4A8D2B] text-white px-8 py-3 rounded-full font-medium border-2  hover:border-[#5B9B37] shadow-lg transform transition-all duration-700 relative overflow-hidden group hover:bg-blue-900 hover:text-white hover:scale-105 hover:shadow-xl"
            >
              <span className="absolute inset-0 bg-white rounded-full transform scale-0 group-hover:scale-100 transition-all duration-700"></span>
              <span className="relative group-hover:text-[#5B9B37] text-sm lg:text-base transition-all text-nowrap duration-700">
                Let`s Connect
              </span>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Right Content (Image) */}
      <div
        ref={leftContentRef}
        className={`lg:w-1/2 flex justify-center items-center self-center transition-transform duration-1000 ${leftContentInView ? "animate-slideInRight" : "opacity-0 translate-x-[-50px]"}`}
      >
        <img
          className="w-full max-h-screen md:w-3/4 lg:w-11/12 transform transition-all duration-700"
          src="CTA.jpg"
          alt="CTA"
          loading="lazy"
        />
      </div>
    </main>

  );
};

export default Cta;
