import { useRef, useEffect, useState } from "react";
import { FaRegClock, FaRegLightbulb, FaChartLine } from "react-icons/fa";
import {
  MdOutlineElectricBolt,
  MdOutlineSettings,
  MdWifi,
  MdDataUsage,
} from "react-icons/md";
import { AiOutlineDashboard, AiOutlineSchedule } from "react-icons/ai";
import { RxSwitch } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiAlertTriangle } from "react-icons/fi";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef(null);

  const features = [
    {
      icon: <FaRegClock className="text-3xl md:text-4xl text-white" />,
      label: "Solar Plate Monitoring",
    },
    {
      icon: <FaRegLightbulb className="text-3xl md:text-4xl text-white" />,
      label: "Energy Usage Tracking",
    },
    {
      icon: (
        <MdOutlineElectricBolt className="text-3xl md:text-4xl text-white" />
      ),
      label: "Current Wastage Alerts",
    },
    {
      icon: <MdOutlineSettings className="text-3xl md:text-4xl text-white" />,
      label: "Active Solar Plates Display",
    },
    {
      icon: <AiOutlineDashboard className="text-3xl md:text-4xl text-white" />,
      label: "User-Friendly Dashboard",
    },
    {
      icon: <RxSwitch className="text-3xl md:text-4xl text-white" />,
      label: "On/Off Control System",
    },
    {
      icon: (
        <IoMdNotificationsOutline className="text-3xl md:text-4xl text-white" />
      ),
      label: "Real-Time Notifications",
    },
    {
      icon: <FiAlertTriangle className="text-3xl md:text-4xl text-white" />,
      label: "Alerts and Reports",
    },
    {
      icon: <MdDataUsage className="text-3xl md:text-4xl text-white" />,
      label: "Historical Data Analysis",
    },
    {
      icon: <FaChartLine className="text-3xl md:text-4xl text-white" />,
      label: "Energy Optimization",
    },
    {
      icon: <MdWifi className="text-3xl md:text-4xl text-white" />,
      label: "Remote Access",
    },
    {
      icon: <AiOutlineSchedule className="text-3xl md:text-4xl text-white" />,
      label: "Maintenance Scheduling",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the first trigger
        }
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <main
      className="relative  bg-cover px-4 md:px-10 lg:px-20 py-10 "
      style={{ backgroundImage: `url(/bgFeatures.jpg)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div>

      {/* Content */}
      <div
        ref={featuresRef}
        className={`flex flex-col items-center pb-8 text-center relative z-10 transition-all duration-1000 ${
          isVisible ? "animate-zoomIn opacity-100" : "opacity-0"
        }`}
      >
        <div className="space-y-4 py-14 w-full text-white px-4 lg:px-0 ">
          <h className=" p-3 lg:p-0 text-3xl md:text-4xl xl:text-5xl font-bold ">
            Features
          </h>
          <p className="pb-6 text-base sm:text-lg md:text-xl">
            Our platform comes packed with powerful features
          </p>
        </div>
        <div className="grid grid-cols-2  text-white sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6  -ml-2 mr-2 md:px-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-2 border border-transparent rounded-lg bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] shadow-lg lg:hover:shadow-lg transition-transform duration-700 lg:hover:shadow-yellow-400 lg:hover:-translate-y-2 lg:hover:scale-105"
              style={{ width: "150px", height: "150px" }} // Fixed size for cards
            >
              <div className="relative mb-2 flex items-center justify-center h-full">
                {/* Icon */}
                <div className="transition-opacity duration-300 ease-in-out lg:group-hover:opacity-0 opacity-0 lg:opacity-100">
                  {feature.icon}
                </div>
                {/* Label */}
                <span className="absolute lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-xs md:text-sm font-semibold text-center line-clamp-2 max-h-10 overflow-hidden">
                  {feature.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Features;
