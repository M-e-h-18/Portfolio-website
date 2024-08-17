"use client";
import React, { useState, useRef, useEffect } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [isClicked, setIsClicked] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      className={`section ${isClicked ? 'clicked' : ''}`}
      onClick={() => setIsClicked(!isClicked)}
      ref={sectionRef}
    >
      <div className="section-title-container">
        <div className="section-title">
          <h1>
            <span className={`before`}>AB</span>
            <span className="highlight-o">O</span>
            <span className={`after`}>UT</span>
          </h1>
        </div>
      </div>
      <div className="section-content" style={{ opacity: isClicked ? 1 : 0 }}>
        <p>Hello, I'm Khushi. <br />
          I am a third year engineering student at VIT University, Vellore.
          I love all sorts of crafts and I also love cows. They are my favorite animal out of all.
          I am most of the time lost in my head with a lot of different plotlines running inside.
          I love glittery and shiny stuff.
          <br /><br />
          If you also like this stuff, let's talk!
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
