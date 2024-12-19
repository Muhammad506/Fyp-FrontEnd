import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmation: formData.confirmPassword,
        }
      );

      // Handle success response
      alert(data.message); // Show a success message
      navigate("/login"); // Redirect to login page
    } catch (err) {
      setError(
        err.response?.data?.error || "Registration failed. Please try again."
      );
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row text-white overflow-visible md:overflow-hidden animate-fadeIn">
      <Link to="/">
        <div className="absolute z-50 left-4 hover:scale-125 duration-1000 ease-in-out transform top-4 opacity-90 hover:opacity-100 text-white border border-white rounded-3xl px-4 py-1 bg-black bg-opacity-50 shadow-lg">
          Back
        </div>
      </Link>

      <div className="w-full md:w-2/3 hidden md:block">
        <img
          src="LR-bg.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-50 md:opacity-100"
        />
      </div>

      <div className="bg-[#0F172A] w-full md:w-2/5 flex flex-col items-center p-6 justify-center shadow-xl">
        <img src="NavBar.png" alt="navbar" className="w-24 mb-4" />
        <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl text-center mb-3 text-yellow-400">
          Register
        </h1>
        <p className="text-gray-300 mb-6 px-2 text-center ">
          Start generating your thoughts with Solar Intelli Solutions.
        </p>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form className="w-full max-w-xs space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-gray-300 text-sm font-semibold mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-3 shadow-md">
              <CgProfile className="text-yellow-400 mr-2" />
              <input
                className="appearance-none bg-transparent w-full text-white py-1 px-2 placeholder-gray-400 focus:outline-none"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label
              className="block text-gray-300 text-sm font-semibold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-3 shadow-md">
              <MdEmail className="text-yellow-400 mr-2" />
              <input
                className="appearance-none bg-transparent w-full text-white py-1 px-2 placeholder-gray-400 focus:outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label
              className="block text-gray-300 text-sm font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-3 shadow-md">
              <RiLock2Fill className="text-yellow-400 mr-2" />
              <input
                className="appearance-none bg-transparent w-full text-white py-1 px-2 placeholder-gray-400 focus:outline-none"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label
              className="block text-gray-300 text-sm font-semibold mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-3 shadow-md">
              <RiLock2Fill className="text-yellow-400 mr-2" />
              <input
                className="appearance-none bg-transparent w-full text-white py-1 px-2 placeholder-gray-400 focus:outline-none"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="services w-full gap-2 relative flex justify-center items-center overflow-hidden rounded-full lg:rounded-sm  px-6 py-3 lg:px-4 lg:py-4  border border-gray-300 bg-[#021430]  font-semibold z-10 snap-center text-white riunded-md  group"
          >
            <span className="relative z-10">Register</span>
            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-yellow-400 transition-all duration-600 group-hover:h-full"></span>
            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 delay-75 border-yellow-400 transition-all duration-700 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 delay-100 border-yellow-400 transition-all duration-700 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 delay-150 border-yellow-400 transition-all duration-700 group-hover:h-full"></span>
          </button>
          {/* <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-400 text-black font-bold py-2 px-4 rounded-full w-full shadow-lg hover:scale-110 transform transition duration-700">
            Register
          </button> */}

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-yellow-400 hover:text-yellow-500"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;
