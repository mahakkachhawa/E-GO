import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  };

  return (
    <div className="min-h-screen w-full flex overflow-y-hidden bg-white">
      
      <div className="hidden md:flex w-3/4 bg-white items-center justify-center mt-14">
        <img
          src="user_signup.jpg"
          alt="Avatar"
          className="w-3/4 max-w-[600px]"
        />
      </div>

      
      <div className="w-full md:w-1/2 flex items-center justify-center mr-10 mb-3 mt-16">
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-600 p-10 w-[85%] max-w-[400px] h-[90%]">
         
          <div className="flex justify-center mb-2">
            <img
              src="e-go_logo2.png"
              alt="Logo"
              className="w-18 h-14 rounded-xl"
            />
          </div>

          
          <h2 className="text-2xl font-semibold text-center  mb-6">Welcome to E-GO Family</h2>

         
          <form onSubmit={submitHandler}>
            <label className="block mb-2 font-medium">What's your name?</label>
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
              placeholder="Enter at least 6 characters"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-5 px-4 py-2 rounded-lg border bg-gray-100 focus:outline-blue-500"
            />

            <button
              type="submit"
              disabled={password.length < 6 || !email}
              className={`w-full py-2 rounded-lg text-white font-semibold transition ${
                password.length >= 6 && email
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-blue-300 cursor-not-allowed'
              }`}
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-5">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 font-medium">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
