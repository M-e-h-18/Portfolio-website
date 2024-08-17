import React from 'react';
import './ScrollingTextBar.css';

const ScrollingTextBar = () => {
  const scrollingText = "Frontend Developer | Beginner Backend Developer | Curious Individual | Book Lover | Innovative individual | Computer science engineering student | Crafts lover | Frontend Developer | Beginner Backend Developer | Curious Individual | Book Lover | Innovative individual | Computer science engineering student | Crafts lover | Frontend Developer | Beginner Backend Developer | Curious Individual | Book Lover | Innovative individual | Computer science engineering student | Crafts lover | Frontend Developer | Beginner Backend Developer | Curious Individual | Book Lover | Innovative individual | Computer science engineering student | Crafts lover | ";

  return (
    <div className="scrolling-text-bar">
      <div className="scrolling-text">
        <span>{scrollingText}</span>
        <span>{scrollingText}</span> 
      </div>
    </div>
  );
};

export default ScrollingTextBar;
