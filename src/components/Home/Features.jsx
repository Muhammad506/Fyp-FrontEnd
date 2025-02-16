import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "./Features.css";

const features = [
  {
    title: "Real-Time Solar Monitoring",
    description:
      "Stay informed with real-time data on the performance of each solar plate. Monitor energy production, status, and overall system health instantly, ensuring you always know how your system is performing.",
    image:
      "https://solar-intelli-solutions.odoo.com/web/image/964-e3613a36/1_ifMTFgeeChgdNBy5yQuNWw.webp",
  },
  {
    title: "Energy Usage Tracing",
    description:
      "Track your energy consumption with precision. Our platform provides detailed insights into energy usage patterns, helping you optimize energy production and reduce wastage.",
    image:
      "https://solar-intelli-solutions.odoo.com/web/image/1004-88c7a3ad/line-graph-with-bat-it-generative-ai_797840-3149.webp",
  },
  {
    title: "Current Wastage Alert",
    description:
      "Receive instant alerts when your system detects energy wastage. Whether it’s due to inefficiency or underperforming panels, our alert system ensures you take timely action to maximize energy output.",
    image:
      "https://solar-intelli-solutions.odoo.com/web/image/963-cbdfb80c/inspiration-unlimited-iu-e-magazine-hybrid-solar-inverters-solar-inverters-mppt-technology-solar-panels-solar-energy-solutions-off-grid.webp",
  },
  {
    title: "Active Solar Plates Display",
    description:
      "Visualize the status of your solar plates at a glance. Our platform displays which plates are active and which are inactive, allowing you to manage your energy production more effectively.",
    image:
      "https://solar-intelli-solutions.odoo.com/web/image/977-650f2409/Pvcell.webp",
  },
  {
    title: "On/Off Control",
    description:
      "Take full control of your solar panels with easy-to-use on/off switches. Whether you need to shut down a panel for maintenance or optimize usage during specific times, you can do it all remotely.",
    image:
      "https://solar-intelli-solutions.odoo.com/web/image/1003-6573b44a/touch-innovation-finger-activates-glowing-button-virtual-screen_904318-6698.webp",
  },
  {
    title: "Maintenance Schedule",
    description:
      "Keep your system efficient with automated maintenance scheduling. The platform analyzes performance data to recommend optimal maintenance times, reducing downtime and extending your solar panels' lifespan.",
    image:
      "https://solar-intelli-solutions.odoo.com/web/image/997-bda6c337/eyJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjcwMCwiaGVpZ2h0Ijo0Njd9fSwiYnVja2V0IjoiZmluZWhvbWVidWlsZGluZy5zMy50YXVudG9uY2xvdWQuY29tIiwia2V5IjoiYXBwXC91cGxvYWRzXC8yMDIwXC8wOVwvMjMxMjM3NDlcL2luc3RhbGwtc29sYXItcG.webp",
  },
  {
    title: "Remote Access",
    description:
      "Manage your solar energy system from anywhere at any time. Whether you’re at home or on the go, you can monitor and control your panels remotely for ultimate convenience. ",
    image:
      "https://solar-intelli-solutions.odoo.com/web/image/999-f0b89ab4/WhatsApp%20Image%202024-08-20%20at%2015.42.16_a9235a24.webp",
  },
];

const Features = () => {
  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (

    <main className="font-poppins pt-6 lg:pt-10  bg-[url('https://modinatheme.com/html/solarglow-html/assets/img/testimonial/map-shape.png')] bg-cover bg-center bg-[#F7F7F7]">
      <div
        ref={containerRef}
        className={`containerflex flex-col  py-2 items-center animate-fadeIn transition-opacity duration-700 justify-center gap-6 px-4 md:px-10 lg:px-20 mx-auto mt-8 lg:mt-16 lg:items-center ${containerInView ? "opacity-100" : "opacity-0"
          }`}
      >
        {/* Text Section */}
        <div className="space-y-4 flex flex-col justify-center items-center text-center">
          <h1 className="text-[#5B9B37] text-sm md:text-base uppercase font-bold font-funnel tracking-wider">
            Our Features
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-3xl 2xl:text-4xl tracking-wide w-full md:w-[60%] lg:w-[55%] xl:w-[50%]  self-center flex font-krona text-gray-800 drop-shadow-md">
            Explore the Cutting-Edge Features of Our Solution
          </h2>
        </div>

        {/* Slider Section */}
        <div className="w-full flex flex-col justify-center items-center">
          <section className="lg:w-[95%] xl:w-[85%]  max-w-5xl w-full flex justify-center self-center  items-center relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 1000 }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full"
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="flex justify-center items-center py-4 px-2 md:px-6 lg:px-8 xl:px-10">
                    <div className=" max-w-[360px] lg:h-[360px] h-[390px] md:h-[400px] xl:h-[410px] bg-white rounded-lg border border-gray-200 transform hover:scale-105 hover:shadow-md transition-transform duration-700">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="xl:h-[180px] lg:h-[130px] h-[180px] w-full rounded-t-lg object-cover transition-transform duration-700 transform"
                      />
                      <div className="p-4">
                        <h1 className="md:text-xl text-base text-nowrap font-semibold text-gray-800 transition-colors duration-300 hover:text-[#5B9B37]">
                          {feature.title}
                        </h1>
                        <hr className="my-2 border-gray-300" />
                        <p className="mt-3 text-sm text-justify text-gray-600 line-clamp-3">
                          {feature.description}
                        </p>
                        <Link
                          to="/register"
                          className="font-semibold text-yellow-400 hover:text-yellow-500"
                        >
                          <div className="flex justify-center">
                            <button className="mt-4 px-6 py-2 bg-[#5B9B37] text-white font-funnel font-semibold duration-700 rounded-full hover:bg-[#48892a] transition transform">
                              Register Now
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Features;
