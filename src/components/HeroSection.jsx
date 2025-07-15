// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Stranger Things</h1>
        <p className="hero-description">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
        </p>
        <div className="hero-buttons">
          <button className="btn play">▶ Play</button>
          <button className="btn info">ℹ More Info</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
