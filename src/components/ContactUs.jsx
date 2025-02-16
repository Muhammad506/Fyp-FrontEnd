import { useEffect, useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <main>
      {/* Hero Section */}
      <div className="relative bg-[url('/FeaturesPage.jpg')] bg-cover bg-center h-72 md:h-80 lg:h-96 mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c47] via-[#102a66] to-[#0f1c47] opacity-85"></div>
        <div className="relative h-full flex flex-col  items-center justify-center text-center px-4 md:px-8 py-16 space-y-3">
          <h1 className="text-[#EAB308]  text-sm lg:text-lg uppercase font-bold font-funnel tracking-wider">
            Contact Us
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl  max-w-6xl  2xl:text-5xl tracking-wide w-full md:w-[60%] xl:w-[55%] text-center self-center flex font-krona text-white drop-shadow-md">
            Let’s Connect and Build Something Amazing
          </h2>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex items-center justify-center h-full py-10 bg-[url('https://modinatheme.com/html/solarglow-html/assets/img/testimonial/map-shape.png')] bg-cover bg-center bg-[#F7F7F7]">
        <div className="w-full max-w-2xl bg-white shadow-2xl rounded-lg p-8 transform transition-all glow-border">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Get In Touch</h2>
          <p className="text-gray-600 text-center mb-8">
            Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "email"].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-semibold text-gray-600 mb-1 capitalize">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  placeholder={`Enter your ${field}`}
                  required
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none  transition-all"
                rows="3"
                placeholder="Write your message here"
                required
              />
            </div>
            <button
              className="bg-gradient-to-r from-[#5B9B37] via-[#4A8D2B] to-[#5B9B37]  w-full text-white px-8 py-3 rounded-2xl font-medium  shadow-lg transition-all  hover:bg-gradient-to-r hover:from-[#4A8D2B] hover:via-[#5B9B37]  hover:to-[#4A8D2B]  hover:shadow-xl"
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
