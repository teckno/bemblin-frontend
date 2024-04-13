import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Header from './Components/Header';
import Footer from './Components/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle form submission
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming the API returns a JWT token upon successful login
        localStorage.setItem('token', data.access); // Store the token in local storage for future use
        // Redirect user to dashboard page after successful login
        navigate('/dashboard');
      } else {
        // Handle error response
        console.error('Error logging in:', data.detail);
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex justify-center items-center" style={{ backgroundColor: '#023e80' }}>
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + '/Images/logo.svg'}
            className="square object-contain object-center w-34 h-74 overflow-hidden shrink-0 max-w-full"
          />
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif', color: '#023e80' }}>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button type="submit" className="px-4 py-2 bg-white text-primary rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-poppins" style={{ backgroundColor: '#023e80', color: '#fff' }}>Login</button>
              <span className="text-sm text-gray-700">or</span>
            </div>
            <button className="flex items-center justify-center w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 font-poppins hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" className="mr-2" />
              Login with Google
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
