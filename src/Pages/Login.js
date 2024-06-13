import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // State for storing error messages
  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');  // Reset error message at the beginning of a new login attempt
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.access);
        navigate('/dashboard');
      } else {
        // Display an error message from the server or a default one
        setError(data.detail || 'Invalid username or password');
      }
    } catch (error) {
      // Handle network errors
      setError('Network error: ' + error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex justify-center items-center" style={{ backgroundColor: '#023e80' }}>
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif', color: '#023e80' }}>Login</h2>
          <form onSubmit={handleLogin}>
            {error && <div className="mb-4 text-sm text-red-600">{error}</div>}  {/* Error message display */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
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
