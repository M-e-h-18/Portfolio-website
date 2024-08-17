import React from 'react';
import './globals.css';
import NameDisplay from '../components/NameDisplay';
import AboutSection from '../components/AboutSection'; 
import ContactMeSection from '../components/ContactMeSection';
import ProjectsSection from '../components/ProjectsSection';
export default function Home() {
  return (
    <div>
      <NameDisplay />
      <div className="sections-container">
        <div className="section1"><AboutSection /></div>
        <div className="blank"></div>
        <div className="section3" id="projects">
      <ProjectsSection/>
        </div>
        <div className="blank"></div>
        <div className="section2" id="contact">
       
      <ContactMeSection />
   
        </div>
        
        
      </div>
      <footer className="footer">
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/khushi-shrivas-bba781250/">
            <img src="./linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/M-e-h-18">
            <img src="./github.png" alt="GitHub" />
          </a>
          <a href="insta">
            <img src="./insta.png" alt="Insta" />
          </a>
        </div>
        <div className="footer-p">
          <p>© 2024 Khushi Shrivas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
