import { useInView } from "react-intersection-observer";

const ProjectComplexity = () => {
  // Using Intersection Observer for both text and image
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <main className=" container pt-20 bg-[#F7F7F7] flex flex-col gap-8 items-center px-4 md:px-10 lg:px-20 mx-auto  space-y-8  lg:mt-16  lg:flex-row lg:items-start lg:space-y-0">
      {/* Left Content (Text) */}
      <div
        ref={leftContentRef}
        className={`lg:w-1/2 space-y-6 lg:space-y-8 lg:pr-10  ${
          leftContentInView ? "animate-slideInLeft" : "opacity-0"
        }`}
      >
        <h className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800">
          Project Complexity
        </h>
        <p className="text-base sm:text-lg lg:text-xl text-justify max-w-full lg:max-w-2xl text-gray-700">
          Solar Intelli Solutions is a web-based platform designed for
          monitoring and managing solar panels. It offers real-time data and
          insights that help users track energy production, usage, and wastage.
          The platform provides a seamless interface to view active panels and
          control their status remotely, making solar energy management more
          efficient and user-friendly.
        </p>
      </div>
      {/* Right Content (Image) */}
      <div
        ref={rightContentRef}
        className={`lg:w-1/2  md:w-4/5 flex self-center  ${
          rightContentInView ? "animate-slideInRight" : "opacity-0"
        }`}
      >
        <img
          className="w-full lg:w-11/12 max-h-screen  rounded-lg shadow-xl transform  hover:scale-110 transition duration-1000"
          src="ProjectComplexity.jpeg"
          alt="Project Complexity"
        />
      </div>
    </main>
  );
};

export default ProjectComplexity;
