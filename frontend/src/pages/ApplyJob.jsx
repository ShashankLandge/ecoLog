import React, { useState } from 'react';

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

  return (
    <div className="  flex items-center justify-center">
      {/* Background video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="https://cdn.phenompeople.com/CareerConnectResources/WCGWCUUS/videos/SplashPageTrim-1676476636637.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Content container */}
      <div className="max-w-md w-full p-4 relative z-10">
        {formSubmitted ? (
          // Success message
          <div className="bg-slate-400  bg-opacity-75 p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-6">Application Submitted!!!</h2>
            <p>Thank you for your application. We will review your details and get back to you shortly.</p>
          </div>
        ) : (
          // Form
          <form onSubmit={handleSubmit} className="bg-white bg-opacity-45 p-8 pt-1 rounded-lg shadow-md border-2 border-black">
            <h2 className="text-2xl font-bold text-center mb-6">Apply for Waste Picker Job</h2>
            <div className="mb-1">
              <label htmlFor="name" className="block text-lg font-bold text-black ">
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
            <div className="mb-1">
              <label htmlFor="email" className="block text-lg font-bold text-black">
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
            <div className="mb-1">
              <label htmlFor="phone" className="block text-lg font-bold text-black">
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
            <div className="mb-1">
              <label htmlFor="experience" className="block text-lg font-bold text-black">
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
              <label htmlFor="message" className="block text-lg font-bold text-black">
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
        )}
      </div>
    </div>
  );
};

export default ApplyJob;