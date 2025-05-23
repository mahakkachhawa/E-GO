import React, { useState } from "react";

const CarbonFootprint = () => {
  const [distance, setDistance] = useState("");
  const [transport, setTransport] = useState("car");
  const [emissions, setEmissions] = useState(null);

  const emissionRates = {
    car: 0.21,
    bus: 0.05,
    train: 0.03,
    bike: 0,
    walk: 0,
  };

  const averageMonthlyEmission = 126; 
  const electricEmissionRate = 0.01; 

  const calculateEmissions = () => {
    if (distance && !isNaN(distance)) {
      const userEmission = (distance * emissionRates[transport]).toFixed(2);
      const savedEmission = (distance * (emissionRates["car"] - electricEmissionRate)).toFixed(2);
      setEmissions({
        calculated: userEmission,
        saved: savedEmission,
      });
    } else {
      setEmissions(null);
    }
  };

  return (
    <div className="bg-carbon bg-cover bg-center min-h-screen flex flex-col items-center justify-center mt-8 p-6">
      <h1 className="text-4xl font-bold text-blue-700 drop-shadow mb-8">
        Carbon Footprint Tracker
      </h1>

      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block mb-2 text-lg font-semibold">Distance (in km)</label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter distance..."
        />

        <label className="block mb-2 text-lg font-semibold">Transport Mode</label>
        <select
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        >
          <option value="car">Car</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="bike">Bicycle</option>
          <option value="walk">Walking</option>
        </select>

        <button
          onClick={calculateEmissions}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Calculate Footprint
        </button>
      </div>

      
      <div className="mt-8 w-full max-w-md bg-white bg-opacity-90 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Carbon Insights</h2>

        <p className="mb-2 text-gray-700">
          🚗 <strong>Average CO₂ released</strong> by ride app users monthly:{" "}
          <span className="font-bold text-blue-700">{averageMonthlyEmission} kg</span>
        </p>

        {emissions ? (
          <>
            <p className="mb-2 text-gray-700">
              📌 <strong>Your estimated emission:</strong>{" "}
              <span className="font-bold text-red-600">{emissions.calculated} kg CO₂</span>
            </p>
            <p className="mb-2 text-gray-700">
              🌱 <strong>CO₂ saved by using E-Go:</strong>{" "}
              <span className="font-bold text-green-600">{emissions.saved} kg CO₂</span>
            </p>
          </>
        ) : (
          <p className="text-sm text-gray-500"></p>
        )}
      </div>
    </div>
  );
};

export default CarbonFootprint;
