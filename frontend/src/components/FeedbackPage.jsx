import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackPage = ({ setShowFeedback }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [co2Conventional, setCo2Conventional] = useState(0);
  const co2Electric = 0.0; // assuming zero CO2 for electric

  useEffect(() => {
    
    const avgCO2 = Math.floor(Math.random() * 31) + 130; // 130–160 g/km
    setCo2Conventional((avgCO2 * 13 / 1000).toFixed(2)); // in kg
  }, []);

  const handleSubmit = () => {
    console.log('Rating:', rating);
    console.log('Feedback:', feedbackText);
    setShowFeedback(false); 
  };

  return (
    <div className='text-center p-5'>
      <h3 className='text-2xl font-semibold mb-5 text-green-600'>Your Ride Feedback</h3>

      
      <div className='bg-gray-100 p-4 rounded-lg mb-6'>
        <p className='text-lg font-medium'>🌿 By using an electric vehicle, you helped save:</p>
        <p className='text-xl text-blue-600 font-bold'>
          {co2Conventional} kg CO₂
        </p>
        <p className='text-sm text-gray-500'>Compared to a petrol vehicle</p>
      </div>

      
      <div className='flex justify-center gap-2 mb-4'>
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <FaStar
              key={starValue}
              size={30}
              color={starValue <= (hovered || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHovered(starValue)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setRating(starValue)}
              className='cursor-pointer transition-transform hover:scale-110'
            />
          );
        })}
      </div>

      
      <textarea
        value={feedbackText}
        onChange={(e) => setFeedbackText(e.target.value)}
        placeholder='Leave your feedback here...'
        className='w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-green-400 mb-4'
        rows={4}
      />

      
      <button
        onClick={handleSubmit}
        className='bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition'
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default FeedbackPage;
