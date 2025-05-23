import React from "react";

const Driving = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-16">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Driving & Delivering Support</h1>
        <p className="text-gray-700 mb-4">
          Welcome to the Driving & Delivering support page! Here, you can find all the information you need to get started with E-GO as a driver or delivery partner.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Getting Started</h2>
        <p className="text-gray-700 mb-4">
          To become a driver or delivery partner, follow these steps:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4">
          <li>Sign up on the E-GO app.</li>
          <li>Complete the verification process.</li>
          <li>Start accepting rides or delivery requests and earning money!</li>
        </ol>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">FAQs</h2>
        <p className="text-gray-700 mb-4">
          Have questions? Check out our frequently asked questions:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>How do I sign up as a driver or delivery partner?</li>
          <li>What documents are required for verification?</li>
          <li>How do I get paid?</li>
        </ul>
        <p className="text-gray-700">
          If you need further assistance, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default Driving;