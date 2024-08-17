"use client";
import React, { useState } from 'react';
import './ContactMeSection.css';

const ContactSection = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="contact-container">
      <div 
        className={`contact-title ${isClicked ? 'clicked' : ''}`}
        onClick={() => setIsClicked(!isClicked)}
      >
        <h2>
          <span className="contact-c">C</span>
          <span className={`contact-o ${isClicked ? 'expand' : ''}`}><span classname='o-afterExpand'>
            O</span>
            <span className="highlight-text">HOW CAN I HELP?</span>
          </span>
          <span className="contact-rest">NTACT</span>
        </h2>
      </div>
      {isClicked && (
        <div className="contact-info">
          <p>Contact me at <a href="mailto:khushishrivas1805@gmail.com">khushishrivas1805@gmail.com</a>, or hit me up on LinkedIn.</p>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
