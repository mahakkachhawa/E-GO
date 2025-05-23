import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const LookingForDriver = (props) => {
  const maleDriverAvatar = 'https://cdn-icons-png.flaticon.com/512/236/236831.png';
  const femaleDriverAvatar = 'https://cdn-icons-png.flaticon.com/512/194/194938.png';
  const selectedAvatar = props.isFemalePreferred ? femaleDriverAvatar : maleDriverAvatar;

  const [eta, setEta] = useState(null);
  const [rideId, setRideId] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [co2Conventional, setCo2Conventional] = useState(0);

  useEffect(() => {
    const randomMinutes = Math.floor(Math.random() * 6) + 7;
    setEta(randomMinutes);
    const randomId = Math.floor(1000 + Math.random() * 9000);
    setRideId(randomId);

    const avgCO2 = Math.floor(Math.random() * 31) + 130;
    setCo2Conventional((avgCO2 * 13 / 1000).toFixed(2));
  }, []);

  const handleSubmit = () => {
    console.log('Rating:', rating);
    console.log('Feedback:', feedbackText);
    setShowFeedback(false);
  };

  return (
    <div className="relative w-full flex justify-center px-4">
      <h5
        className='p-1 text-center w-[93%] absolute'
        style={{ top: '-30px', left: '40px' }}
        onClick={() => props.setVehicleFound(false)}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <div className='relative w-[70%] bg-white p-4 '>
        <h3 className='text-2xl font-semibold mb-3 text-center text-black'>Ride is Confirmed</h3>

        <div className='flex flex-col items-center border rounded-md shadow-md p-3'>
          <div className="w-20 h-20">
            <img
              className='w-full h-full rounded-full border border-gray-300 object-cover'
              src={selectedAvatar}
              alt="Driver avatar"
            />
          </div>

          <div className='w-full mt-3 text-sm'>
            <div className='flex items-center gap-3 p-2 border-b'>
              <i className="ri-map-pin-user-fill"></i>
              <p className='font-medium'>{props.pickup || 'Pick-up location not selected'}</p>
            </div>

            <div className='flex items-center gap-3 p-2 border-b'>
              <i className="ri-map-pin-2-fill text-lg"></i>
              <p className='font-medium'>{props.destination || 'Destination not selected'}</p>
            </div>

            <div className='flex items-center gap-3 p-2 border-b'>
              <i className="ri-time-line text-blue-500 text-lg"></i>
              <div>
                <p className='font-medium text-blue-600'>Arriving in {eta} min</p>
                <p className='text-xs text-gray-500 -mt-1'>Estimated time</p>
              </div>
            </div>

            <div className='flex items-center gap-3 p-2'>
              <i className="ri-barcode-line text-gray-500 text-lg"></i>
              <div>
                <p className='font-medium'>Ride ID: {rideId}</p>
                <p className='text-xs text-gray-500 -mt-1'>Show to driver if needed</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowFeedback(true)}
            className="bg-blue-600 text-white px-4 py-1 mt-3 rounded hover:bg-blue-700 text-base"
          >
            Leave Feedback
          </button>
        </div>

       
        {showFeedback && (
          <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-[90%] max-w-md p-5 shadow-xl relative">
              <button
                onClick={() => setShowFeedback(false)}
                className="absolute top-2 right-3 text-gray-500 text-xl"
              >
                &times;
              </button>

              <h3 className='text-2xl font-semibold mb-4 text-green-600'>Your Ride Feedback</h3>

              <div className='bg-gray-100 p-3 rounded mb-5'>
                <p className='text-sm font-medium'>🌿 CO₂ saved:</p>
                <p className='text-lg text-blue-600 font-bold'>{co2Conventional} kg</p>
                <p className='text-xs text-gray-500'>Compared to a petrol vehicle</p>
              </div>

              <div className='flex justify-center gap-2 mb-4'>
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <FaStar
                      key={starValue}
                      size={26}
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
                placeholder='Leave your feedback...'
                className='w-full p-2 text-sm border border-gray-300 rounded focus:ring focus:ring-green-400 mb-4'
                rows={3}
              />

              <button
                onClick={handleSubmit}
                className='bg-green-600 text-white w-full py-2 rounded-md font-semibold hover:bg-green-700'
              >
                Submit Feedback
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LookingForDriver;
