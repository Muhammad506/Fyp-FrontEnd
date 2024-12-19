import Avatar from "react-avatar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for hamburger toggle

  const toggleMenu = () => setIsOpen(!isOpen);

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] fixed top-0 left-0 w-full z-50">
      {/* Navbar for Large Screens */}
      <nav className="hidden lg:flex font-semibold justify-around items-center px-8 border-b border-gray-700 text-gray-300">
        <Link to="/">
          <img
            src="NavBar.png"
            alt="Navbar"
            className="size-20 transform hover:scale-110 transition duration-1000"
          />
        </Link>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-center">
          <Link
            to="/"
            className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
              location.pathname === "/"
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
              location.pathname === "/about-us"
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/features"
            className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
              location.pathname === "/features"
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : ""
            }`}
          >
            Features
          </Link>
          <Link
            to="/contact-us"
            className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${
              location.pathname === "/contact-us"
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : ""
            }`}
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          {isLoggedIn ? (
            <div className="relative">
              <Avatar
                size="40"
                round
                className="cursor-pointer hover:scale-110 ease-in-out duration-700 transition"
                onClick={toggleDropdown}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGBxaYdGHEpJ9001ON09kQBXAnqZaCYG3--fcJQUAIbkQAjWc-BpxmbgwJrzURi0j8gc&usqp=CAU"
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-yellow-500 px-5 py-2 text-black font-semibold rounded-full hover:scale-110 duration-700 transition-transform">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-yellow-500 px-5 py-2 text-black font-semibold rounded-full hover:scale-110 duration-700 transition-transform">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Hamburger Menu for Small/Medium Screens */}
      <div className="lg:hidden flex justify-between items-center px-5   py-2">
        <Link to="/">
          <img src="NavBar.png" alt="Navbar" className="h-14 w-14" />
        </Link>
        <button onClick={toggleMenu} className="z-50 focus:outline-none">
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown Menu for Small/Medium Screens */}
      {isOpen && (
        <div className="lg:hidden mt-6 h-screen flex flex-col items-center bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] text-gray-300 w-full">
          <Link
            to="/"
            className="py-2 text-center w-full hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="py-2 text-center w-full hover:bg-gray-800"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/features"
            className="py-2 text-center w-full hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            to="/contact-us"
            className="py-2 text-center w-full hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          {isLoggedIn ? (
            <div className="py-2 text-center w-full">
              <Link
                to="/dashboard"
                className="block py-2 hover:bg-gray-800"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
              {/* Centering the logout button */}
              <div className="flex justify-center items-center w-full">
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="w-32  bg-yellow-500 px-5 py-2 m-2 text-black font-semibold rounded-full flex justify-center items-center"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-6 flex flex-col justify-center items-center">
              <Link to="/login">
                <button className="bg-yellow-500 px-5 py-2 m-2 text-black font-semibold rounded-full">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-yellow-500 px-5 py-2 m-2 text-black font-semibold rounded-full">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default NavBar;
