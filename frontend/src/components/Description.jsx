import React from 'react';
import { Link } from 'react-router-dom';

const Description = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 bg-white gap-14 ml-20 ">
      {/* Text Content */}
      <div className="md:w-2/5 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">At E-go</h2>
        <h3 className="text-3xl md:text-4xl font-semibold mb-5 text-gray-800">We ensure</h3>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif">
          E-go is revolutionizing urban mobility with cutting-edge electric vehicle solutions. 
          Our platform provides seamless booking, reliable rides, and eco-friendly transportation 
          tailored for smart cities, residential communities, corporate hubs, and public institutions. 
          Join the movement toward a cleaner, smarter future with E-go.
        </p>

        <div className="mt-8 flex justify-center md:justify-start">
          <Link 
            to="/login"
            className="bg-blue-600 text-white text-base px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition text-center"
          >
            Book your first ride with us
          </Link>
        </div>
      </div>

      {/* Image Content */}
      <div className="md:w-3/5 flex justify-center">
        <img 
          src="/description.jpg"  
          alt="Parking Illustration" 
          className=" ml-10 w-full max-w-xl md:max-w-xl lg:max-w-xlmb-10  mr-10 "
        />
      </div>
    </div>
  );
};

export default Description;
