import React from 'react';
import {Send, Mail, User } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="py-16 px-4 md:px-20" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <form className="space-y-4">
            
          <div className="flex items-center border  border-gray-300 rounded-lg overflow-hidden">
              <div className=" p-3">
                <User className="text-gray-600 w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 focus:outline-none"
              />
            </div>
            {/* Email Input with Icon */}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <div className=" p-3">
                <Mail className="text-gray-600 w-5 h-5" />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 focus:outline-none"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
            ></textarea>
            <button
  type="submit"
  className="flex items-center gap-2 justify-center bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#00a2b5] transition"
>
  <Send className="w-4 h-4" />
  Send Message
</button>
          </form>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/contact.jpg" // replace with the correct path or import
            alt="Contact Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
