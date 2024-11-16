const Resume = () => {
  return (
    <div className="my-16 px-4 lg:px-20">
      <p className="text-2xl font-semibold text-center">Resume</p>
      <h1 className="text-3xl font-bold text-center my-6 text-gray-800">
        A Summary of My Resume
      </h1>

      <div className="container mx-auto mt-8">
        {/* Education Section */}
        <div className="lg:w-full mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Education
          </h1>

          <div className="space-y-6">
            {/* Education Item */}
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-700">MERN Stack Web Development</h2>
              <p className="text-gray-500">Programming Hero / 2023 - 2024</p>
              <p className="mt-2 text-gray-600">
                A comprehensive MERN stack program covering MongoDB, Express.js,
                React.js, and Node.js, providing a solid foundation in full-stack
                development through hands-on projects and modern development practices.
              </p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-700">Bachelor in Electrical Engineering</h2>
              <p className="text-gray-500">University of AMIE / 2016 - 2020</p>
              <p className="mt-2 text-gray-600">
                Studied electrical systems, circuit design, and power management with a
                focus on web development fundamentals.
              </p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-700">Diploma in Electronics Engineering</h2>
              <p className="text-gray-500">Kushtia Polytechnic Institute / 2009 - 2013</p>
              <p className="mt-2 text-gray-600">
                Gained expertise in circuit analysis, digital systems, and
                microcontroller programming with foundational computer science knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="lg:w-full mx-auto mt-10">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Projects
          </h1>

          <div className="space-y-6">
            {/* Project Item */}
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-700">ProLance</h2>
              <p className="text-gray-500">Freelancing Platform / Team Project</p>
              <p className="mt-2 text-gray-600">
                ProLance is a freelance marketplace platform similar to Fiverr, developed
                by our team using the MERN stack. The platform facilitates job posting,
                applications, and job management for clients and freelancers.
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Technologies:</strong> MongoDB, Express.js, React.js, Node.js,
                Tailwind CSS, Socket.IO, Axios, React Chart.js
              </p>
              <p className="mt-2 text-gray-600">
                <strong>My Contributions:</strong> Designed and implemented a responsive
                frontend, developed the job posting and management system, integrated
                real-time communication with Socket.IO, and contributed to data
                visualization with React Chart.js for tracking payments and transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
