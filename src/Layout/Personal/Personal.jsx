import img from "../../../Image/image.png";
import resume from "../../../Image/Resume02.pdf";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Personal = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-center items-center">
          <div className="text-center lg:text-left">
            <img
              src={img}
              alt="Profile Picture"
              className="lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] rounded-full bg-black"
            />
           {/* social icon  */}
           <div className="flex justify-center mt-8 space-x-6">
      <a
        href="https://www.facebook.com/"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <FaFacebook className="w-12 h-12 text-blue-700 hover:text-blue-900 transition-all duration-300" />
      </a>
      <a
        href="https://www.linkedin.com/in/md-juwel-rana-a86781294"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <FaLinkedin className="w-12 h-12 text-blue-700 hover:text-blue-800 transition-all duration-300" />
      </a>
      <a
        href="https://github.com/Juwelrana434"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <FaGithub className="w-12 h-12 text-gray-700 hover:text-black transition-all duration-300" />
      </a>
    </div>
          </div>
          <div className="lg:ml-10 text-center lg:text-left">
            <p className="text-lg font-semibold">I am a Web Developer</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 text-sm">
              <p><strong>Name:</strong> Md. Juwel Rana</p>
              <p><strong>Birth Date:</strong> 24 April 1993</p>
              <p><strong>Nationality:</strong> Bangladeshi</p>
              <p><strong>Address:</strong> Kushtia, Dhaka</p>
              <p><strong>Languages:</strong> Bangla, English</p>
              <p><strong>Phone:</strong> 01723954334</p>
              <p><strong>Email:</strong> jewel.rana434@gmail.com</p>
            </div>
            <button className="btn btn-accent mt-6">
              <a href={resume} download="Md_Juwel_Rana_Resume.pdf" className="p-2 text-white">
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
