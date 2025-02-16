import { useState } from "react";
import { MdEmail, MdClose } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
};

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [step, setStep] = useState(1);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.post(
                "http://localhost:5000/api/auth/login",
                { email, password }
            );
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        } catch (error) {
            setMessage(error.response?.data?.error || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/send-code", {
                email: email,
            });
            setMessage("A verification code has been sent to your email.");
            setStep(2);
        } catch (error) {
            setMessage(error.response?.data?.error || "Failed to send code.");
        }
    };

    return (
        <main className="h-full lg:h-screen flex flex-col md:flex-row text-white overflow-visible md:overflow-hidden">

            {/* back button  */}
            <Link to="/">
                <motion.div
                    {...fadeIn}
                    className="absolute z-50 left-4 top-4 opacity-90  hover:scale-105 duration-700 text-white border border-white text-xl font-semibold rounded-3xl px-4 py-1 bg-black bg-opacity-50 shadow-lg"
                >
                    Back
                </motion.div>
            </Link>

            {/* left img  */}
            <motion.div {...fadeIn} className="w-full md:w-[60%] lg:w-[70%] xl:w-[75%] hidden md:block">
                <img
                    src="LR-bg.jpg"
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* right form  */}
            <motion.div
                {...fadeIn}
                className="bg-[#0F172A] w-full md:w-[40%] lg:w-[30%] xl:w-[25%] flex flex-col items-center p-6 justify-center shadow-xl"
            >
                <motion.img {...fadeIn} src="NavBar.png" alt="navbar" className="w-28 mb-2" />
                <motion.h1
                    {...fadeIn}
                    className="font-bold text-3xl md:text-4xl xl:text-5xl text-center mb-4 text-yellow-400"
                >
                    Login
                </motion.h1>
                <motion.p
                    {...fadeIn}
                    className="text-gray-300 mb-6 px-2 w-full xl:w-[75%] text-center"
                >
                    Start generating your thoughts with Solar Intelli Solutions.
                </motion.p>

                <motion.form {...fadeIn} className="w-full max-w-xs space-y-4" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div>
                        <label
                            className="block text-gray-300 font-semibold mb-1"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <motion.div
                            {...fadeIn}
                            className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-3 shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <MdEmail className="text-yellow-400 mr-2" />
                            <input
                                className="appearance-none bg-transparent w-full text-white py-1 px-2 placeholder-gray-400 focus:outline-none "
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-label="Enter your email"
                                required
                            />
                        </motion.div>
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            className="block text-gray-300 font-semibold mb-1"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <motion.div
                            {...fadeIn}
                            className="flex items-center border border-gray-600 rounded-lg bg-gradient-to-t from-[#1C204B] to-[#10172D] py-2 px-3 shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <RiLock2Fill className="text-yellow-400 mr-2" />
                            <input
                                className="appearance-none bg-transparent w-full text-white py-1 px-2 placeholder-gray-400 focus:outline-none "
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-label="Enter your password"
                                required
                            />
                        </motion.div>
                    </div>

                    <motion.div {...fadeIn} className="flex items-center justify-between mt-4">
                        <button
                            onClick={() => setShowForgotPassword(true)}
                            className="text-yellow-400 hover:text-yellow-500 font-semibold transition-colors duration-300"
                        >
                            Forgot Password?
                        </button>
                    </motion.div>
                    <div className="flex justify-center items-center px-2">
                        <motion.button
                            {...fadeIn}
                            type="submit"
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 ease-in-out hover:scale-105 duration-700 text-black px-8 py-2 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all hover:text-white shadow-md hover:shadow-lg"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </motion.button>
                    </div>

                    {message && (
                        <motion.p
                            {...fadeIn}
                            className="text-red-400 text-center mt-2"
                        >
                            {message}
                        </motion.p>
                    )}

                    <motion.p {...fadeIn} className="mt-4 text-center">
                        Don’t have an account?{" "}
                        <Link
                            to="/register"
                            className="font-semibold text-yellow-400 hover:text-yellow-500 transition-colors duration-500"
                        >
                            Register
                        </Link>
                    </motion.p>
                </motion.form>
            </motion.div>

            {showForgotPassword && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <motion.div {...fadeIn} className="bg-[#0F172A] p-8 border border-white w-full max-w-lg   relative">
                        <button
                            onClick={() => setShowForgotPassword(false)}
                            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors duration-300"
                        >
                            <MdClose size={24} />
                        </button>
                        {step === 1 && (
                            <form onSubmit={handleForgotPasswordSubmit}>
                                <h2 className="text-yellow-400 text-2xl font-bold mb-4">Reset Password</h2>
                                <div className="mb-4">
                                    <label className="block text-gray-300  font-semibold mb-1" htmlFor="forgot-email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="forgot-email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none "
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className=" bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 w-fit py-2 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-700 shadow-md hover:shadow-lg"
                                >
                                    Send Code
                                </button>
                            </form>
                        )}
                        {step === 2 && (
                            <div>
                                <h2 className="text-yellow-400 text-2xl font-bold mb-4">Enter Verification Code</h2>
                                <input
                                    type="text"
                                    placeholder="Enter verification code"
                                    value={verificationCode}
                                    onChange={(e) => setVerificationCode(e.target.value)}
                                    className="w-full p-2 rounded bg-gray-700 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full p-2 rounded bg-gray-700 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                                <button
                                    onClick={() => setStep(3)}
                                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    Reset Password
                                </button>
                            </div>
                        )}
                        {step === 3 && (
                            <div>
                                <h2 className="text-yellow-400 text-2xl font-bold mb-4">Password Reset Successful</h2>
                                <p className="text-gray-300">Your password has been reset successfully.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </main>
    );
};

export default Login;
