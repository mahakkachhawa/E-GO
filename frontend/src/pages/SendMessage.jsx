import React, { useState } from 'react';
import axios from 'axios';
import { FaPhoneAlt, FaCommentDots } from 'react-icons/fa';

const SendSMS = () => {
  const [to, setTo] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();
    if (!to || !body) {
      setStatus('❗ Please fill in both phone number and message.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/sms/send-sms', { to, body });
      if (res.data.success) {
        setStatus('✅ Message sent successfully!');
      } else {
        setStatus('❌ Failed to send message.');
      }
    } catch (err) {
      setStatus('❌ Error: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-purple-100 via-indigo-200 to-white mt-6">
      {/* Quote added at the top */}
      <p className="text-center text-xl font-bold italic text-purple-900 bg-purple-100 border-l-4 border-purple-500 p-4 rounded-md shadow-md mb-6">
  No data? No problem. We deliver your words where the internet can’t.
</p>


      <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl p-10 w-full max-w-md transition-all hover:shadow-purple-300">
        <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-8 flex items-center justify-center gap-2">
          📩 <span>Send SMS</span>
        </h2>

        <form onSubmit={handleSend} className="space-y-6">
          <div className="relative">
            <FaPhoneAlt className="absolute top-4 left-4 text-purple-500" />
            <input
              type="text"
              placeholder="Enter phone number"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm shadow-sm"
              required
            />
          </div>

          <div className="relative">
            <FaCommentDots className="absolute top-4 left-4 text-purple-500" />
            <textarea
              placeholder="Enter your message"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full pl-12 pr-4 py-3 h-32 rounded-xl bg-gray-50 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm shadow-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-white font-bold bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-shadow shadow-md hover:shadow-xl"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-6 text-center text-sm text-green-700 bg-green-50 border border-green-300 p-3 rounded-lg shadow-sm">
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default SendSMS;