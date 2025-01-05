import { useEffect, useState } from "react";

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

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <main>

      {/* Top Section */}
      <div className="relative bg-[url('/FeaturesPage.jpg')] bg-cover bg-center h-72 md:h-80 mt-16">
        <div className="absolute inset-0 bg-[#0f1c47] opacity-80"></div>   {/* Gradient overlay with transparency at the center */}
        <div className="relative h-full flex flex-col items-center justify-center space-y-6 px-2 md:px-6 py-16">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-wider drop-shadow-lg font-funnel">
            Contact Us
          </h1>
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold w-full md:w-[75%] xl:w-[55%] tracking-wider md:tracking-wider text-center drop-shadow-xl font-funnel">
            Explore the Powerful Features of Our Platform
          </h2>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex items-center justify-center min-h-screen py-12 bg-gray-50">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Fill out the form below and we’ll get back to you as soon as
            possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
                placeholder="Write your message here"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
