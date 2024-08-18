"use client";
import React, { useState } from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [expandO, setExpandO] = useState(false);

  const handleToggleProjects = () => {
    setExpandO(true);
    setTimeout(() => {
      setShowProjects(!showProjects);
      setExpandO(false);
    }, 200); 
  };

  return (
    <div className={`projects-container ${showProjects ? 'clicked' : ''}`}>
      <h2 className={`projects-title ${expandO ? 'expand-o' : ''}`} onClick={handleToggleProjects}>
        PR<span className={`projects-o ${expandO ? 'expanded' : ''}`}>O</span>JECTS
      </h2>
      
      {showProjects && (
        <div className="projects-cards-container">
          <div className="project-card">
            <img src="./ecommerce.gif" alt="V-Bay" />
            <div>V-Bay</div>
          </div>
          <div className="project-card2">
            <img src="./memory_game.gif" alt="Memory Game" />
            <div>Memory Game</div>
          </div>
          <div className="project-card">
            <img src="./quiz.gif" alt="Quiz Portal" />
            <div>Quiz Portal</div>
          </div>
          
          
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
