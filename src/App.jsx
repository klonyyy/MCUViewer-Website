import { motion } from "framer-motion";

const Button = ({ children, className }) => (
  <button className={`px-6 py-3 text-lg font-semibold rounded-md transition duration-300 ${className}`}>
    {children}
  </button>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white text-center px-6">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen">
        <motion.h1
          className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MCUViewer
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          The ultimate real-time visualization tool for embedded engineers. Debug, analyze, and optimize MCU data effortlessly.
        </motion.p>
      </section>

      {/* Download Section */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold mb-6">Download MCUViewer</h2>
        <p className="text-gray-400 mb-6">Get started now and take control of your embedded system debugging.</p>
        <motion.div
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button className="bg-blue-500 hover:bg-blue-600">Download for Windows</Button>
          <Button className="bg-gray-700 hover:bg-gray-800">Download for Linux</Button>
          <Button className="bg-purple-500 hover:bg-purple-600">Download for MacOS</Button>
        </motion.div>
      </section>
    </div>
  );
}
