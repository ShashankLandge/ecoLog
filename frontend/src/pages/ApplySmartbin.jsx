import React, { useState } from 'react';
import bgsmartbins from '../assets/bgimage/bgsmartbins.jpg'
const ApplySmartbin = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [binSize, setBinSize] = useState('');
  const [price, setPrice] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleBinSizeChange = (e) => {
    const selectedSize = e.target.value;
    setBinSize(selectedSize);
    setPaymentMethod('Cash on Delivery');

    switch (selectedSize) {
      case 'small':
        setPrice('800 Rupees');
        break;
      case 'medium':
        setPrice('1200 Rupees');
        break;
      case 'large':
        setPrice('1500 Rupees');
        break;
      default:
        setPrice('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically process the payment and update the payment status
    // For demonstration purposes, we'll just set the form as submitted
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="bg-cover h-screen flex items-center justify-center bg-white" style={{ backgroundImage: `url(${bgsmartbins})` }}>
        <div className="max-w-md w-full p-4 text-center bg-slate-50 border-4 border-black">
          <h2 className="text-2xl font-semibold text-center mb-6">Hurray!! Order Placed</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cover bg-center  flex items-center justify-center bg-gray-100" style={{ backgroundImage: `url(${bgsmartbins} )` }}>
      <div className="max-w-md w-full p-4">
        <form onSubmit={handleSubmit} className="bg-white bg-opacity-40 p-8 pt-0 mt-0  rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Apply for Smart Bin</h2>

          <div className="mb-1">
            <label htmlFor="fullName" className="block text-lg font-bold text-black ">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="mb-1">
            <label htmlFor="phoneNumber" className="block text-lg font-bold text-black ">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="mb-1">
            <label htmlFor="address" className="block text-lg font-bold text-black ">
              Address
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="mb-1">
            <label htmlFor="binSize" className="block text-lg font-bold text-black ">
              Select Smart Bin Size
            </label>
            <select
              id="binSize"
              value={binSize}
              onChange={handleBinSizeChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            >
              <option value="">Select Size</option>
              <option value="small">Small - 800 Rupees</option>
              <option value="medium">Medium - 1200 Rupees</option>
              <option value="large">Large - 1500 Rupees</option>
            </select>
          </div>

          <div className="mb-1">
            <label htmlFor="price" className="block text-lg font-bold text-black ">
              Price
            </label>
            <input
              type="text"
              id="price"
              value={price}
              disabled
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div className="mb-1">
            <label htmlFor="paymentMethod" className="block text-lg font-bold text-black ">
              Payment Method
            </label>
            <input
              type="text"
              id="paymentMethod"
              value={paymentMethod}
              disabled
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
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

export default ApplySmartbin;