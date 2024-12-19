import { MdCallMade } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const Features = () => {
  // Use Intersection Observer to detect if the component is in view
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main>
      {/* Top Section */}
      <div className="relative bg-[url('/FeaturesPage.jpg')] bg-cover bg-center h-72 md:h-80 mt-16">
        {/* Gradient overlay with transparency at the center */}
        <div className="absolute inset-0 bg-[#0f1c47] opacity-80"></div>
        <div className="relative h-full flex flex-col items-center justify-center space-y-6 px-2 md:px-6 py-16">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-wider drop-shadow-lg font-funnel">
            Features
          </h1>
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold w-full md:w-[75%] xl:w-[55%] tracking-wider md:tracking-wider text-center drop-shadow-xl font-funnel">
            Explore the Powerful Features of Our Platform
          </h2>
        </div>
      </div>

      {/* Main content section */}
      <div className="container mx-auto px-4 justify-center text-left lg:px-16 mt-8 lg:py-16 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0">
        <div
          ref={leftContentRef}
          className={`lg:w-1/2 self-center flex flex-col space-y-6 lg:space-y-8 lg:pr-10 text-black ${
            leftContentInView ? "animate-slideInLeft" : "opacity-0"
          }`}
        >
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800">
            Cutting-Edge Features
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-justify max-w-full lg:max-w-2xl text-gray-600">
            At Solar Intelli Solutions, our platform is designed with
            cutting-edge features that provide comprehensive control and
            insights into your solar energy system. Here’s a look at what you
            can do with our intelligent solar management platform.
          </p>
          <div className="flex justify-start">
            <button className="bg-gradient-to-r flex gap-3 from-yellow-400 to-yellow-600 text-gray-800 rounded-3xl md:text-base px-6 py-3 md:font-bold font-semibold text-sm transition-all duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-yellow-700">
              Start Now <MdCallMade className="text-lg" />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div
          ref={rightContentRef}
          className={`lg:w-1/2 md:w-[80%] md:p-10 xl:p-20 p-2 ${
            rightContentInView ? "animate-slideInRight" : "opacity-0"
          }`}
        >
          <img
            className="w-full flex self-center items-center h-auto rounded-lg shadow-xl transform transition duration-1000 ease-in-out hover:scale-110 hover:shadow-2xl"
            src="https://st3.depositphotos.com/1092019/12817/i/450/depositphotos_128176210-stock-photo-index-card-with-inscription-features.jpg"
            alt="Features"
          />
        </div>
      </div>
    </main>
  );
};

export default Features;
