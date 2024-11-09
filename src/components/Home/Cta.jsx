import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { MdCallMade } from "react-icons/md";

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
    <main className="bg-[#F7F7F7]">
      <div className="container mx-auto  gap-6 mt-8 px-4 md:px-10 lg:px-20 lg:mt-16 lg:py-16 flex flex-col-reverse lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0">
        {/* Left Content (Image) */}
        <div
          ref={leftContentRef}
          className={`lg:w-1/2 my-4 lg:my-0 flex self-center ${
            leftContentInView ? "animate-slideInLeft" : "opacity-0"
          }`}
        >
          <img
            className="w-full lg:w-11/12 max-h-screen   transform  hover:scale-110 transition duration-1000"
            src="CTA.jpg"
            alt="CTA"
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
            Power that Does not Cost the Earth
          </h>
          <p className="text-base sm:text-lg text-justify lg:text-xl max-w-full lg:max-w-2xl text-gray-700">
            If you have any questions or need expert advice about our services,
            don’t hesitate to reach out. Give us a call at 07745593882 to speak
            directly with our team and receive personalized assistance.
            Alternatively, if you would prefer a callback at a convenient time,
            simply hit the button below and we’ll be in touch shortly!
          </p>
          <div className="flex justify-start ">
            <Link to="/contact-us">
              <button className="relative bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] rounded-3xl md:text-base px-6 py-3 md:font-bold font-semibold text-sm text-white transition duration-700 ease-in-out shadow-md transform hover:scale-105 overflow-hidden">
                <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-30 transition duration-300"></span>
                <span className="relative flex gap-3">
                  Contact Us Today <MdCallMade className="size-5 " />{" "}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cta;
