import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiLogOut, FiHome, FiBatteryCharging, FiPower, FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current location

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Animation variants for sidebar items
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    // Helper function to check if the link is active
    const isActive = (link) => location.pathname === link;

    return (
        <div>
            {/* Sidebar for Medium and Larger Screens */}
            <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden md:flex fixed text-white flex-col min-h-screen bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430]"
            >
                {/* Logo and Project Name */}
                <Link to="/">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="px-4 py-2 flex flex-col items-center space-x-4 border-b border-gray-600"
                    >
                        <img
                            src="/NavBar.png"
                            alt="Solar Intelli Solutions Logo"
                            className="w-20 h-20 object-contain rounded-full"
                        />
                    </motion.div>
                </Link>

                <nav className="flex-grow my-4">
                    <ul className="space-y-4 px-4 my-2">
                        {[{
                            name: "Dashboard", icon: <FiHome />, link: "/dashboard"
                        }, {
                            name: "Active Plates", icon: <FiHome />, link: "/dashboard/active-plates"
                        }, {
                            name: "Current Wastages", icon: <FiBatteryCharging />, link: "#current-wastages"
                        }, {
                            name: "Power Generated", icon: <FiPower />, link: "#power-generated"
                        }, {
                            name: "Energy Savings", icon: <FiSettings />, link: "#energy-savings"
                        }, {
                            name: "Battery Status", icon: <FiBatteryCharging />, link: "#battery-status"
                        }, {
                            name: "Total Systems Monitored", icon: <FiSettings />, link: "#systems-monitored"
                        }].map((item, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className={`p-2 rounded flex items-center space-x-4 transition-all duration-300 ${isActive(item.link) ? "bg-gray-700" : "hover:bg-gray-700"}`}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="text-xl"
                                >
                                    {item.icon}
                                </motion.div>
                                <Link to={item.link}>{item.name}</Link>
                            </motion.li>
                        ))}
                    </ul>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="p-6 border-t border-gray-700"
                    >
                        <button className="w-full py-2 rounded flex items-center justify-center space-x-2 bg-[#5B9B37] hover:bg-[#4A8B2E]">
                            <FiLogOut className="text-lg" />
                            <span>Logout</span>
                        </button>
                    </motion.div>
                </nav>
            </motion.div>

            {/* Navbar for Small Screens */}
            <div className="md:hidden w-full fixed bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] text-white px-4 flex border-b border-white justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img
                        src="/NavBar.png"
                        alt="Solar Intelli Solutions Logo"
                        className="w-16 h-16 object-contain rounded-full"
                    />
                </div>
                <button onClick={toggleMenu}>
                    {isOpen ? (
                        <AiOutlineClose className="text-3xl" />
                    ) : (
                        <AiOutlineMenu className="text-3xl" />
                    )}
                </button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] text-white shadow-lg z-50"
                >
                    <nav>
                        <ul className="space-y-4 px-4 py-6">
                            {[{
                                name: "Active Plates", icon: <FiHome />, link: "#active-plates"
                            }, {
                                name: "Current Wastages", icon: <FiBatteryCharging />, link: "#current-wastages"
                            }, {
                                name: "Power Generated", icon: <FiPower />, link: "#power-generated"
                            }, {
                                name: "Energy Savings", icon: <FiSettings />, link: "#energy-savings"
                            }, {
                                name: "Battery Status", icon: <FiBatteryCharging />, link: "#battery-status"
                            }, {
                                name: "Total Systems Monitored", icon: <FiSettings />, link: "#systems-monitored"
                            }].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className={`p-2 rounded flex items-center space-x-4 transition-all duration-300 ${isActive(item.link) ? "bg-gray-700" : "hover:bg-gray-700"}`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="text-xl"
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <Link to={item.link} onClick={toggleMenu}>
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                    <div className="p-6 border-t border-gray-700">
                        <button
                            className="w-full py-2 rounded flex items-center justify-center space-x-2 bg-[#5B9B37] hover:bg-[#4A8B2E]"
                            onClick={toggleMenu}
                        >
                            <FiLogOut className="text-lg" />
                            <span>Logout</span>
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Sidebar;
