import Marquee from "react-fast-marquee";

const TechnologicalStack = () => {
  return (
    <main className="bg-gradient-to-br from-[#ffb800] via-[#ff9800] to-[#ffb800] max-h-screen flex justify-center items-center py-16">
      <div className="flex flex-col gap-8 md:gap-12 justify-center items-center text-center w-full ">
        <div className="px-4 gap-6 flex flex-col">
          <h className="text-3xl md:text-4xl xl:text-5xl font-bold text-white drop-shadow-lg">
            Technological Stack
          </h>
          <p className="text-base md:text-lg xl:text-xl md:max-w-lg text-black mb-3 drop-shadow-md">
            Our solution uses cutting-edge technologies to provide a robust and
            scalable platform.
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center">
          {/* Top Marquee */}
          <Marquee
            direction="right"
            speed={20}
            autoFill={true}
            className="mb-4 overflow-hidden relative"
          >
            <div className="flex">
              <img
                src="https://solar-intelli-solutions.odoo.com/web/image/784-4b6ab123/WhatsApp_Image_2024-08-16_at_7.42.25_PM-removebg-preview.webp"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="Git"
              />
              <img
                src="Tailwind.png"
                className="w-20 h-20 p-1 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="Tailwind"
              />
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/36/c6/3c/36c63ce1-05b8-f610-45b8-54fd1b68cdb7/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="odoo"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/256/121/121135.png"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="AI"
              />
              <img
                src="https://solar-intelli-solutions.odoo.com/web/image/781-f91a4d26/WhatsApp_Image_2024-08-16_at_7.41.41_PM-removebg-preview%20%281%29.webp"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="Mongo"
              />
              <img
                src="https://solar-intelli-solutions.odoo.com/web/image/789-6cc7c2c7/WhatsApp_Image_2024-08-16_at_7.svg"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="Express"
              />
              <img
                src="https://solar-intelli-solutions.odoo.com/web/image/800-ccb8542b/image-removebg-preview%20%281%29.webp"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="Node"
              />
              <img
                src="https://solar-intelli-solutions.odoo.com/web/image/787-cad08a8e/physics_753244.webp"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="React"
              />
            </div>
          </Marquee>

          {/* Overlay Image in the Center */}
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <div className="border border-solid rounded-full bg-[#021430] border-white shadow-lg">
              <img src="NavBar.png" className="w-28 h-28 p-4" alt="Overlay" />
            </div>
          </div>

          {/* Bottom Marquee */}
          <Marquee
            direction="left"
            speed={20}
            autoFill={true}
            className="mt-4 overflow-hidden relative"
          >
            <div className="flex">
              <img
                src="https://solar-intelli-solutions.odoo.com/web/image/784-4b6ab123/WhatsApp_Image_2024-08-16_at_7.42.25_PM-removebg-preview.webp"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="Git"
              />
              <img
                src="Tailwind.png"
                className="w-20 h-20 p-1 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="Tailwind"
              />
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/36/c6/3c/36c63ce1-05b8-f610-45b8-54fd1b68cdb7/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="odoo"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/256/121/121135.png"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="AI"
              />
              <img
                src="https://solar-intelli-solutions.odoo.com/web/image/781-f91a4d26/WhatsApp_Image_2024-08-16_at_7.41.41_PM-removebg-preview%20%281%29.webp"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="Mongo"
              />
              <img
                src="https://solar-intelli-solutions.odoo.com/web/image/789-6cc7c2c7/WhatsApp_Image_2024-08-16_at_7.svg"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="Express"
              />
              <img
                src="https://solar-intelli-solutions.odoo.com/web/image/800-ccb8542b/image-removebg-preview%20%281%29.webp"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="Node"
              />
              <img
                src="https://solar-intelli-solutions.odoo.com/web/image/787-cad08a8e/physics_753244.webp"
                className="w-20 h-20 p-2 mx-2 transition-transform border-2 border-white transform hover:scale-125 rounded-2xl"
                alt="React"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </main>
  );
};

export default TechnologicalStack;