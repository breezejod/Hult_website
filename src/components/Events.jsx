import React from "react";
import hult from "../assets/hult.png"; // Assuming 'hult.jpg' is your image file

const Events = () => {
  return (
    <div className="relative mt-3 text-center">
      <div className="bg-pink-200 h-[40vh]">
        <div className="grid grid-cols-2 gap-8 p-6">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="relative p-4 bg-white rounded shadow-lg"
              >
                <div className="absolute bg-white rounded-full left-1/2 top-5"></div>
                <div className="absolute w-2 h-2 -ml-1 bg-white rounded-full left-1/2 bottom-5"></div>
                <img
                  src={hult}
                  alt={`Event ${index + 1}`}
                  className="w-full mb-4 rounded-lg"
                />
                <h2 className="mb-2 text-xl text-black font-montserrat">
                  Event {index + 1} Title
                </h2>
                <p className="text-gray-600">
                  Short description of Event {index + 1}. This is where you can
                  provide information about the event.
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
