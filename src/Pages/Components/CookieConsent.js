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
    <div className="fixed left-4 bottom-4 bg-white p-2 rounded-lg shadow-lg z-50 text-xs w-auto">
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faCookie} className="text-gray-500 fa-2x" />
        <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
      </div>
      <div className="flex justify-between mt-2 space-x-2">
        <button 
          className="btn btn-blue"
          onClick={handleAccept}>
          Accept
        </button>
        <button 
          className="btn btn-gray"
          onClick={handleDecline}>
          Decline
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;