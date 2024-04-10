import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Header from './Components/Header';
import Footer from './Components/Footer';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful registration, such as redirecting the user or showing a success message
        console.log('User registered successfully.');
      } else {
        // Handle error response
        console.error('Error registering user:', response.statusText);
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error.message);
    }
  };

  // Function to handle Google social login
  const handleGoogleLogin = async () => {
    // Implement Google login functionality
    // This function is for demonstration purposes
    // You may implement the actual Google login functionality here
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex justify-center items-center" style={{ backgroundColor: '#023e80' }}>
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif', color: '#023e80' }}>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* Google social login button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 font-poppins hover:bg-gray-100 focus:outline-none focus:bg-gray-100 mb-6"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Sign Up with Google
            </button>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="px-4 py-2 bg-white text-primary rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-poppins" style={{ backgroundColor: '#023e80', color: '#fff' }}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
