import React from 'react';
import '../styles/AboutMission.css'; // Custom CSS file for styling
//import missionImage from './mission-image.jpg'; // Replace with your image path

const AboutMission = () => {
  return (
    <div className="about-mission-container">
      <div className="about-mission-content">
        <h1 className="mission-title">ABOUT OUR MISSION</h1>
        <div className="mission-text">
          <div className="vision-section">
            <h3>Our Vision</h3>
            <p>
              At <strong>cVSync</strong>, we are dedicated to tackling urban challenges head-on. 
              Our integrated platform offers a suite of tools to enhance city living, promote sustainability, 
              and drive positive change.
            </p>
          </div>
          <div className="collaboration-section">
            <p>
              We collaborate with urban stakeholders to build smart, efficient, and sustainable cities. 
              Our mission is to revolutionize urban management and create vibrant, future-ready communities.
            </p>
            <button className="explore-btn">Explore More</button>
          </div>
        </div>
      </div>

      <div className="mission-image">
        
      </div>
    </div>
  );
};

export default AboutMission;
