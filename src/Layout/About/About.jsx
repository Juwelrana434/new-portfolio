const About = () => {
  return (
    <div className="mt-16 px-4 lg:px-20">
      <div className="text-center mb-10">
        <p className="text-2xl font-semibold text-primary">About Me</p>
        <p className="text-4xl font-bold text-gray-800 mt-2">Know Me More</p>
      </div>

      <p className="text-3xl my-6 text-center">
        Hi, I'm <span className="font-bold text-primary">Md Juwel Rana</span>
      </p>
      
      <p className="text-xl text-gray-700 mb-6 text-center lg:text-left">
        I'm a designer & developer with a passion for web design. I enjoy
        developing simple, clean, and slick websites that provide real value to
        the end user. Thousands of clients have procured exceptional results
        while working with me. Delivering work within time and budget that meets
        clients’ requirements is my primary focus.
      </p>

      {/* Optional Image Section */}
      {/* <div className="flex justify-center mt-8">
        <img
          src="your-image-path.jpg" // Add your image path here
          alt="Md Juwel Rana"
          className="w-48 h-48 rounded-full shadow-lg"
        />
      </div> */}
    </div>
  );
};

export default About;
