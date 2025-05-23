import React from 'react';
import { ShieldCheck } from 'lucide-react'; 

const Safe = () => {
  return (
    <section className="text-center py-20 bg-white relative overflow-hidden">
     

      <div className="flex justify-center  mb-6">
        <div className="bg-blue-600 p-4 rounded-2xl">
          <ShieldCheck className="text-white w-20 h-20" />
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl text-gray-600 font-bold leading-tight"> Ride{' '}
        <span className="text-cyan-400">Safe</span>{' '}
        <span className="text-blue-500">with</span>{' '}
        <span className="text-blue-500">E</span>
        <span className="text-blue-600">-</span>
        <span className="text-blue-700">GO</span>
      </h2>

      <p className="text-gray-600 mt-4 max-w-xl mx-auto px-4 text-lg mb-6">
        Your safety is our priority. Trust us for safe rides, screened & trained driver-partners, and 24/7 support, ensuring worry-free travel.
      </p>
    </section>
  );
};

export default Safe;
