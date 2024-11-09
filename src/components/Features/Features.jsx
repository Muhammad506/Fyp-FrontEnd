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
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d710/66963521e1d5c913fa1bb102_features-hero.webp')",
      }}
    >
      <main className="container mx-auto px-4 justify-center text-left lg:px-16 mt-8 lg:mt-16 lg:py-16 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0">
        <div
          ref={leftContentRef}
          className={`lg:w-1/2 self-center flex flex-col space-y-6 lg:space-y-8 lg:pr-10 text-white ${
            leftContentInView ? "animate-slideInLeft" : "opacity-0"
          }`}
        >
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
            Features
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-full lg:max-w-2xl">
            At Solar Intelli Solutions, our platform is designed with
            cutting-edge features that provide comprehensive control and
            insights into your solar energy system. Here’s a look at what you
            can do with our intelligent solar management platform:
          </p>
          <div className="flex justify-start">
            <button className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold transition duration-300 ease-in-out rounded-full text-base px-8 py-4  shadow-md transform hover:scale-105 overflow-hidden">
              <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-30 transition duration-300"></span>
              <span className="relative">Start Now</span>
            </button>
          </div>
        </div>
        <div
          ref={rightContentRef}
          className={`lg:w-1/2 md:p-10 xl:p-20  p-2 ${
            rightContentInView ? "animate-slideInRight" : "opacity-0"
          }`}
        >
          <img
            className="w-full h-auto  rounded-lg shadow-lg"
            src="https://st3.depositphotos.com/1092019/12817/i/450/depositphotos_128176210-stock-photo-index-card-with-inscription-features.jpg"
            alt="Features"
          />
        </div>
      </main>
    </div>
  );
};

export default Features;
