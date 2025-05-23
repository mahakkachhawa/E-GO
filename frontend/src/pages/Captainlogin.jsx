import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CapatainContext';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        loginData
      );

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Login failed. Please check your credentials.');
    }

    setEmail('');
    setPassword('');
  };

  return (
<div className="h-screen w-full overflow-hidden flex bg-white ">
     
      <div className="hidden md:flex w-3/4 bg-white items-center justify-center mt-6">
        <img
          src="driver login.jpg"
          alt="Avatar"
          className="w-3/4 max-w-[600px]"
        />
      </div>

      
      <div className="w-full md:w-1/2 flex items-center justify-center mr-10 mt-14">
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-600 p-10 w-[90%] max-w-[400px]">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="e-go_logo2.png"
              alt="Logo"
              className="w-18 h-16 rounded-xl"
            />
          </div>

        
          <h2 className="text-2xl font-semibold text-center mb-6">Captain Login</h2>

          
          <form onSubmit={submitHandler}>
            <label className="block mb-2 font-medium">Email Address</label>
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
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-5 px-4 py-2 rounded-lg border bg-gray-100 focus:outline-blue-500"
            />

            <button
              type="submit"
              disabled={password.length < 6}
              className={`w-full py-2 rounded-lg text-white font-semibold transition ${
                password.length >= 6 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'
              }`}
            >
              Login
            </button>
          </form>

          
          <p className="text-center mt-5">
            Don’t have a captain account?{' '}
            <Link to="/captain-signup" className="text-blue-600 font-medium">
              Register as a Captain
            </Link>
          </p>

         
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
