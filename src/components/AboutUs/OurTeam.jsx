import { useInView } from "react-intersection-observer";

const OurTeam = () => {
  const { ref: sectionRefs, inView: sectionInViews } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const teamData = [
    {
      name: "M. Umer Saleem",
      role: "Founder and CEO ",
      description:
        "Umer leads solar innovation, ensuring top-tier service and driving progress in sustainable energy solutions.",
      image: "umer.jpg",
      animation: "animate-slideInLeft",
    },
    {
      name: "Syed Ubaid",
      role: "Website Designer",
      description:
        "Ubaid ensures the website reflects the company's vision, delivering a consistent and exceptional user experience every time.",
      image: "ubaid.jpg",
      animation: "animate-fadeIn",
    },
    {
      name: "Anas Rafiq",
      role: "Marketing Manager",
      description:
        "Anas drives our marketing, making sure our solar solutions effectively reach the right audience and create impact.",
      image: "anas.jpg",
      animation: "animate-slideInRight",
    },
  ];

  return (
    <main className="py-16 bg-gradient-to-t from-blue-50  to-white ">
      <div className="text-center px-6 lg:px-24">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0f1c47] mb-16">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {teamData.map((member, index) => (
            <div
              key={index}
              ref={(el) => sectionRefs(el)}
              className={`p-8 bg-white rounded-xl   hover:shadow-yellow-400 duration-1000 hover:shadow-md shadow-inner hover:scale-110 transition-transform transform ${
                sectionInViews ? member.animation : "opacity-0"
              } border border-gray-300 hover:shadow-md`}
            >
              <div className="flex flex-col items-center ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-28 h-28 object-cover mb-4 border-4 border-[#0f1c47]"
                />
                <h2 className="text-2xl font-bold text-[#0f1c47] mb-2">
                  {member.name}
                </h2>
                <p className="text-blue-600  font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600  text-justify">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurTeam;
