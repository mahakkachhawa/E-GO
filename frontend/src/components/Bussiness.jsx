import React from "react";

const Business = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-16">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">E-GO for Business Support</h1>
        <p className="text-gray-700 mb-4">
          Welcome to the E-go for Business support page! Here, you can find all the information you need to manage your business rides and deliveries with E-GO.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Getting Started</h2>
        <p className="text-gray-700 mb-4">
          To get started with Uber for Business, follow these steps:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4">
          <li>Sign up for an Uber for Business account.</li>
          <li>Add your team members and set up payment methods.</li>
          <li>Start booking rides and deliveries for your business.</li>
        </ol>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">FAQs</h2>
        <p className="text-gray-700 mb-4">
          Have questions? Check out our frequently asked questions:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>How do I add team members to my account?</li>
          <li>What payment methods are accepted?</li>
          <li>How do I track business expenses?</li>
        </ul>
        <p className="text-gray-700">
          If you need further assistance, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default Business;