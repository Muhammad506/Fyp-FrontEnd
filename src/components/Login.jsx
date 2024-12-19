// src/pages/Login.jsx
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", data.token); // Save token to localStorage
      navigate("/dashboard"); // Redirect after login
    } catch (error) {
      alert(error.response?.data?.error || "Login failed");
    }
  };

  return (
    
    <main className="min-h-screen flex flex-col md:flex-row text-white overflow-visible md:overflow-hidden animate-fadeIn ">
      <Link to="/">
        <div className="absolute z-50 left-4 top-4 opacity-90 hover:opacity-100 hover:scale-125 duration-1000 text-white border border-white rounded-3xl px-4 py-1 bg-black bg-opacity-50 shadow-lg">
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
        <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl  text-center mb-3 text-yellow-400">
          Login
        </h1>
        <p className="text-gray-300 mb-6 px-2  text-center ">
          Start generating your thoughts with Solar Intelli Solutions.
        </p>

        <form className="w-full max-w-xs space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
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
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <a
              href="#"
              className="font-bold text-sm text-yellow-400 hover:text-yellow-500"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="services w-full gap-2 relative flex justify-center items-center overflow-hidden rounded-full lg:rounded-sm  px-6 py-3 lg:px-4 lg:py-4  border border-gray-300 bg-[#021430]  font-semibold z-10 snap-center text-white riunded-md  group"
          >
            <span className="relative z-10">Login</span>
            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-yellow-400 transition-all duration-600 group-hover:h-full"></span>
            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 delay-75 border-yellow-400 transition-all duration-700 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 delay-100 border-yellow-400 transition-all duration-700 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 delay-150 border-yellow-400 transition-all duration-700 group-hover:h-full"></span>
          </button>
          {/* <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-400 text-black font-bold py-2 px-4 rounded-full w-full shadow-lg hover:scale-110 transform transition duration-700">
            Login
          </button> */}

          <p className="mt-4 text-center">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-yellow-400 hover:text-yellow-500"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
