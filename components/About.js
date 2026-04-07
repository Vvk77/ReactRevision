import React from "react";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="about">
      
 
      <div className="about-hero">
        <h1>About AHARA 🍽️</h1>
        <p>
          Welcome to AHARA — your go-to platform for discovering amazing food
          and restaurants.
        </p>
      </div>

      <div className="about-container">

   
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            AHARA is a modern food delivery platform that connects users
            with the best restaurants around them.
          </p>
          <p>
            Our goal is to make food ordering simple, fast and enjoyable.
          </p>
        </div>

       
        <div className="about-card">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Wide variety of food</li>
            <li>Fast delivery</li>
            <li>Best deals</li>
            <li>User friendly experience</li>
          </ul>
        </div>

      </div>


      <div className="about-cta">
        <h2>Join AHARA Family ❤️</h2>
        <p>Enjoy the best food experience with us.</p>

      
        <Link to="/">
          <button className="about-btn">Explore Now</button>
        </Link>
      </div>

    </div>
  );
};

export default About;