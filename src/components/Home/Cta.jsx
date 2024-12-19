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
    <main className="container bg-[#F7F7F7] flex flex-col items-center gap-10 px-4  mx-auto mt-8 md:px-10 lg:px-20 lg:mt-16 lg:flex-row lg:items-start"
    
    >
      {/* Left Content (Text & Button) */}
      <div
        ref={rightContentRef}
        className={`lg:w-1/2 space-y-8 transition-all self-center duration-1000 ${
          rightContentInView
            ? "animate-slideInLeft"
            : "opacity-0 translate-x-[50px]"
        }`}
      >
        <div className="space-y-4">
          <h1 className="text-lg font-semibold tracking-widest text-[#5B9B37] drop-shadow-sm md:text-xl lg:text-2xl font-funnel">
            Take the Next Step
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-widest text-gray-900 drop-shadow-md font-funnel">
            Power that Doesn't Cost the Earth
          </h2>
        </div>
        <p className="text-gray-700 text-justify text-base leading-relaxed sm:text-lg lg:text-xl lg:max-w-2xl">
          If you have any questions or need expert advice about our services,
          don’t hesitate to reach out. Give us a call at 07745593882 to speak
          directly with our team and receive personalized assistance.
          Alternatively, if you would prefer a callback at a convenient time,
          simply hit the button below and we’ll be in touch shortly!
        </p>
        <div>
          <Link to="/contact-us">
            <button className="relative px-6 py-3 text-white font-semibold bg-gradient-to-r from-[#5B9B37] to-[#4A8D2B] hover:bg-[#4a8c2c] rounded-full shadow-lg hover:scale-95 duration-700  transition-transform ">
              Let's Connect
              <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-all duration-300 group-hover:opacity-10"></span>
            </button>
          </Link>
        </div>
      </div>
      {/* Right Content (Image) */}
      <div
        ref={leftContentRef}
        className={`lg:w-1/2 flex justify-center items-center self-center transition-transform duration-1000 ${
          leftContentInView
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
