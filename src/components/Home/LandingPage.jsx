import { MdCallMade } from "react-icons/md";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="relative text-white overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover filter brightness-50"
          src="LandingPage.jpg"
          alt="LandingPage"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-10  lg:px-20 relative z-10 animate-slideInLeft flex flex-col items-start justify-center text-left space-y-6 sm:space-y-8 py-24 sm:py-40  sm:px-16 max-w-screen-lg mx-auto">
        <h className=" text-3xl md:text-4xl xl:text-5xl  text-nowrap font-bold leading-tight drop-shadow-lg">
          Solar Intelli Solutions
        </h>
        <p className="text-sm sm:text-lg max-w-lg lg:max-w-2xl drop-shadow-md text-justify">
          Our mission is to provide an outstanding customer experience through a
          combination of comprehensive documentation and guides, an active and
          supportive community, and 24/7 dedicated support. We offer detailed
          resources to help you navigate our platform efficiently, connect with
          a vibrant community for collaboration and insights, and ensure
          round-the-clock assistance to address any questions or issues you may
          have. This holistic approach is designed to make your experience with
          us seamless, enjoyable, and productive.
        </p>
        <div className="w-full sm:w-auto">
          <Link to="/contact-us">
            <button className="bg-gradient-to-r flex gap-3  from-yellow-400 to-yellow-600 text-gray-800 rounded-3xl md:text-base px-6 py-3 md:font-bold font-semibold text-sm transition-all duration-700 hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 shadow-lg hover:shadow-xl ">
              Get In Touch With Us <MdCallMade className="size-5 " />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
