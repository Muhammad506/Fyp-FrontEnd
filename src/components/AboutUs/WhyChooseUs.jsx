import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main className="bg-gradient-to-b from-blue-50 to-white py-6 md:py-16 ">
      <div className="container mx-auto px-6 lg:px-20 ">
        <div className="flex flex-col-reverse  lg:flex-row items-center lg:space-x-10">
          <div
            ref={imageRef}
            className={`flex justify-center lg:w-1/2 md:w-[60%] transition-transform duration-700 pt-6 ${
              imageInView ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            <img
              className="w-full lg:w-3/4 rounded-lg  animate-slideInLeft shadow-xl transform hover:scale-110 transition duration-1000"
              src="WhyChooseUs.jpeg"
              alt="Why Choose Us"
            />
          </div>
          <div
            ref={contentRef}
            className={`flex flex-col items-center lg:items-start lg:w-1/2  space-y-6 ${
              contentInView ? "animate-slideInRight" : "opacity-0"
            } transition-transform transform lg:pl-10 mt-8 lg:mt-0`}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f1c47] mb-4 md:mb-8">
              Why Choose Solar Intelli Solutions?
            </h1>
            <p className="text-lg text-gray-800  text-justify max-w-lg leading-relaxed">
              At Solar Intelli Solutions, we offer unparalleled expertise in
              solar technology, ensuring reliable and scalable energy solutions
              for homes and businesses. Our robust platform enhances the
              efficiency of your solar systems, whether it’s a small residential
              setup or a large commercial installation.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Expertise:</strong> Expertise in solar technology and
                energy management.
              </li>
              <li>
                <strong>Reliability:</strong> A platform designed to optimize
                energy efficiency.
              </li>
              <li>
                <strong>Scalability:</strong> Tailored for residential and
                commercial solar systems.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhyChooseUs;
