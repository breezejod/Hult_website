import React from "react";
import hult from "../assets/hult.png"; // Ensure you have the correct path to your image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="pt-20 pb-10 pl-20 text-3xl font-semibold text-montserrat">
          ABOUT <span className="text-pink-400"> HULT 2024 </span>
        </h1>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p className="px-20">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quasi iusto laudantium obcaecati. Iure, nulla? Eaque, vel. Voluptatibus optio quidem, iusto, illum praesentium veniam libero repellendus provident aspernatur officia natus tenetur, magni a! Sapiente eligendi animi ea alias officiis laudantium harum cupiditate, earum autem dolorem iusto, quis at in dolore.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quasi iusto laudantium obcaecati. Iure, nulla? Eaque, vel. Voluptatibus optio quidem, iusto, illum praesentium veniam libero repellendus provident aspernatur officia natus tenetur, magni a! Sapiente eligendi animi ea alias officiis laudantium harum cupiditate, earum autem dolorem iusto, quis at in dolore.
          </p>
        </div>
        <div className="about-image">
          <img src={hult} alt="Hult Event" className="w-full max-w-lg mx-auto rounded-lg my-11" />
        </div>
      </div>
      <div className="additional-info">
        <div className="info-item">
          <h2 className="text-2xl font-semibold text-pink-400">Our Mission</h2>
          <p className="px-20">
            We are dedicated to promoting innovation and collaboration in the world of business and entrepreneurship. Our mission is to empower individuals and teams to create positive changes in their communities and beyond.
          </p>
        </div>
        <div className="info-item">
          <h2 className="text-2xl font-semibold text-pink-400">Join Us</h2>
          <p className="px-20">
            HULT 2024 welcomes passionate individuals and organizations to join us on our journey. Be a part of our community and make a difference in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
