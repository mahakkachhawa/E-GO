import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Roshani Sahu",
    image: "/roshanii.jpg",
    linkedin: "https://www.linkedin.com/in/roshani-sahu-1606b5228",
    github: "https://github.com/Roshani-sahu",
  },
  {
    name: "Ritika Fulwani",
    image: "/ritika.jpg",
    linkedin: "https://linkedin.com/in/aman",
    github: "https://github.com/aman",
  },
  {
    name: "Mahak Kachhawa",
    image: "/mahakk.jpg",
    linkedin: "https://linkedin.com/in/amit",
    github: "https://github.com/amit",
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-white text-black">
      <h2 className="text-4xl text-gray-600 font-bold text-center mb-12">Our Team E-Go</h2>
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 shadow-md rounded-2xl max-w-xs w-full text-center overflow-hidden transition hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            {/* Image on top */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover"
            />

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{member.name}</h3>

              <div className="flex justify-center gap-6 mt-4">
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-800 transition" />
                </a>
                <a href={member.github} target="_blank" rel="noreferrer">
                  <Github className="w-6 h-6 text-blue-600 hover:text-black transition" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
