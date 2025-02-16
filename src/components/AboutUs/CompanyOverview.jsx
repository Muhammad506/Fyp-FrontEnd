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
    <section className="mt-14 bg-[#F7F7F7]">
      {/* Top Section */}
      <div className="relative bg-[url('/aboutbg.svg')] bg-cover bg-center h-72 md:h-80 mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c47] via-[#102a66] to-[#0f1c47] opacity-85"></div>
        <div className="relative h-full flex flex-col items-center justify-center space-y-4 px-2 md:px-6 py-16">
          <h1 className="text-[#EAB308]  text-sm lg:text-lg uppercase font-bold font-funnel tracking-wider">
            About Us
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wide w-full md:w-[65%] lg:w-[60%] xl:w-[50%] text-center self-center flex font-krona text-white drop-shadow-md">
            Innovating Solar Solutions for a Sustainable Future
          </h2>
        </div>
      </div>

      {/* Bottom Section */}
      <main className="container pt-6 lg:pt-10 bg-[#F7F7F7] flex flex-col items-center gap-10 px-4 mx-auto md:px-10 lg:px-20 lg:flex-row lg:items-start">
        {/* Image Section */}
        <div
          ref={rightContentRef}
          className={`lg:w-1/2 flex justify-center items-center self-center transition-transform duration-1000 ${rightContentInView ? "animate-slideInLeft" : "opacity-0 translate-x-[-50px]"}`}
        >
          <img
            className="w-full max-h-screen rounded-lg md:w-[70%] lg:w-full"
            src="WhoWeR.jpg"
            alt="Who We Are"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div
          ref={leftContentRef}
          className={`lg:w-1/2 space-y-6 transition-all self-center duration-1000 ${leftContentInView ? "animate-slideInRight" : "opacity-0 translate-x-[50px]"}`}
        >
          <div className="space-y-4">
            <h1 className="text-[#5B9B37] text-sm md:text-base uppercase font-bold font-funnel tracking-wider">
              Who We Are
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-tight md:tracking-wide w-full md:w-[40%] lg:w-[90%] xl:w-[80%] self-center flex font-krona text-black drop-shadow-md">
              Get Connected for Enhanced Vision
            </h2>
          </div>
          <p className="text-gray-700 text-justify text-base leading-relaxed sm:text-lg lg:text-xl lg:max-w-2xl">
            We are a team of passionate engineers, energy experts, and technology enthusiasts dedicated to creating innovative solutions for a greener tomorrow. Our platform offers advanced tools for monitoring, controlling, and optimizing solar panel performance, making renewable energy more accessible and manageable for everyone.
          </p>
        </div>
      </main>
    </section>
  );
};

export default CompanyOverview;
