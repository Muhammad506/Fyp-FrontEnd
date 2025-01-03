import { motion } from "framer-motion";

const ContactUsHome = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    return (
        <section className="bg-[#F7F7F7]  text-black font-poppins ">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <motion.div
                    className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {/* Left Section */}
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left"
                        variants={fadeInUp}
                    >
                        <div className="flex flex-col gap-3">
                            <motion.h2
                                className="font-krona text-lg md:text-xl text-black lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-tight md:tracking-wide"
                                variants={fadeInUp}
                            >
                                Contact Us
                            </motion.h2>
                            <motion.p
                                className="text-gray-800 px-10 text-lg"
                                variants={fadeInUp}
                            >
                                Optimize your solar system! Fill out the form for expert monitoring and management support.
                            </motion.p>
                        </div>
                        <motion.div className="-mt-6" variants={fadeInUp}>
                            <img
                                src="/HomeContact.png"
                                alt="Contact Us"
                                className="rounded-xl "
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        className="lg:w-1/2 bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] p-6 rounded-xl shadow-xl"
                        variants={fadeInUp}
                    >
                        <form className="flex flex-col gap-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="name" className="block font-funnel font-medium text-white">
                                    Full Name
                                </label>
                                <motion.input
                                    type="text"
                                    id="name"
                                    placeholder="Enter Full Name"
                                    className="w-full mt-2 p-3 text-black bg-white rounded-lg border border-[#0f1c47] focus:ring-2 focus:ring-[#0f1c47] focus:outline-none hover:border-blue-500 transition-all duration-200 ease-in-out"
                                    required
                                    aria-label="Full Name"
                                    variants={fadeInUp}
                                />
                            </div>

                            {/* Email and Phone */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="w-full">
                                    <label htmlFor="email" className="block font-funnel font-medium text-white">
                                        Email
                                    </label>
                                    <motion.input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your Email"
                                        className="w-full mt-2 p-3 text-black bg-white rounded-lg border border-[#0f1c47] focus:ring-2 focus:ring-[#0f1c47] focus:outline-none hover:border-blue-500 transition-all duration-200 ease-in-out"
                                        required
                                        variants={fadeInUp}
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="phone" className="block font-funnel font-medium text-white">
                                        Phone
                                    </label>
                                    <motion.input
                                        type="tel"
                                        id="phone"
                                        placeholder="Enter Phone Number"
                                        className="w-full mt-2 p-3 text-black bg-white rounded-lg border border-[#0f1c47] focus:ring-2 focus:ring-[#0f1c47] focus:outline-none hover:border-blue-500 transition-all duration-200 ease-in-out"
                                        required
                                        variants={fadeInUp}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block font-funnel font-medium text-white">
                                    Message
                                </label>
                                <motion.textarea
                                    id="message"
                                    placeholder="Enter your Message here."
                                    rows="3"
                                    className="w-full mt-2 p-3 text-black bg-white rounded-lg border border-[#0f1c47] focus:ring-2 focus:ring-[#0f1c47] focus:outline-none hover:border-blue-500 transition-all duration-200 ease-in-out"
                                    required
                                    variants={fadeInUp}
                                ></motion.textarea>
                            </div>

                            {/* Terms and Submit */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                                <div className="flex items-start gap-2">
                                    <motion.input
                                        type="checkbox"
                                        id="terms"
                                        className="mt-1"
                                        required
                                        variants={fadeInUp}
                                    />
                                    <motion.label
                                        htmlFor="terms"
                                        className="text-sm text-gray-300"
                                        variants={fadeInUp}
                                    >
                                        I agree with{" "}
                                        <a href="#" className="text-[#EAB308] font-semibold underline">
                                            Terms of Use
                                        </a>{" "}
                                        and{" "}
                                        <a href="#" className="text-[#EAB308] font-semibold underline">
                                            Privacy Policy
                                        </a>
                                    </motion.label>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="px-4 py-2 bg-[#EAB308] text-nowrap font-medium text-black rounded-full hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition"
                                    variants={fadeInUp}
                                >
                               Submit
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUsHome;
