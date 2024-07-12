import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGamepad, faChalkboardTeacher, faLanguage, faCode, faQuestionCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const PortalPage = () => {
  return (
    <div className="background-col min-h-screen flex justify-center items-center bg-portal">
      <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold mb-8 font-poppins text-primary">Portal</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <a href="#" className="py-6 px-8 bg-gray-200 rounded-lg block hover:bg-gray-300">
            <FontAwesomeIcon icon={faBook} style={{ fontSize: '18px' }} className="mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Dictionary</h3>
            <p className="text-lg text-gray-600">Explore the dictionary</p>
          </a>
          <a href="#" className="py-6 px-8 bg-gray-200 rounded-lg block hover:bg-gray-300">
            <FontAwesomeIcon icon={faGamepad} style={{ fontSize: '18px' }} className="mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Games</h3>
            <p className="text-lg text-gray-600">Play games</p>
          </a>
          <a href="#" className="py-6 px-8 bg-gray-200 rounded-lg block hover:bg-gray-300">
            <FontAwesomeIcon icon={faChalkboardTeacher} style={{ fontSize: '18px' }} className="mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Courses</h3>
            <p className="text-lg text-gray-600">Access courses</p>
          </a>
          <a href="#" className="py-6 px-8 bg-gray-200 rounded-lg block hover:bg-gray-300">
            <FontAwesomeIcon icon={faLanguage} style={{ fontSize: '18px' }} className="mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Translations</h3>
            <p className="text-lg text-gray-600">Translate languages</p>
          </a>
          <a href="#" className="py-6 px-8 bg-gray-200 rounded-lg block hover:bg-gray-300">
            <FontAwesomeIcon icon={faCode} style={{ fontSize: '18px' }} className="mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Developers</h3>
            <p className="text-lg text-gray-600">Developer resources</p>
          </a>
          <a href="#" className="py-6 px-8 bg-gray-200 rounded-lg block hover:bg-gray-300">
            <FontAwesomeIcon icon={faQuestionCircle} style={{ fontSize: '18px' }} className="mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Q/A</h3>
            <p className="text-lg text-gray-600">Questions and Answers</p>
          </a>
          <a href="#" className="py-6 px-8 bg-gray-200 rounded-lg block hover:bg-gray-300">
            <FontAwesomeIcon icon={faHeart} style={{ fontSize: '18px' }} className="mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Donation</h3>
            <p className="text-lg text-gray-600">Support us</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortalPage;
