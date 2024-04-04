import React, { useState } from 'react';
import Bgvideo from "../assets/BgVideo/Bgvideo.mp4"
const ApplyJob = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically process the form submission and update the form submission status
    // For demonstration purposes, we'll just set the form as submitted
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="bg-cover bg-center h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage: `url('your-background-image.jpg')` }}>
        <div className="max-w-md w-full p-4 text-center">
          <h2 className="text-2xl font-semibold text-center mb-6">Application Submitted!!!</h2>
          <p>Thank you for your application. We will review your details and get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage: `url('your-background-image.jpg')` }}>
        <video src={Bgvideo} autoPlay loop muted style={{objectFit: 'cover'}} className='m-0 p-0 w-full h-screen'/>
      <div className="max-w-md w-full p-4 absolute flex items-center justify-center  ">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md bg-transparent">
          <h2 className="text-2xl font-semibold text-center mb-6">Apply for Waste Picker Job</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Previous Experience (if any)
            </label>
            <textarea
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Additional Message (optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;