import React from 'react';

const Contact = () => {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen mt-4 bg-pink-200">
      <div className="p-4 text-white bg-black rounded-t-lg">
        <h2 className="text-3xl">Contact Us</h2>
      </div>
      <div className="p-4 mt-4 space-y-2 text-black bg-white rounded-b-lg">
        <div className="flex items-center">
          <i className="mr-2 text-xl text-pink-500 fab fa-instagram"></i>
          Instagram: @yourinstagram
        </div>
        <div className="flex items-center">
          <i className="mr-2 text-xl text-pink-500 fas fa-phone"></i>
          Phone: +123-456-7890
        </div>
        {/* Add other contact details here */}
      </div>
    </div>
  );
};

export default Contact;
