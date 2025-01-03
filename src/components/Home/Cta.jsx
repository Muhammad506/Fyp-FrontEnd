import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Cta = () => {
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
    <main className="container     bg-[#F7F7F7] flex flex-col items-center gap-10 px-4  mx-auto  md:px-10 lg:px-20  lg:flex-row lg:items-start">
      {/* Left Content (Text & Button) */}
      <div
        ref={rightContentRef}
        className={`lg:w-1/2 space-y-8 transition-all self-center duration-1000 ${rightContentInView
          ? "animate-slideInLeft"
          : "opacity-0 translate-x-[50px]"
          }`}
      >
        <div className="space-y-4">
          <h1 className="text-[#5B9B37] text-sm md:text-base uppercase font-bold font-funnel tracking-wider">
            Take the Next Step
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl  2xl:text-4xl tracking-tight md:tracking-wide w-full md:w-[70%] lg:w-[90%] xl:w-[80%] self-center flex font-krona text-black drop-shadow-md">
            Power that Doesn’t Cost the Earth
          </h2>
        </div>
        <p className="text-gray-700 text-justify text-base leading-relaxed sm:text-lg lg:text-xl lg:max-w-2xl">
          If  you have questions or need advice, we’re here to help. Click below to visit our Contact Us page and share your details. Let us know your requirements, and our team will respond promptly. Your journey to smarter solutions starts with a click. We’re here to support your goals!
        </p>
        <div>
          <Link to="/contact-us">
            <button className="relative px-6 py-3 text-white font-funnel text-sm tracking-widest font-semibold  duration-300 bg-gradient-to-r from-[#5B9B37] to-[#4A8D2B] hover:bg-[#4a8c2c] rounded-full   transition-transform  ">
              Let`s Connect
              <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-all duration-300 group-hover:opacity-10"></span>
            </button>
          </Link>
        </div>
      </div>
      {/* Right Content (Image) */}
      <div
        ref={leftContentRef}
        className={`lg:w-1/2 flex justify-center items-center self-center transition-transform duration-1000 ${leftContentInView
          ? "animate-slideInRight"
          : "opacity-0 translate-x-[-50px]"
          }`}
      >
        <img
          className="w-full max-h-screen  md:w-3/4 lg:w-11/12 transform   transition-all duration-700"
          src="CTA.jpg"
          alt="CTA"
          loading="lazy"
        />
      </div>
    </main>
  );
};

export default Cta;
