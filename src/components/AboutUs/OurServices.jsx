import { useInView } from "react-intersection-observer";

const OurServices = () => {
  const { ref: cardRefs, inView: cardInViews } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardData = [
    {
      title: "Monitor Real-Time Performance",
      description:
        "Gain insights into energy production, panel status, and system health.",
      animation: "animate-slideInLeft",
      icon: "📊",
    },
    {
      title: "Track Historical Data",
      description:
        "Access detailed reports to analyze energy trends and make informed decisions.",
      animation: "animate-slideInRight",
      icon: "📈",
    },
    {
      title: "Optimize Energy Usage",
      description:
        "Control and adjust panel settings to reduce wastage and enhance efficiency.",
      animation: "animate-slideInLeft",
      icon: "⚡",
    },
    {
      title: "Receive Alerts",
      description:
        "Get instant notifications on performance issues and maintenance needs.",
      animation: "animate-slideInRight",
      icon: "🔔",
    },
  ];

  return (
    <main className="py-12 bg-[#f9fafb]">
      <div className="text-center px-6 lg:px-24">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0f1c47] mb-8">
          What We Do
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  ">
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={(el) => cardRefs(el)}
              className={`bg-white p-6 rounded-lg  border  hover:shadow-yellow-400 hover:shadow-md shadow-lg hover:scale-105 transition-transform transform ${
                cardInViews ? card.animation : "opacity-0"
              } border-gray-300 text-left hover:shadow-md`}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl text-[#0f1c47]">{card.icon}</span>
                <h2 className="text-xl font-bold text-[#0f1c47] ml-2">
                  {card.title}
                </h2>
              </div>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurServices;
