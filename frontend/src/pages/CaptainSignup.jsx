import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CapatainContext';

const CaptainSignup = () => {
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      alert("Signup failed. Please check your input and try again.");
    }

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className="min-h-screen w-full flex mt-8 bg-white">
     
      <div className="hidden md:flex w-3/4 bg-white items-center justify-center">
        <img
          src="captain signup.png" 
          alt="Avatar"
          className="w-3/4 max-w-[600px]"
        />
      </div>

   
      <div className="w-full md:w-1/2 flex items-center justify-center mr-10">
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-600 p-9 w-[90%] max-w-[400px] h-[86%] mt-5">

         
          <h2 className="text-2xl font-semibold text-center mb-4">
            Captain Signup
          </h2>

          <form onSubmit={submitHandler}>
           
            <label className="block mb-2 font-medium">Captain's Name</label>
            <div className="flex gap-4 mb-5">
              <input
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-1/2 px-4 py-2 rounded-lg border bg-gray-100 focus:outline-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-1/2 px-4 py-2 rounded-lg border bg-gray-100 focus:outline-blue-500"
              />
            </div>

            
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-5 px-4 py-2 rounded-lg border bg-gray-100 focus:outline-blue-500"
            />

            
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter at least 6 characters"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-5 px-4 py-2 rounded-lg border bg-gray-100 focus:outline-blue-500"
            />

            
            <label className="block mb-2 font-medium">Vehicle Information</label>
            <div className="flex gap-4 mb-5">
              <input
                type="text"
                placeholder="Color"
                required
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className="w-1/2 px-4 py-2 rounded-lg border bg-gray-100 focus:outline-blue-500"
              />
              <input
                type="text"
                placeholder="Plate"
                required
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className="w-1/2 px-4 py-2 rounded-lg border bg-gray-100 focus:outline-blue-500"
              />
            </div>
            <div className="flex gap-4 mb-5">
              <input
                type="number"
                placeholder="Capacity"
                required
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className="w-1/2 px-4 py-2 rounded-lg border bg-gray-100 focus:outline-blue-500"
              />
              <select
                required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-1/2 px-4 py-2 rounded-lg border bg-gray-100 focus:outline-blue-500"
              >
                <option value="">Select Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={password.length < 6 || !email}
              className={`w-full py-2 rounded-lg text-white font-semibold transition ${
                password.length >= 6 && email
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-blue-300 cursor-not-allowed'
              }`}
            >
              Create Captain Account
            </button>
          </form>

          
          <p className="text-center mt-5">
            Already have an account?{' '}
            <Link to="/captain-login" className="text-blue-600 font-medium">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
