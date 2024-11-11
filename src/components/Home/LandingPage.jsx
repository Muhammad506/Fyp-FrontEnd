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
            <button className="services gap-2 relative flex justify-between rounded-full lg:rounded-sm  px-6 py-3 lg:px-4 lg:py-4  items-center overflow-hidden  border border-gray-300 bg-[#021430] font-semibold z-10 snap-center text-white  group">
              <span className="relative z-10">Get In Touch With Us</span>
              <MdCallMade className="relative z-10" />
              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-yellow-400 transition-all duration-700 group-hover:h-full"></span>
              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 delay-75 border-yellow-400 transition-all duration-700 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 delay-100 border-yellow-400 transition-all duration-700 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 delay-150 border-yellow-400 transition-all duration-700 group-hover:h-full"></span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
