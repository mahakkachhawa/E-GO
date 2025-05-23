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
 
   <div className="w-[90%]  max-w-[1400px] mx-auto mt-[85px] rounded-3xl overflow-hidden shadow-lg">
    <img 
      src="/startt.jpg" 
      alt="E-GO Intro" 
      className="w-full h-[500px] object-cover "
    />
  </div>

 
  <div className="w-[90%] max-w-4xl mx-auto text-center mt-8">
    <h2 className="text-[30px] font-semibold">Get Started with E-go</h2>
    <Link 
      to="/login" 
      className="w-40 py-3 mt-5 text-white bg-blue-600 rounded-lg mx-auto block"
    >
      Continue
    </Link>
  </div>

      
      <Features /> 
      
      <Description />
      <Safe/>
      <ContactUs />

      <Footer/>
      
    </div>
  );
};

export default Start;