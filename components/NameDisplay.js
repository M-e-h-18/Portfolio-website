"use client";
import React, { useEffect, useRef } from 'react';
import './NameDisplay.css';
import CanvasNameDisplay from './CanvasNameDisplay';
import CanvasNameDisplay2 from './CanvasNameDisplay2';
import ScrollingTextBar from './ScrollingTextBar';

const NameDisplay = () => {
  const nameContainerRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scaleValue = Math.max(1 - scrollY / 1000, 0.9); 

      nameContainerRef.current.style.transform = `scale(${scaleValue})`;
      arrowRef.current.style.transform = `scale(${scaleValue})`;

      // Adjust opacity for better visibility
      nameContainerRef.current.style.opacity = `${scaleValue}`;
    };

    const handleArrowClick = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    };

    window.addEventListener('scroll', handleScroll);
    arrowRef.current.addEventListener('click', handleArrowClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      arrowRef.current.removeEventListener('click', handleArrowClick);
    };
  }, []);

  return (
    <div className="containers" ref={nameContainerRef}>
      <div className="name-container">
        <h1>
          KHUSH<CanvasNameDisplay2 delay={0} />
        </h1>
        <ScrollingTextBar />
        <h1>
          SHR<CanvasNameDisplay delay={0} />VAS
        </h1>
      </div>
      <div className="arrow-container" ref={arrowRef}>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default NameDisplay;
