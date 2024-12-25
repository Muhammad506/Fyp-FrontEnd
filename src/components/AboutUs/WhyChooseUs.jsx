import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main className="container py-6 lg:py-14 bg-[#F7F7F7] flex flex-col items-center gap-10 px-4 mx-auto md:px-10 lg:px-20 lg:flex-row lg:items-start">
      {/* Content Section */}
      <div
        ref={leftContentRef}
        className={`lg:w-1/2 space-y-6 transition-all self-center duration-1000 ${
          leftContentInView
            ? "animate-slideInLeft"
            : "opacity-0 translate-x-[50px]"
        }`}
      >
        <div className="space-y-4">
          <h1 className="text-[#5B9B37] text-sm md:text-base uppercase font-bold font-funnel tracking-wider">
            Why Choose Us
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-tight md:tracking-wide w-full md:w-[70%] lg:w-[90%] xl:w-[80%] self-center flex font-krona text-black drop-shadow-md">
            Why Choose Solar Intelli Solutions?
          </h2>
        </div>
        <p className="text-gray-700 text-justify text-base leading-relaxed sm:text-lg lg:text-xl lg:max-w-2xl">
          At Solar Intelli Solutions, we offer unparalleled expertise in solar
          technology, ensuring reliable and scalable energy solutions for homes
          and businesses. Our robust platform enhances the efficiency of your
          solar systems, whether it’s a small residential setup or a large
          commercial installation.
        </p>
        <ul className=" list-inside px-2  text-gray-700 space-y-2">
          <li>
            <strong>Expertise:</strong> Expertise in solar technology and energy
            management.
          </li>
          <li>
            <strong>Reliability:</strong> A platform designed to optimize energy
            efficiency.
          </li>
          <li>
            <strong>Scalability:</strong> Tailored for residential and
            commercial solar systems.
          </li>
        </ul>
      </div>
      {/* Image Section */}
      <div
        ref={rightContentRef}
        className={`lg:w-1/2 flex justify-center items-center self-center transition-transform duration-1000 ${
          rightContentInView
            ? "animate-slideInRight"
            : "opacity-0 translate-x-[-50px]"
        }`}
      >
        <img
          className="w-full max-h-screen rounded-lg md:w-[70%] lg:w-[95%] xl:w-[80%]"
          src="WhyChooseUs.jpeg"
          alt="Why Choose Us"
          loading="lazy"
        />
      </div>
    </main>
  );
};

export default WhyChooseUs;
