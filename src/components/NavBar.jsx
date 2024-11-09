import Avatar from "react-avatar";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const location = useLocation(); // Get the current location
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for hamburger toggle

  const isActive = (path) => location.pathname === path;
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] fixed top-0 left-0 w-full z-50">
      {/* Navbar for Large Screens */}
      <nav className="hidden lg:flex justify-between items-center px-8 border-b border-gray-700 text-gray-300">
        <img
          src="NavBar.png"
          alt="Navbar"
          className="size-20 transform hover:scale-110 transition duration-300"
        />
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-center">
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
        </div>

        <div className="flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard">
                <button className="bg-yellow-500 px-5 py-2 rounded-full hover:scale-105 transition-transform">
                  Dashboard
                </button>
              </Link>
              <Avatar
                size="40"
                round
                className="hover:scale-110 transition"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGBxaYdGHEpJ9001ON09kQBXAnqZaCYG3--fcJQUAIbkQAjWc-BpxmbgwJrzURi0j8gc&usqp=CAU"
              />
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="bg-yellow-500 px-5 py-2 text-black font-semibold rounded-full hover:scale-105 transition-transform">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-yellow-500 px-5 py-2 text-black font-semibold rounded-full hover:scale-105 transition-transform">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Hamburger Menu for Small/Medium Screens */}
      <div className="lg:hidden flex justify-between items-center px-5 py-2">
        <img src="NavBar.png" alt="Navbar" className="h-12 w-12" />
        <button onClick={toggleMenu} className="z-50 focus:outline-none">
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-0.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Full-Screen Menu Overlay for Small/Medium Screens */}
      <div
        className={`fixed inset-0 bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-screen space-y-8 text-white text-lg">
          {["/", "/About-us", "/Features", "/Contact-Us"].map((path, index) => (
            <Link
              key={index}
              to={path}
              onClick={toggleMenu}
              className="relative group cursor-pointer text-gray-300 hover:text-yellow-400"
            >
              {path.replace("/", "").replace("-", " ") || "Home"}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </Link>
          ))}
          <>
            <Link to="/register">
              <button className="bg-yellow-500 px-6 py-2 text-black font-semibold rounded-full hover:scale-105 transition-transform">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-yellow-500 px-6 py-2 text-black font-semibold rounded-full hover:scale-105 transition-transform">
                Login
              </button>
            </Link>
          </>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
