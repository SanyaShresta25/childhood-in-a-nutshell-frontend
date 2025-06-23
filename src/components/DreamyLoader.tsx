import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DreamyLoaderProps {
  show: boolean;
}

const DreamyLoader: React.FC<DreamyLoaderProps> = ({ show }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100"
        >
          <motion.div
            className="relative w-64 h-64 flex items-center justify-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5, ease: "easeInOut" }}
          >
            {/* Glowing Rings */}
            <div className="absolute w-full h-full border-4 border-pink-300 rounded-full animate-spin-slow opacity-40 blur-md" />
            <div className="absolute w-full h-full border-4 border-purple-300 rounded-full animate-spin-slower opacity-50 blur-md" />
            <div className="absolute w-full h-full border-4 border-blue-200 rounded-full animate-spin-slowest opacity-60 blur-sm" />

            {/* Sparkles */}
            <div className="absolute w-2 h-2 bg-yellow-300 rounded-full top-4 left-1/2 transform -translate-x-1/2 animate-ping" />
            <div className="absolute w-2 h-2 bg-yellow-300 rounded-full bottom-4 left-1/2 transform -translate-x-1/2 animate-pulse" />

            {/* Brewing Text */}
            <h1 className="text-purple-700 font-mystery text-2xl tracking-wide z-10 animate-text-shimmer">
              Brewing Magic{dots}
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DreamyLoader;
