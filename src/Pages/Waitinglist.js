import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGamepad, faChalkboardTeacher, faLanguage, faCode, faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../index.css';

const WaitingListPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    isPremium: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPayPalReady, setIsPayPalReady] = useState(false);

  // Load the PayPal SDK
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD';
    script.addEventListener('load', () => setIsPayPalReady(true));
    document.body.appendChild(script);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle checkbox toggle for premium access
  const handlePremiumChange = (e) => {
    setFormData({
      ...formData,
      isPremium: e.target.checked,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.isPremium && isPayPalReady) {
        // Trigger PayPal payment for $2
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: '2.00', // Premium Access fee
                  },
                }],
              });
            },
            onApprove: async (data, actions) => {
              await actions.order.capture();
              await axios.post('http://localhost:3000/api/waiting-list', formData); // Replace with your backend URL
              setIsSubmitted(true);
            },
            onError: (err) => {
              console.error('PayPal payment failed:', err);
            },
          })
          .render('#paypal-button-container');
      } else {
        await axios.post('http://localhost:3000/api/waiting-list', formData); // Regular form submission
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50 p-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl overflow-hidden p-10">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-700 font-poppins">
          Join Our Waiting List
        </h2>

        {isSubmitted ? (
          <div className="text-2xl text-blue-600 text-center">
            🎉 Thank you for joining the waiting list!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-blue-700 mb-3">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-blue-700 mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="isPremium"
                name="isPremium"
                checked={formData.isPremium}
                onChange={handlePremiumChange}
                className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-blue-300 rounded-full"
              />
              <label htmlFor="isPremium" className="ml-4 text-lg font-medium text-blue-700">
                Get Premium Access for $2
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Join Waiting List
            </button>
          </form>
        )}

        {formData.isPremium && (
          <div id="paypal-button-container" className="mt-6"></div>
        )}

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <a href="#" className="py-6 px-6 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all shadow-md text-center">
            <FontAwesomeIcon icon={faBook} className="text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-blue-700">Explore</h3>
          </a>
          <a href="#" className="py-6 px-6 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all shadow-md text-center">
            <FontAwesomeIcon icon={faGamepad} className="text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-blue-700">Games</h3>
          </a>
          <a href="#" className="py-6 px-6 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all shadow-md text-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-blue-700">Courses</h3>
          </a>
          <a href="#" className="py-6 px-6 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all shadow-md text-center">
            <FontAwesomeIcon icon={faLanguage} className="text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-blue-700">Languages</h3>
          </a>
          <a href="#" className="py-6 px-6 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all shadow-md text-center">
            <FontAwesomeIcon icon={faCode} className="text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-blue-700">Developers</h3>
          </a>
          <a href="#" className="py-6 px-6 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all shadow-md text-center">
            <FontAwesomeIcon icon={faHeart} className="text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-blue-700">Support</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WaitingListPage;
