
import { useRef } from 'react';
import './App.css';
import Navbar from './Layout/Navbar';
import Banner from './Layout/Banner/Banner';
import About from './Layout/About/About';
import Personal from './Layout/Personal/Personal';
import Resume from './Layout/Resume/Resume';
import Skill from './Layout/Skill/Skill';
import Project from './Layout/Project/Project';
import Footer from './Layout/Footer/Footer';
import ContactForm from './Layout/Personal/ContactFrom';

function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const personalRef = useRef(null);
  const resumeRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactFormRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Pass the scroll function and refs to Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        personalRef={personalRef}
        resumeRef={resumeRef}
        skillRef={skillRef}
        projectRef={projectRef}
        contactFormRef={contactFormRef}
      />
      
      <Banner scrollToSection={scrollToSection} aboutRef={aboutRef} projectRef={projectRef}/>
      <div ref={aboutRef}><About /></div>
      <div ref={personalRef}><Personal /></div>
      <div ref={resumeRef}><Resume /></div>
      <div ref={skillRef}><Skill /></div>
      <div ref={projectRef}><Project /></div>
      <div ref={contactFormRef}><ContactForm /></div>
      <Footer />
    </>
  );
}

export default App;
