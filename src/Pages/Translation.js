import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MicrophoneIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

import '../index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function TranslationApp() {
  const [inputText, setInputText] = useState('');
  const [selectedInputLanguage, setSelectedInputLanguage] = useState('bemba');
  const [selectedOutputLanguage, setSelectedOutputLanguage] = useState('english');
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    if (inputText) {
      translateSentence();
    }
  }, [inputText, selectedInputLanguage, selectedOutputLanguage]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleInputLanguageChange = (event) => {
    setSelectedInputLanguage(event.target.value);
  };

  const handleOutputLanguageChange = (event) => {
    setSelectedOutputLanguage(event.target.value);
  };

  const handleSwapLanguages = () => {
    setSelectedInputLanguage(selectedOutputLanguage);
    setSelectedOutputLanguage(selectedInputLanguage);
    setInputText(translation);
    setTranslation(inputText);
  };

  const translateSentence = () => {
    const words = inputText.split(' ');

    const translateWord = (word) => {
      const apiUrl = `http://localhost:8000/api/translate/?lan=${selectedInputLanguage}&word=${encodeURIComponent(word)}`;

      return axios.get(apiUrl)
        .then(response => {
          const translatedWords = response.data[word];
          if (translatedWords && translatedWords.length > 0) {
            return translatedWords[0];
          } else {
            return 'N/A';
          }
        })
        .catch(error => {
          console.error('Error fetching translation:', error);
          return 'N/A';
        });
    };

    Promise.all(words.map(word => translateWord(word)))
      .then(translatedWords => {
        setTranslation(translatedWords.join(' '));
      });
  };

  return (
    <>
      <Header />
      <div className="bg-[#023e80] py-8 md:py-16">
        <div
          className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-6 px-4 md:px-8 lg:px-12"
          style={{
            maxWidth: '1190px',
            margin: '0 auto',
          }}
        >
          {/* Input Section */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <select
              value={selectedInputLanguage}
              onChange={handleInputLanguageChange}
              className="border-b-2 border-gray-300 px-4 py-2 focus:outline-none font-poppins text-sm bg-white text-gray-700 rounded-lg"
            >
              <option value="bemba">Bemba</option>
              <option value="german">German</option>
            </select>
            <div className="relative flex-1">
              <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter text"
                className="border border-gray-300 rounded-lg px-4 py-4 focus:outline-none font-poppins w-full text-base resize-none h-60 md:h-72 lg:h-80 text-gray-700 bg-white"
              ></textarea>
              <div className="absolute right-4 bottom-4">
                <button
                  onClick={() => {}}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <MicrophoneIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Swap Languages Button */}
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <button
              onClick={handleSwapLanguages}
              className="bg-white hover:bg-gray-100 rounded-full p-4 text-[#023e80] focus:outline-none shadow-md transition-transform transform hover:scale-105"
            >
              <ArrowsRightLeftIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Output Section */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <select
              value={selectedOutputLanguage}
              onChange={handleOutputLanguageChange}
              className="border-b-2 border-gray-300 px-4 py-2 focus:outline-none font-poppins text-sm bg-white text-gray-700 rounded-lg"
            >
              <option value="english">English</option>
              <option value="german">German</option>
            </select>
            <div className="border border-gray-300 rounded-lg px-4 py-4 bg-white shadow-md h-60 md:h-72 lg:h-80 overflow-y-auto">
              <p className="font-poppins text-base text-gray-700">{translation || "Translation will appear here..."}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TranslationApp;
