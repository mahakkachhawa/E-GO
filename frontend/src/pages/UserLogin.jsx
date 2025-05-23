import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen w-full flex  bg-white overflow-y-hidden">
      
      <div className="hidden md:flex w-3/4 bg-white items-center justify-center mt-6">
        <img
          src="login_user_logo.gif"
          alt="Avatar"
          className="w-3/4 max-w-[600px]"
        />
      </div>

      
      <div className="w-full md:w-1/2 flex items-center justify-center mt-14 mr-10">
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-600 p-10 w-[90%] max-w-[400px]">
         
          <div className="flex justify-center mb-6">
            <img
              src="e-go_logo2.png"
              alt="Logo"
              className="w-18 h-16 rounded-xl"
            />
          </div>

      
          <h2 className="text-2xl font-semibold text-center mb-6">Welcome back :)</h2>

          
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
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-600 font-medium">
              Create a new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
