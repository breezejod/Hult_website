import React from "react";
import hult from "../assets/hult.png"; // Ensure you have the correct path to your image

const About = () => {
  return (
    <div className="p-4 about-container sm:p-8 md:p-12 lg:p-16">
      <div className="about-header">
        <h1 className="pt-20 pb-10 pl-20 text-3xl font-semibold text-montserrat">
          ABOUT <span className="text-pink-400"> HULT 2024 </span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center space-y-8 about-content sm:flex-row sm:space-y-0 sm:space-x-8">
        <div className="w-full about-text sm:w-1/2">
          <p className="px-4 sm:px-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quasi iusto laudantium obcaecati. Iure, nulla? Eaque, vel. Voluptatibus optio quidem, iusto, illum praesentium veniam libero repellendus provident aspernatur officia natus tenetur, magni a! Sapiente eligendi animi ea alias officiis laudantium harum cupiditate, earum autem dolorem iusto, quis at in dolore.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quasi iusto laudantium obcaecati. Iure, nulla? Eaque, vel. Voluptatibus optio quidem, iusto, illum praesentium veniam libero repellendus provident aspernatur officia natus tenetur, magni a! Sapiente eligendi animi ea alias officiis laudantium harum cupiditate, earum autem dolorem iusto, quis at in dolore.
          </p>
        </div>
        <div className="w-full about-image sm:w-1/2">
          <img src={hult} alt="Hult Event" className="w-full max-w-lg mx-auto rounded-lg my-11" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-8 additional-info sm:flex-row sm:space-y-0 sm:space-x-8">
        <div className="w-full info-item sm:w-1/2">
          <h2 className="text-2xl font-semibold text-pink-400">Our Mission</h2>
          <p className="px-4 sm:px-0">
            We are dedicated to promoting innovation and collaboration in the world of business and entrepreneurship. Our mission is to empower individuals and teams to create positive changes in their communities and beyond.
          </p>
        </div>
        <div className="w-full info-item sm:w-1/2">
          <h2 className="text-2xl font-semibold text-pink-400">Join Us</h2>
          <p className="px-4 sm:px-0">
            HULT 2024 welcomes passionate individuals and organizations to join us on our journey. Be a part of our community and make a difference in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
