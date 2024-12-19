import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen mt-20 animate-zoomIn">
      {/* Left side: Form content */}
      <div className="flex items-center justify-center w-full lg:w-1/2 p-8 bg-white text-gray-800">
        <div className="w-full max-w-lg">
          <h2 className="text-4xl font-bold my-6 text-left md:text-left">
            Get In Touch With Us
          </h2>
          <p className="mb-6 text-left text-lg">
            Contact us about anything related to our company or services. We`ll
            do our best to get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 text-gray-800  rounded-lg lg:rounded-none  shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 text-gray-800 rounded-lg lg:rounded-none   shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 "
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 resize-none bg-gray-100 rounded-lg lg:rounded-none   text-gray-800  shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="3"
                placeholder="Your message here"
                required
              />
            </div>
            <button
              type="submit"
              className="services w-full gap-2 relative flex justify-center items-center overflow-hidden rounded-full lg:rounded-sm  px-6 py-3 lg:px-4 lg:py-4 border-2 border-gray-900 bg-yellow-400  font-semibold z-10 snap-center text-black  group"
            >
              <span className="relative z-10">Send Message</span>
              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-[#021430] transition-all duration-500 group-hover:h-full"></span>
              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 delay-75 border-[#021430] transition-all duration-500 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 delay-100 border-[#021430] transition-all duration-500 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 delay-150 border-[#021430] transition-all duration-500 group-hover:h-full"></span>
            </button>
            {/* <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-br from-[#021430] via-[#172963] to-[#021430] text-white font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 hover:scale-110 duration-700 ease-in-out transform focus:ring-yellow-400"
            >
              Send Message
            </button> */}
          </form>
        </div>
      </div>

      {/* Right side: Image with overlay and gradient */}
      <div className="relative w-full lg:h-full h-screen self-center lg:w-1/2 hidden lg:block  ">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
        <img
          src="Contact-us.jpeg"
          alt="Contact Us"
          className="object-cover  w-full h-full transition-transform duration-700 ease-in-out hover:scale-105"
        />
      </div>
    </main>
  );
};

export default ContactUs;
