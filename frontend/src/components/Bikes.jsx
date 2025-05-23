import React from "react";

const Bikes = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-16">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Bikes & Scooters Support</h1>
        <p className="text-gray-700 mb-4">
          Welcome to the Bikes & Scooters support page! Here, you can find all the information you need to get started with E-GO using bikes or scooters.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Getting Started</h2>
        <p className="text-gray-700 mb-4">
          To use bikes or scooters with E-GO, follow these steps:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4">
          <li>Download the E-GO app.</li>
          <li>Locate available bikes or scooters near you.</li>
          <li>Scan the QR code to unlock and start your ride.</li>
        </ol>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">FAQs</h2>
        <p className="text-gray-700 mb-4">
          Have questions? Check out our frequently asked questions:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>How do I find bikes or scooters near me?</li>
          <li>What are the pricing plans for bikes and scooters?</li>
          <li>How do I report an issue with a bike or scooter?</li>
        </ul>
        <p className="text-gray-700">
          If you need further assistance, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default Bikes;