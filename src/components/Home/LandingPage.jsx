import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";

const carouselData = [
  {
    id: 1,
    title: "Harness the Full Power of Solar Energy",
    description:
      "Upgrade to a smarter, more efficient energy solution. Monitor and control your solar energy usage. Optimize your energy system with cutting-edge technology. Maximize your energy savings and reduce waste. Enjoy a seamless experience with our advanced tools. Take control of your energy future today. Start using smart energy management now.",
    imgSrc: "/hero1.svg",
    btnText: "Get Started",
    btnLink: "#",
    btnColor: "#52c254",
    bgImage: "/herobg1.jpg", // Background for this slide
  },
  {
    id: 2,
    title: "Intelligent Solar Systems at Your Fingertips",
    description:
      "Join the renewable energy revolution with Solar Intell Solutions. Save money by lowering your energy bills. Reduce your carbon footprint with clean solar energy. Enjoy a reliable and sustainable source of power. Take advantage of solar technology for long-term savings. Contribute to a greener, more sustainable world. Make the switch to solar today.",
    imgSrc: "/hero2.svg",
    btnText: "Learn More",
    btnLink: "#",
    btnColor: "#3e324f",
    bgImage: "/herobg1.jpg", // Background for this slide
  },
];

const LandingPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const currentBackground = carouselData[index].bgImage;

  return (
    <div
      className="relative flex items-center justify-center mt-16 md:mt-14 lg:mt-0 overflow-hidden bg-cover bg-center "
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      {/* Overlay applied only to background */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative w-full max-w-7xl lg:h-[calc(100vh-3rem)] z-10">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={false}
          indicators={false}
        >
          {carouselData.map((item) => (
            <Carousel.Item key={item.id}>
              <div className="flex  md:flex-row  h-screen  lg:h-screen justify-center  lg:justify-between text-justify items-center p-8 lg:p-10 gap-4 2xl:gap-40">
                <div className="flex flex-col gap-4 w-full md:w-[70%] lg:w-[40%] xl:w-[35%] 2xl:w-[70%] text-left justify-center items-center ml-0  lg:ml-20 xl:ml-32  2xl:ml-0 lg:text-left">
                  <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wide md:tracking-tight font-extrabold text-left font-funnel text-white drop-shadow-md">
                    {item.title}
                  </h1>

                  <p className="md:text-lg text-base text-white text-justify">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-center items-center lg:w-[40%] 2xl:w-[50%] lg:mr-14 xl:mr-28 2xl:ml-5 ">
                  <Image
                    src={item.imgSrc}
                    width={500}
                    height={500}
                    className="max-w-full h-auto hidden md:block"
                    alt="Carousel Item"
                  />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LandingPage;
