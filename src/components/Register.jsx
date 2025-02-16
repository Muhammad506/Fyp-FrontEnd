import { useState, useEffect, useRef } from "react";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [, setButtonInView] = useState(false);
  const buttonRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

      alert(data.message); // Display success message
      navigate("/login"); // Redirect to login
    } catch (err) {
      setError(
        err.response?.data?.error || "Registration failed. Please try again."
      );
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setButtonInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col md:flex-row text-white overflow-hidden">
      <Link to="/">
        <motion.div
          {...fadeIn}
          className="absolute z-50 left-4 top-4 opacity-90  hover:scale-105 duration-700 text-white border border-white text-xl font-semibold rounded-3xl px-4 py-1 bg-black bg-opacity-50 shadow-lg"
        >
          Back
        </motion.div>
      </Link>


      <motion.div {...fadeIn} className="w-full md:w-[60%] lg:w-[70%] xl:w-[75%] hidden md:block">
        <img
          src="LR-bg.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Register Form */}
      <motion.div
        {...fadeIn}
        className="bg-[#0F172A] w-full md:w-[40%] lg:w-[30%] xl:w-[25%] flex flex-col items-center p-6 justify-center shadow-xl"
      >
        <motion.img
          {...fadeIn}
          src="NavBar.png"
          alt="logo"
          className="w-24 mb-4"
        />
        <motion.h1
          {...fadeIn}
          className="font-bold text-3xl md:text-4xl text-yellow-400 text-center mb-4"
        >
          Register
        </motion.h1>
        <motion.p
          {...fadeIn}
          className="text-gray-300 mb-6 px-4 text-center"
        >
          Start generating your thoughts with Solar Intelli Solutions.
        </motion.p>

        {error && <motion.p {...fadeIn} className="text-red-500 mb-4">{error}</motion.p>}

        <motion.form {...fadeIn} className="w-full max-w-xs space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              className="block text-gray-300 text-sm font-semibold mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <motion.div
              {...fadeIn}
              className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-3 shadow-md"
            >
              <CgProfile className="text-yellow-400 mr-2" />
              <input
                className="bg-transparent w-full text-white py-1 px-2 placeholder-gray-400 focus:outline-none"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-gray-300 text-sm font-semibold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <motion.div
              {...fadeIn}
              className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-3 shadow-md"
            >
              <MdEmail className="text-yellow-400 mr-2" />
              <input
                className="bg-transparent w-full text-white py-1 px-2 placeholder-gray-400 focus:outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-gray-300 text-sm font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <motion.div
              {...fadeIn}
              className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-3 shadow-md"
            >
              <RiLock2Fill className="text-yellow-400 mr-2" />
              <input
                className="bg-transparent w-full text-white py-1 px-2 placeholder-gray-400 focus:outline-none"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </motion.div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              className="block text-gray-300 text-sm font-semibold mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <motion.div
              {...fadeIn}
              className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-3 shadow-md"
            >
              <RiLock2Fill className="text-yellow-400 mr-2" />
              <input
                className="bg-transparent w-full text-white py-1 px-2 placeholder-gray-400 focus:outline-none"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </motion.div>
          </div>

          {/* Register Button */}
          <motion.button
            ref={buttonRef}
            {...fadeIn}
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 ease-in-out hover:scale-105 duration-700 text-black px-8 py-2 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all hover:text-white shadow-md hover:shadow-lg"
            disabled={error || !formData.name || !formData.email || !formData.password || !formData.confirmPassword}
          >
            {error ? "Please fix the errors" : "Register"}
          </motion.button>

          <p className="mt-3 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-yellow-400 hover:text-yellow-500"
            >
              Login
            </Link>
          </p>
        </motion.form>
      </motion.div>

    </main>
  );
};

export default Register;
