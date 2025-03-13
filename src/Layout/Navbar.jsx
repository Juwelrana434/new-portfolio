import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../../Image/email.jpg";
import WhatsAppButton from "./WhatsAppButton/WhatsAppButton";

const Navbar = ({ scrollToSection, aboutRef, resumeRef, skillRef, projectRef, contactFormRef }) => {
  const sections = {
    skills: skillRef,
    projects: projectRef,
    "about me": aboutRef,
    resume: resumeRef,
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-screen-xl mx-auto sticky top-0 z-[100] bg-gradient-to-r from-green-500 to-[#88f2e7] shadow-lg"
    >
      <div className="navbar px-6 py-3 flex justify-between items-center">
        
        {/* Mobile Dropdown */}
        <div className="dropdown block lg:hidden">
          <button tabIndex={0} role="button" className="btn btn-ghost" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white transition-transform duration-300 hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <motion.ul 
            tabIndex={0} 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3 }} 
            className="menu menu-sm dropdown-content absolute w-40 bg-white shadow-lg mt-3 rounded-lg font-semibold overflow-hidden"
          >
            {Object.keys(sections).map((key) => (
              <li key={key}>
                <a className="hover:bg-green-300 transition" onClick={() => scrollToSection(sections[key])}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Logo */}
        <motion.p 
          whileHover={{ scale: 1.1 }} 
          className="btn btn-ghost text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-red-500"
        >
          Juwel
        </motion.p>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold space-x-6">
            {Object.keys(sections).map((key) => (
              <motion.li 
                key={key}
                whileHover={{ scale: 1.1, color: "#ff4500" }}
                transition={{ duration: 0.3 }}
              >
                <a onClick={() => scrollToSection(sections[key])}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Icons */}
        <div className="flex items-center gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <WhatsAppButton />
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.1, rotate: 5 }} 
            transition={{ type: "spring", stiffness: 300 }}
            className="text-white text-lg"
            onClick={() => scrollToSection(contactFormRef)}
            aria-label="Contact via Email"
          >
            <img src={img} alt="Email Icon" className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" loading="lazy" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;