import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWindows, FaLinux, FaApple } from "react-icons/fa";
import { useEffect, useState } from "react";

const Button = ({ children, className }) => (
  <motion.button
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-3 text-lg font-semibold rounded-md transition duration-300 shadow-md ${className}`}
  >
    {children}
  </motion.button>
);

export default function Home() {
  const [os, setOs] = useState("");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes("Win")) setOs("Windows");
    else if (userAgent.includes("Mac")) setOs("MacOS");
    else if (userAgent.includes("Linux")) setOs("Linux");
  }, []);

  return (
    // ✅ Apply the gradient background globally to keep it uniform
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white text-center px-6">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen w-full">

        {/* Subtle Glow Behind Text */}
        <div className="absolute -top-5 w-96 h-96 bg-purple-400 opacity-30 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1
            className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MCUViewer
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mb-6 drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The ultimate real-time visualization tool for embedded engineers. Debug, analyze, and optimize MCU data effortlessly.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mt-4"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-40 text-center bg-transparent">
        <h2 className="text-3xl font-semibold mb-6">Download MCUViewer</h2>
        <p className="text-gray-400 mb-6">Get started now and take control of your embedded system debugging.</p>

        <motion.div
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button className={`flex items-center gap-2 ${os === "Windows" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700 hover:bg-gray-800"}`}>
            <FaWindows /> Download for Windows
          </Button>
          <Button className={`flex items-center gap-2 ${os === "Linux" ? "bg-green-500 hover:bg-green-600" : "bg-gray-700 hover:bg-gray-800"}`}>
            <FaLinux /> Download for Linux
          </Button>
          <Button className={`flex items-center gap-2 ${os === "MacOS" ? "bg-purple-500 hover:bg-purple-600" : "bg-gray-700 hover:bg-gray-800"}`}>
            <FaApple /> Download for MacOS
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 flex flex-col items-center space-y-4 bg-transparent">
        <div className="flex space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/piotrek-wasilewski-9b63b198/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 text-3xl transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/klonyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 text-3xl transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-gray-500 text-sm">© 2025 MCUViewer. All rights reserved.</p>
      </footer>

    </div>
  );
}
