const Contact = () => {
  return (
    <main className="py-16 px-4 md:px-8 xl:px-12 flex flex-col justify-center items-center">
      <section className="relative text-white bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430]  px-8 rounded-3xl shadow-lg flex flex-col items-center overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-funnel leading-tight">
              Get In Touch To Discuss How We Can Help You!
            </h1>
            <h2 className="text-lg text-gray-300 font-krona">
              We're pleased to be welcoming customers to join us.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 mt-6">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105">
                Request a Quote
              </button>
              <div className="flex items-center gap-4 text-lg bg-white bg-opacity-10 px-4 py-3 rounded-full">
                <i className="fas fa-phone-alt text-green-400"></i>
                <span className="font-medium">Phone: 01234 525 407</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative">
            <img
              src="baba.svg"
              alt="Solar Panel"
              className="w-full max-w-md lg:max-w-lg mx-auto  "
            />

            {/* Top-right shape */}
            <div className="absolute -top-8 -right-14 bg-green-600 rounded-full w-28 h-28 opacity-75 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Decorative Bottom Element */}
      <div className="bg-green-600 p-4 rounded-b-full w-[90%] h-12 mt-[-16px] shadow-md"></div>
    </main>
  );
};

export default Contact;
