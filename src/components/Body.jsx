import React from "react";
import hult from "../assets/hult.png";

const Body = () => {
  return (
    <>
      <div className="relative text-center">
        <img className="px-1 mx-auto rounded pt-7" src={hult} alt="Hult logo" />
        <div className="bg-pink-200 h-[40vh]">
          <h1 className="text-black font-merriweather text-9xl">HULT 2024</h1>
          <div className="grid grid-cols-2 gap-8 p-6">
            {Array(4).fill().map((_, index) => (
              <div key={index} className="p-4 bg-white rounded shadow-lg">
                <div className="absolute w-2 h-2 -ml-1 bg-white rounded-full left-1/2 top-5"></div>
                <div className="absolute w-2 h-2 -ml-1 bg-white rounded-full left-1/2 bottom-5"></div>
                <img src={hult} alt={`Event ${index + 1}`} className="w-full mb-4 rounded-lg" />
                <h2 className="mb-2 text-xl text-black font-montserrat">Event {index + 1} Title</h2>
                <p className="text-gray-600">
                  Short description of Event {index + 1}. This is where you can provide information about the event.
                </p>
              </div>
            ))}
          </div>
          
          {/* Section 1: Register Now and Rule Book */}
          <div className="flex justify-center mt-8">
            <div className="p-4 m-4 transition duration-300 bg-pink-500 rounded shadow-lg hover:bg-pink-600">
              <p className="mb-4 text-center text-white">Register for the event now!</p>
              <a href="/registration" className="block text-center text-white transition duration-300 hover:text-pink-500">Register Now</a>
            </div>
            <div className="p-4 m-4 transition duration-300 bg-pink-500 rounded shadow-lg hover:bg-pink-600">
              <p className="mb-4 text-center text-white">Get the event rule book.</p>
              <a href="/rulebook" className="block text-center text-white transition duration-300 hover:text-pink-500">Rule Book</a>
            </div>
          </div>

          {/* Section 2: Hult Prize Images Grid with Subheading */}
          <div className="flex flex-col items-center mt-8">
            <h2 className="text-2xl font-bold text-pink-700">This event is done in cooperation with...</h2>
            <div className="grid grid-cols-3 gap-4">
              {Array(6).fill().map((_, index) => (
                <div key={index} className="p-4 bg-white rounded shadow-lg">
                  <img src={hult} alt={`Hult Prize ${index + 1}`} width={300} className="mb-4 rounded-lg w-30" />
                  <p className="text-center text-black">Hult Prize {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
