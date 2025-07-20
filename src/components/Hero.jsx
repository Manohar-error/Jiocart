import React from 'react';
import './Hero.css';
import picture2 from '../assets/picture 2.jpg'; 

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Beautifully Designed.<br />Thoughtfully Crafted.</h1>
          <p>Experience our collection of premium products designed with attention to every detail.</p>
          <a href="/products" className="hero-button">Shop Now →</a>
        </div>
        <div className="hero-image">
          <img src={picture2} alt="Hero Visual" />
        </div>
      </div>
    </div>
  );
}
