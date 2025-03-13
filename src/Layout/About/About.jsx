import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="mt-16 px-4 lg:px-20"
    >
      <div className="text-center mb-10">
        <motion.p 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl font-semibold"
        >
          About Me
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl font-bold text-gray-800 mt-2"
        >
          Know Me More
        </motion.p>
      </div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl text-gray-700 mb-6 text-center lg:text-left"
      >
        I'm a designer & developer with a passion for web design. I enjoy
        developing simple, clean, and slick websites that provide real value to
        the end user. Thousands of clients have procured exceptional results
        while working with me. Delivering work within time and budget that meets
        clients’ requirements is my primary focus.
      </motion.p>
    </motion.div>
  );
};

export default About;
