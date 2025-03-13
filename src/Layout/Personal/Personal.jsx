import { motion } from "framer-motion";
import img from "../../../Image/image.png";
import resume from "../../../Image/Resume02.pdf";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Personal = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-base-200 px-4 lg:px-20"
    >
      <div className="hero-content flex flex-col lg:flex-row justify-center items-center">
        
        {/* Profile Image */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <img
            src={img}
            alt="Profile"
            className="lg:w-[280px] lg:h-[280px] w-[180px] h-[180px] rounded-full border-4 border-gray-300 shadow-lg"
          />

          {/* Social Icons */}
          <div className="flex justify-center mt-6 space-x-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-10 h-10 text-blue-700 hover:text-blue-900 transition-all duration-300" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/md-juwel-rana-a86781294"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-10 h-10 text-blue-700 hover:text-blue-800 transition-all duration-300" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Juwelrana434"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-10 h-10 text-gray-700 hover:text-black transition-all duration-300" />
            </motion.a>
          </div>
        </motion.div>

        {/* Personal Information */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="lg:ml-12 text-center lg:text-left mt-6 lg:mt-0"
        >
          <p className="text-xl font-semibold text-gray-800">I am a Web Developer</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 text-md">
            <p><strong>Name:</strong> Md. Juwel Rana</p>
            <p><strong>Birth Date:</strong> 24 April 1993</p>
            <p><strong>Nationality:</strong> Bangladeshi</p>
            <p><strong>Address:</strong> Kushtia, Dhaka</p>
            <p><strong>Languages:</strong> Bangla, English</p>
            <p><strong>Phone:</strong> 01723954334</p>
            <p><strong>Email:</strong> jewel.rana434@gmail.com</p>
          </div>

          {/* Download Resume Button */}
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="btn btn-accent mt-6 px-6 py-3 text-lg font-semibold rounded-md shadow-lg"
          >
            <a href={resume} download="Md_Juwel_Rana_Resume.pdf" className="text-white">
              Download Resume
            </a>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Personal;
