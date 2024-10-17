import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie } from '@fortawesome/free-solid-svg-icons';

function CookieConsent() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  const handleAccept = () => {
    console.log("Cookies accepted.");
    setShow(false);
  };

  const handleDecline = () => {
    console.log("Cookies declined.");
    setShow(false);
  };

  return (
    <div className="fixed left-4 bottom-4 bg-white p-4 rounded-lg shadow-lg z-50 text-xs w-auto">
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faCookie} className="text-gray-500 fa-2x" />
        <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
      </div>
      <div className="flex justify-between mt-4 space-x-2">
        <button 
          className="px-4 py-0 rounded-md bg-[#023e80] text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          style={{ fontSize: '20px' }}
          onClick={handleAccept}>
          Accept
        </button>
        <button 
          className="px-4 py-0 rounded-md bg-[#023e80] text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          style={{ fontSize: '20px' }}
          onClick={handleDecline}>
          Decline
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
