import React from 'react';
import { Link } from 'react-router-dom';
import Features from './Features'; // Import the Features component
import Description from '../components/Description'
// import Team from '../components/Team'
import Safe from '../components/Safe'
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';



const Start = () => {

  return (
 <div className=" min-h-screen w-full overflow-x-hidden bg-white ">
 
<div className="w-[90%] max-w-[1400px] mx-auto mt-[85px] rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col md:flex-row transition-all duration-500 ease-in-out hover:shadow-2xl group">
  {/* Left side – Image with animation */}
  <div className="md:w-1/2 w-full overflow-hidden">
    <img 
      src="/startt.jpg" 
      alt="E-GO Intro" 
      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
    />
  </div>

  {/* Right side – Text with interactive animation */}
  <div className="md:w-1/2 w-full p-10 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50">
    <h2 className="text-4xl font-extrabold text-blue-700 mb-4 transition-all duration-500 group-hover:translate-x-2">
      Welcome to <span className="text-blue-500">E-GO</span>
    </h2>
    <p className="text-gray-700 text-lg leading-relaxed mb-4 transition-opacity duration-700 group-hover:opacity-90">
      E-GO is your gateway to smart, sustainable urban transportation. With fully electric vehicles and intelligent routing, we aim to reduce your carbon footprint without compromising convenience.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed transition-opacity duration-700 group-hover:opacity-90">
      Explore a seamless ride-hailing experience built with cutting-edge technology and a vision for a cleaner tomorrow.
    </p>

    {/* Call to Action */}
    <button className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out w-fit shadow-md hover:scale-105">
     
      <Link 
      to="/login" 
    >
       Get Started with E-GO
    </Link>
    </button>
  </div>
</div>



 
  {/* <div className="w-[90%] max-w-4xl mx-auto text-center mt-8">
    <h2 className="text-[30px] font-semibold">Get Started with E-go</h2>
    <Link 
      to="/login" 
      className="w-40 py-3 mt-5 text-white bg-blue-600 rounded-lg mx-auto block"
    >
      Continue
    </Link>
  </div> */}

      
      <Features /> 
      
      <Description />
      <Safe/>
      <ContactUs />

      <Footer/>
      
    </div>
  );
};

export default Start;