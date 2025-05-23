import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ title, subtitle, imgSrc, delay = 0 }) => (
  <motion.div
    className="group relative w-[350px] h-[380px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm group-hover:brightness-50"
      style={{ backgroundImage: `url(${imgSrc})` }}
    />

    
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent transition-all duration-500 group-hover:bg-black/20" />

   
    <div className="absolute bottom-6 w-full text-center text-white transition-opacity duration-500 group-hover:opacity-0 z-10">
      <h3 className="text-xl font-semibold">{subtitle}</h3>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>

   
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10">
      <p className="text-lg font-semibold text-blue-400"> Book Now & Enjoy the Ride!</p>
      <p className="text-sm text-gray-200 mt-2">Experience a smooth and comfortable journey.</p>
    </div>
  </motion.div>
);

const Features = () => {
  const features = [
    { title: "Pet-Friendly Rides", subtitle: "Bring Your Pet", imgSrc: "/pet.jpg" },
    { title: "Women Drivers", subtitle: "Safe & Secure", imgSrc: "/women.jpg" },
    { title: "Carbon Footprint", subtitle: "Eco-Friendly Rides", imgSrc: "/carbon.jpg" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-12 bg-white">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} delay={index * 0.2} />
      ))}
    </div>
  );
};

export default Features;
