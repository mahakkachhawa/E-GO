import React, { useState } from "react";

const SMSBooking = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleBooking = () => {
    alert(`Booking confirmed for ${phoneNumber}`);
    // Here, integrate an API for SMS booking
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-[400px] bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">📩 SMS Booking</h2>
        <input 
          type="tel" 
          className="w-full p-3 mt-4 border rounded-lg focus:outline-blue-600" 
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button 
          className="w-full bg-blue-600 text-white py-3 mt-4 rounded-lg hover:bg-blue-700 transition"
          onClick={handleBooking}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SMSBooking;
