import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"; // Import state and effect hooks

const Footer = () => {
  const location = useLocation();

  // Simulating login status (replace this with actual login logic)
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    // Example: Here, you can simulate checking if the user is logged in
    // For example, check for a token or logged-in user
    const checkLoginStatus = () => {
      // Simulated check: if a token exists in localStorage, the user is logged in
      const token = localStorage.getItem("token");
      setLoggedIn(!!token); // Set loggedIn to true if token exists
    };

    checkLoginStatus();
  }, []);

  return (
    <footer className="bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] text-gray-300 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-10 px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative flex flex-col items-center">
            <Link to="/">
              <img
                className="size-24 mx-auto mb-4 transform transition-transform duration-1000 hover:scale-110"
                src="NavBar.png"
                alt="Navbar"
              />
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              Solar Intelli Solutions provides top-notch solar energy solutions,
              ensuring efficient and sustainable energy management for a greener
              future.
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center md:items-start text-center ml-0 md:ml-10 xl:ml-24 md:text-left space-y-4">
          <h2 className="text-lg font-semibold text-yellow-400">Quick Links</h2>
          <Link
            to="/"
            className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
              isActive("/") ? "text-yellow-400" : ""
            }`}
          >
            Home
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${
                isActive("/") ? "scale-x-100" : "scale-x-0"
              } group-hover:scale-x-100 transition-transform duration-300 origin-left`}
            ></span>
          </Link>
          <Link
            to="/about-us"
            className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
              isActive("/about-us") ? "text-yellow-400" : ""
            }`}
          >
            About Us
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${
                isActive("/about-us") ? "scale-x-100" : "scale-x-0"
              } group-hover:scale-x-100 transition-transform duration-300 origin-left`}
            ></span>
          </Link>
          <Link
            to="/features"
            className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
              isActive("/features") ? "text-yellow-400" : ""
            }`}
          >
            Features
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${
                isActive("/features") ? "scale-x-100" : "scale-x-0"
              } group-hover:scale-x-100 transition-transform duration-300 origin-left`}
            ></span>
          </Link>
          <Link
            to="/contact-us"
            className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
              isActive("/contact-us") ? "text-yellow-400" : ""
            }`}
          >
            Contact Us
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${
                isActive("/contact-us") ? "scale-x-100" : "scale-x-0"
              } group-hover:scale-x-100 transition-transform duration-300 origin-left`}
            ></span>
          </Link>
          {loggedIn && (
            <Link
              to="/dashboard"
              className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
                isActive("/dashboard") ? "text-yellow-400" : ""
              }`}
            >
              Dashboard
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${
                  isActive("/dashboard") ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></span>
            </Link>
          )}
        </div>

        {/* Contact & Social Media Section */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-lg font-semibold text-yellow-400">Contact Us</h2>
          <p className="text-sm text-gray-500">
            123 Solar Street, Energy City, Green State, 45678
          </p>
          <p className="text-sm text-gray-500">Email: info@solarintelli.com</p>
          <p className="text-sm text-gray-500">Phone: +123 456 7890</p>
          <div className="flex justify-center md:justify-start gap-6 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:text-yellow-400 hover:scale-125"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:text-yellow-400 hover:scale-125"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:text-yellow-400 hover:scale-125"
            >
              <FaTwitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-3 text-center text-sm text-gray-500 border-t border-gray-700">
        © 2024 Solar Intelli Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
