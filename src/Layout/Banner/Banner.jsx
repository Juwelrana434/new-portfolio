import img from "../../../Image/image.png";

const Banner = ({ scrollToSection, aboutRef, projectRef }) => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content grid lg:grid-cols-2">
          <div
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "100vh",
              width: "100%",
            }}
          >
            {/* Background Image Container */}
          </div>
          <div>
            <p className="text-lg font-semibold">HI THERE!</p>
            <div className="py-6">
              <p className="text-5xl font-bold mb-3">I’m a WEB Developer</p>
              <p className="text-xl">
                I’m a Web Developer based in Kushtia, Dhaka. I strive to build
                immersive and beautiful web applications through carefully
                crafted code and user-centric design.
              </p>
            </div>
            <button className="btn btn-primary mr-4" onClick={() => scrollToSection(aboutRef)}>About Me</button>
            <button className="btn btn-primary" onClick={() => scrollToSection(projectRef)}>My Work</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
