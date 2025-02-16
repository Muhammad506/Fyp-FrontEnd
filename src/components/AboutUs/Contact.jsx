import { IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [buttonRef, buttonInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="py-6 md:py-10 px-4 md:px-8 xl:px-12 flex flex-col justify-center items-center">
      <section className="relative text-white bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] px-8 py-4 md:py-0 rounded-3xl shadow-lg flex flex-col items-center overflow-hidden">
        <div className="container sm:px-2 md:px-8 lg:px-12 xl:px-16 mx-auto flex flex-col md:flex-row items-center gap-2 md:gap-12">
          {/* Text Content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: -50 }}
            animate={textInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 space-y-6 text-center lg:text-left"
          >
            <h1 className="text-[#EAB308]  text-sm md:text-base uppercase font-bold md:text-left w-full md:w-[80%] font-funnel tracking-wider">
              Contact Us to Explore How We Can Help!
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl  2xl:text-4xl tracking-tight md:tracking-wide w-full md:w-[80%] lg:w-[90%] xl:w-[80%] sm:text-center  md:text-left  self-center flex font-krona text-white drop-shadow-md">
              We’re pleased to be welcoming customers to join us.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
              {/* Button 1: Dark Blue to White on Hover */}
              <motion.button
                ref={buttonRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={buttonInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] text-white px-8 py-3 rounded-full font-medium border-2 hover:border-[#EAB308]   shadow-lg transform transition-all duration-700 relative overflow-hidden group hover:bg-blue-900 hover:text-white hover:scale-105 hover:shadow-xl"
              >
                <span className="absolute inset-0 bg-white rounded-full transform scale-0 group-hover:scale-100 transition-all duration-700"></span>
                <span className="relative group-hover:text-blue-900 text-sm lg:text-base transition-all text-nowrap duration-700">
                  Request a Quote
                </span>
              </motion.button>

              {/* Button 2: White to Dark Blue on Hover */}
              <motion.button
                ref={buttonRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={buttonInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-medium border-2 border-[#EAB308]  hover:border-white shadow-lg transform transition-all duration-700 relative overflow-hidden group hover:bg-blue-900 hover:text-white hover:scale-105 hover:shadow-xl"
              >
                <span className="absolute inset-0 bg-gradient-to-r rounded-full from-[#021430] via-[#0f1c47] to-[#021430] transform scale-0 group-hover:scale-100 transition-all duration-700"></span>
                <div className="relative  flex text-nowrap  justify-center items-center gap-2 z-10">
                  <IoCallOutline className="text-green-600 text-xl" />
                  <span className="font-medium group-hover:text-white  text-sm lg:text-base transition-all duration-700">
                    +92321-5595648
                  </span>
                </div>
              </motion.button>
            </div>


          </motion.div>

          {/* Image Content */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={imageInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 relative md:block hidden"
          >
            <img
              src="baba.svg"
              alt="Solar Panel"
              className="w-full max-w-md md:max-w-lg mx-auto"
            />
            {/* Top-right shape */}
            <div className="absolute lg:-top-8 -top-14 -right-32 bg-green-600 rounded-full lg:w-28 lg:h-28 w-20 h-20 opacity-75 animate-bounce"></div>
          </motion.div>
        </div>
      </section>
      {/* Decorative Bottom Element */}
      <div
        className="bg-green-600 p-4 rounded-b-full w-[90%] max-w-7xl h-12 mt-[-28px] md:mt-[-16px] shadow-md"
      ></div>
    </main>
  );
};

export default Contact;
