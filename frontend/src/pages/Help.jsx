import React from "react";
import { Link } from "react-router-dom";
import { FaCar, FaMotorcycle, FaUtensils, FaStore, FaBriefcase, FaTruck } from "react-icons/fa";

const supportOptions = [
  { title: "Riders", icon: <FaCar size={60} />, link: "/help/riders" },
  { title: "Driving & Delivering", icon: <FaMotorcycle size={60} />, link: "/help/driving" },
  { title: "Bikes & Scooters", icon: <FaMotorcycle size={60} />, link: "/help/bikes" },
  { title: "E-GO for Business", icon: <FaBriefcase size={60} />, link: "/help/business" },
];

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="relative w-full h-64 bg-cover bg-center flex flex-col justify-center items-center mt-4"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?sky,clouds')" }}>
        <h1 className="text-4xl mt-8 mb-4 font-bold text-blue-600">Welcome to E-GO Support</h1>
        <p className="text-gray-600 text-center mt-4 max-w-2xl ">
          Looking for customer service information? Choose a category below to get the best assistance.
        </p>
      </div>

     
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 ">
        {supportOptions.map((option, index) => (
          <Link to={option.link} key={index} className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-200 hover:shadow-lg transition duration-300 ">
            <div className="flex justify-center">{option.icon}</div>
            <h2 className="text-lg font-semibold mt-3">{option.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Help;
