import { useInView } from "react-intersection-observer";

const CompanyOverview = () => {
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="bg-gradient-to-t from-blue-50  to-white mt-14">
      <main className="container mx-auto px-4 lg:px-16 py-6 lg:py-16 ">
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-12 lg:space-x-10 ">
          <div 
            ref={leftContentRef}
            className={`lg:w-1/2 space-y-6 lg:space-y-8 mb-4 ${
              leftContentInView ? "animate-slideInLeft" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f1c47]">
              Who We Are
            </h1>
            <p className="text-lg max-w-full lg:max-w-2xl text-justify  text-gray-700">
              We are a team of passionate engineers, energy experts, and
              technology enthusiasts dedicated to creating innovative solutions
              for a greener tomorrow. Our platform offers advanced tools for
              monitoring, controlling, and optimizing solar panel performance,
              making renewable energy more accessible and manageable for
              everyone.
            </p>
          </div>
          <div
            ref={rightContentRef}
            className={`lg:w-1/2 md:w-[60%]  ${
              rightContentInView ? "animate-slideInRight" : "opacity-0"
            }`}
          >
            <img
              className="w-full h-auto lg:w-3/4 rounded-lg shadow-xl transform  hover:scale-110 transition duration-1000"
              src="CompanyOverview.jpeg"
              alt="Who We Are"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default CompanyOverview;
