import React from "react";
import "../styles/HeroSection.css";
import kochi from "../assets/kochi.svg";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empower</h1>
        <p>
          Empowering urban environments through innovative solutions. Join us in
          creating a better tomorrow for cities around the world.
        </p>
      </div>
      <div className="hero-image">
        <img
          src={kochi} // Replace with actual image
          alt="Digital Wave"
        />
      </div>
    </section>
  );
};

export default HeroSection;
