import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import DreamyLoader from "../components/DreamyLoader"; // adjust import if needed

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative"
    >
      {/* Loader while Spline loads */}
     <DreamyLoader show={isLoading} />

      

     <div className={`max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          viewport={{ once: true }}
          className="magical-card p-8 md:p-12 max-w-2xl w-full relative text-center md:text-left"
        >
          <h1 className="text-6xl md:text-9xl font-schoolbell mb-6 leading-tight tracking-wide">
            <span className="gradient-text">Childhood</span>
            <br />
            <span className="text-disney-purple">in a</span>
            <br />
            <span className="gradient-text">Nutshell</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-6 font-gloria leading-relaxed">
            Relive your childhood memories with our enchanting collection
          </p>

          <div className="flex justify-center mt-6">
            <a href="#features">
              <button className="uiverse-button">
                <span>Explore the Magic 🪄</span>
              </button>
            </a>
          </div>
        </motion.div>

        {/* Spline 3D */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-[500px]"
        >
          <Spline
            scene="https://prod.spline.design/bUo7YHJs-yGFLDW8/scene.splinecode"
            onLoad={() => setIsLoading(false)}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
