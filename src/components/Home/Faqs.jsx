import { useState } from "react";
import "@fontsource/krona-one";

const FAQSection = () => {
  const faqItems = [
    {
      question: "How does Solar Plate Monitoring work on the platform?",
      answer:
        "Our Solar Plate Monitoring feature provides real-time insights into the performance of your solar panels. You can track parameters such as energy production, efficiency levels, and any potential issues directly from your dashboard. This ensures that your solar system is always running at optimal efficiency.",
    },
    {
      question:
        "Can I track energy usage and identify wastage through the system?",
      answer:
        "Yes, our Energy Usage Tracing feature helps you monitor daily, weekly, and monthly energy consumption. The Current Wastage Alert feature notifies you of any energy inefficiencies or wastage, enabling you to take corrective actions promptly to maximize energy savings.",
    },
    {
      question:
        "What is the Active Solar Plates Display, and how does it help?",
      answer:
        "The Active Solar Plates Display provides a visual overview of all active solar panels in your system. It highlights operational status, live energy output, and any inactive plates that may require attention, simplifying maintenance and performance tracking.",
    },
    {
      question: "How does the On/Off Control and Maintenance Scheduling work?",
      answer:
        "The On/Off Control feature allows you to remotely switch solar panels or systems on and off for better energy management. Additionally, our Maintenance Schedule feature ensures timely reminders and notifications for routine checkups and maintenance, prolonging the life of your solar system.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-[#F7F7F7] py-6 lg:py-10">
      <div className="container mx-auto px-2 md:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* FAQ Text Section */}
          <div className="space-y-4">
            <div className="flex flex-col justify-center items-center text-center gap-4">
              <h1 className="text-[#5B9B37] text-sm md:text-base uppercase font-bold font-funnel tracking-wider">
                Ask Something
              </h1>
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-wide w-full md:w-[80%] lg:w-[70%] xl:w-[65%] self-center flex font-krona text-gray-800 drop-shadow-md">
                Do You Have Any Question Please?
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4 mt-20 ">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`border rounded-lg shadow-md transition-all duration-300 ${
                    openIndex === index ? "bg-[#68ae3f]" : "bg-white"
                  } hover:shadow-lg`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full text-left px-6 py-4 font-semibold flex justify-between items-center focus:outline-none ${
                      openIndex === index ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {item.question}
                    <span
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className={`w-6 h-6 ${
                          openIndex === index ? "text-white" : "text-[#F9A749]"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-4 text-gray-700 text-justify bg-white">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right-Side Image */}
          <div className="relative">
            <img
              src="Faq.svg"
              alt="Solar Worker"
              className="w-full rounded-lg  h-auto  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
