import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faDiscord, faYoutube, faTwitter, faTiktok, faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="font-poppins bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">

        <div>
          <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookSquare} className="text-white text-sm mx-2" /></a>
          <a href="https://www.discord.com"><FontAwesomeIcon icon={faDiscord} className="text-white text-sm mx-2" /></a>
          <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} className="text-white text-sm mx-2" /></a>
          <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} className="text-white text-sm mx-2" /></a>
          <a href="https://www.tiktok.com"><FontAwesomeIcon icon={faTiktok} className="text-white text-sm mx-2" /></a>
          <a href="https://play.google.com/store"><FontAwesomeIcon icon={faGooglePlay} className="text-white text-sm mx-2" /></a>
          <a href="https://www.apple.com/app-store/"><FontAwesomeIcon icon={faAppStore} className="text-white text-sm mx-2" /></a>
        </div>
        <p className="text-sm">&copy; 2024 Language Learning App. All rights reserved.</p>

        <p>&copy; 2024 Language Learning App. All rights reserved.</p>

    </footer>
  );
};

export default Footer;
