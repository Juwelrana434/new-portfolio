import repair from "../../../Image/Repair.jpg";
import dream from "../../../Image/Dream.jpg";
import Navigator from "../../../Image/tajmohol.jpg";
import prolance from "../../../Image/prolance.png";

const Project = () => {
  return (
    <div className="my-16 px-4 lg:px-20">
      <h1 className="my-10 text-center font-bold text-4xl text-gray-800">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {/* ProLance */}
        <a
          href="https://prolance-482df.web.app/"
          className="transform hover:scale-105 transition-all duration-300"
        >
          <div className="relative">
            <img
              src={prolance}
              className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl"
              alt="ProLance"
            />
            <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white text-center py-2 rounded-b-2xl">
              ProLance
            </div>
          </div>
        </a>
        
        {/* Repair Zone */}
        <a
          href="https://repair-zone-e11f8.web.app/"
          className="transform hover:scale-105 transition-all duration-300"
        >
          <div className="relative">
            <img
              src={repair}
              className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl"
              alt="Repair Zone"
            />
            <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white text-center py-2 rounded-b-2xl">
              Repair Zone
            </div>
          </div>
        </a>

        {/* Dream */}
        <a
          href="https://resilient-banoffee-a2dac7.netlify.app/"
          className="transform hover:scale-105 transition-all duration-300"
        >
          <div className="relative">
            <img
              src={dream}
              className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl"
              alt="Dream"
            />
            <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white text-center py-2 rounded-b-2xl">
              Dream Destination
            </div>
          </div>
        </a>

        {/* Tourist Navigator */}
        <a
          href="https://tourist-guide-6180c.web.app/"
          className="transform hover:scale-105 transition-all duration-300"
        >
          <div className="relative">
            <img
              src={Navigator}
              className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl"
              alt="Tourist Navigator"
            />
            <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white text-center py-2 rounded-b-2xl">
              Tourist Navigator
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
