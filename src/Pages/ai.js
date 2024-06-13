import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faImage } from '@fortawesome/free-solid-svg-icons';

import '../index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function TranslationApp() {
  const [inputText, setInputText] = useState('');
  const [resultText, setResultText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmitPrompt = () => {
    const apiUrl = `http://127.0.0.1:8000/api/prompt-lm/`;

    axios.post(apiUrl, { prompt: inputText })
      .then(response => {
        setResultText(response.data.response);
      })
      .catch(error => {
        console.error('Error fetching result:', error);
        setResultText('Failed to get response');
      });
  };

  return (
    <div>
      <Header />

      <div className='background-col'>
        <div className="container mx-auto h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl text-col stand-text font-bold mb-4">Bemblin AI</h1>
          <div className="flex items-center mb-4">
            <div style={{ position: 'relative' }}>
              <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter your prompt here"
                className="border border-gray-300 stand-text rounded-md px-4 py-2 mr-2 focus:outline-none font-poppins text-base"
                rows="4"
                cols="50"
                style={{ zIndex: 1 }}
              ></textarea>
              <button
                onClick={handleSubmitPrompt}
                className="bg-blue-500 stand-text hover:bg-blue-600 rounded-md px-4 py-2 focus:outline-none font-poppins"
              >
                Submit
              </button>
            </div>
          </div>
          {resultText && (
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-lg stand-text font-semibold font-poppins text-blue-900">Response:</p>
              <p className="font-poppins text-base">{resultText}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TranslationApp;
