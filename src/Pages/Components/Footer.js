import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faDiscord, faYoutube, faTwitter, faTiktok, faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="font-poppins bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookSquare} className="text-white text-2xl" />
          </a>
          <a href="https://www.discord.com" aria-label="Discord">
            <FontAwesomeIcon icon={faDiscord} className="text-white text-2xl" />
          </a>
          <a href="https://www.youtube.com" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} className="text-white text-2xl" />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl" />
          </a>
          <a href="https://www.tiktok.com" aria-label="TikTok">
            <FontAwesomeIcon icon={faTiktok} className="text-white text-2xl" />
          </a>
          <a href="https://play.google.com/store" aria-label="Google Play">
            <FontAwesomeIcon icon={faGooglePlay} className="text-white text-2xl" />
          </a>
          <a href="https://www.apple.com/app-store/" aria-label="App Store">
            <FontAwesomeIcon icon={faAppStore} className="text-white text-2xl" />
          </a>
        </div>
        <p className="text-sm text-center">&copy; 2024 Language Learning App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
