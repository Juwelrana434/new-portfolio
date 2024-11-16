// import { FaEnvelope } from "react-icons/fa";

// const Navbar = () => {

 
//     return (
//         <div className="max-w-screen-xl mx-auto sticky z-50 top-0">
//             <div className="navbar bg-[#197ee4] px-4 py-2">
//                 <div className="navbar-start flex items-center">
//                     {/* Dropdown for mobile screens */}
//                     <div className="dropdown block lg:hidden">
//                         <div tabIndex={0} role="button" className="btn btn-ghost">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 p-2 shadow rounded-2xl">
//                             <li><a>Skills</a></li>
//                             <li><a>Project</a></li>
//                             <li><a>About Me</a></li>
//                             <li><a>Resume</a></li>
//                         </ul>
//                     </div>

//                     {/* Logo or Brand Name */}
//                     <a className="btn btn-ghost text-xl text-white">Juwel</a>
//                 </div>

//                 {/* Centered Menu (Hidden on small screens, visible on larger ones) */}
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         <li><a>Skills</a></li>
//                         <li><a>Project</a></li>
//                         <li><a>About Me</a></li>
//                         <li><a>Resume</a></li>
//                     </ul>
//                 </div>

//                 {/* Email Icon and Text */}
//                 <div className="navbar-end flex items-center">
//                     <p className="mr-2 text-white text-lg hidden sm:block"><FaEnvelope /></p>
                    
//                     <button className="text-white text-lg hidden sm:block">jewel.rana434@gmail.com</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import { FaEnvelope } from "react-icons/fa";
import img from "../../Image/email.jpg";
import WhatsAppButton from './WhatsAppButton/WhatsAppButton';


const Navbar = ({
  scrollToSection,
  aboutRef,
  personalRef,
  resumeRef,
  skillRef,
  projectRef,
  contactFormRef
}) => {
  return (
    <div className="max-w-screen-xl mx-auto sticky z-50 top-0">
      <div className="navbar px-4 py-2">
        <div className="navbar-start flex items-center">
          {/* Dropdown for mobile screens */}
          <div className="dropdown block lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 p-2 shadow  font-semibold">
              <li><a onClick={() => scrollToSection(skillRef)}>Skills</a></li>
               <li><a onClick={() => scrollToSection(projectRef)}>Project</a></li>
              <li><a onClick={() => scrollToSection(aboutRef)}>About Me</a></li> 
              <li><a onClick={() => scrollToSection(resumeRef)}>Resume</a></li>
            </ul>
          </div>

          {/* Logo or Brand Name */}
           <p className="btn btn-ghost text-xl text-green-700">Juwel</p>
         
        </div>

        {/* Centered Menu (Hidden on small screens, visible on larger ones) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li><a onClick={() => scrollToSection(skillRef)}>Skills</a></li>
            <li><a onClick={() => scrollToSection(projectRef)}>Project</a></li>
            <li><a onClick={() => scrollToSection(aboutRef)}>About Me</a></li>
            <li><a onClick={() => scrollToSection(resumeRef)}>Resume</a></li>
          </ul>
        </div>

        {/* Email Icon and Text */}
        <div className="navbar-end flex items-center">
          {/* <p className="mr-2 text-white text-lg hidden sm:block"><FaEnvelope /></p> */}
         
          <p className="mr-4"><WhatsAppButton></WhatsAppButton></p>
          <button className="text-white text-lg" onClick={() => scrollToSection(contactFormRef)}><img src={img} alt="" className="w-12 h-12" /></button>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;


