import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import img from "../../../Image/image.png";

const Banner = ({ scrollToSection, aboutRef, projectRef }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen flex items-center">
      <div className="hero-content grid lg:grid-cols-2 gap-10 px-6 md:px-12">
        
        {/* Image Section with Lazy Loading */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-[70vh] lg:h-[80vh] rounded-xl overflow-hidden"
        >
          {imageLoaded ? (
            <img 
              src={img} 
              alt="Banner Background" 
              className="w-full h-full object-cover" 
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 dark:bg-gray-700 animate-pulse flex justify-center items-center">
              <p className="text-gray-500 dark:text-gray-400">Loading...</p>
            </div>
          )}
        </motion.div>

        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <p className="text-lg font-semibold text-green-600 dark:text-green-400">HI THERE!</p>
          <div className="py-6">
            <p className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text">
              I’m a Web Developer
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              I’m a Web Developer based in <span className="font-bold">Kushtia, Dhaka</span>. 
              I strive to build immersive and beautiful web applications through 
              carefully crafted code and user-centric design.
            </p>
          </div>
          
          {/* Buttons */}
          <motion.button 
            aria-label="Go to About Me section"
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            className="btn btn-accent mr-4 shadow-md transition-all"
            onClick={() => scrollToSection(aboutRef)}
          >
            About Me
          </motion.button>

          <motion.button 
            aria-label="Go to My Work section"
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            className="btn btn-accent shadow-md transition-all"
            onClick={() => scrollToSection(projectRef)}
          >
            My Work
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
