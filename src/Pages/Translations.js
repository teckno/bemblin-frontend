import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faImage } from '@fortawesome/free-solid-svg-icons';

import '../index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function TranslationApp() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('bemba');
  const [translation, setTranslation] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const handleSpeechRecognition = () => {
    // Implement speech recognition functionality here
    // This could involve using the Web Speech API or a third-party library
  };

  const handleImageRecognition = () => {
    // Implement image recognition functionality here
    // This could involve using an image recognition API or library
  };

  const translateSentence = () => {
    const words = inputText.split(' ');

    const translateWord = (word) => {
      const apiUrl = `http://localhost:8000/api/translate/?lan=${selectedLanguage}&word=${encodeURIComponent(word)}`;
      
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
    <div>
      <Header />
    
    <div className='background-col'>

      <div className="container mx-auto h-screen flex flex-col justify-center items-center">
     <div>
  <h1 className="text-3xl text-col stand-text font-bold mb-4">Language Learning App</h1>
  <p className="text-base text-gray-700 mb-6">Welcome to our Language Learning App! We're excited to introduce you to our innovative language learning platform designed to make learning a new language both fun and effective. Founded by a passionate team of language enthusiasts, our goal is to break down barriers to language learning and empower individuals around the world to connect with each other through language.</p>
  <p className="text-base text-gray-700 mb-6">With our app, you can explore a variety of languages, including Bemba and German, with more languages on the way. Whether you're a beginner or an advanced learner, our interactive lessons, immersive exercises, and real-time translation features are tailored to meet your unique learning needs.</p>
  <p className="text-base text-gray-700 mb-6">Our mission is to provide an accessible and engaging language learning experience that fosters cultural understanding, communication, and collaboration across borders. Through this project, we aim to create a global community of language learners who can confidently navigate and appreciate the diverse linguistic landscape of our world.</p>
  <p className="text-base text-gray-700 mb-6">Join us on this exciting journey as we strive to make language learning an enriching and rewarding experience for everyone. Let's break down language barriers together and unlock the endless possibilities that come with multilingualism. Start your language learning adventure today!</p>

  <div className="flex items-center mb-4">
    <select
      value={selectedLanguage}
      onChange={handleLanguageChange}
      className="border stand-text border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none font-poppins"
    >
      <option value="bemba">Bemba</option>
      <option value="german">German</option>
    </select>
    <div style={{ position: 'relative' }}>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter sentence to translate"
        className="border border-gray-300 stand-text rounded-md px-4 py-2 mr-2 focus:outline-none font-poppins text-base"
        rows="4"
        cols="50"
        style={{ zIndex: 1 }}
      ></textarea>
      <button
        onClick={handleSpeechRecognition}
        style={{ position: 'absolute', right: '10px', bottom: '10px', zIndex: 2 }}
      >
        <FontAwesomeIcon icon={faMicrophone} />
      </button>
      <button
        onClick={handleImageRecognition}
        style={{ position: 'absolute', right: '10px', bottom: '40px', zIndex: 2 }}
      >
        <FontAwesomeIcon icon={faImage} />
      </button>
    </div>
    <button
      onClick={translateSentence}
      className="bg-blue-500 stand-text hover:bg-blue-600 rounded-md px-4 py-2 focus:outline-none font-poppins"
    >
      Translate
    </button>
  </div>
</div>

      {translation && (
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-lg stand-text font-semibold font-poppins text-blue-900">Translation:</p>
          <p className="font-poppins text-base">{translation}</p>
        </div>
      )}
      </div>
      </div>
      <Footer />
      </div>
  );
}

export default TranslationApp;
