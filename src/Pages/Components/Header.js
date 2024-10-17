import React, { useState } from 'react';
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon,
  BookOpenIcon,
  InformationCircleIcon,
  UserGroupIcon,
  CodeBracketIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCommunity = () => {
    setIsCommunityOpen(!isCommunityOpen);
  };

  return (
    <header className="font-poppins shadow-md sticky top-0 z-10 bg-white bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 h-[90px] flex justify-between items-center">
        <div className="flex items-center gap-12">
          {/* Bemblin Logo */}
          <a href="/" className="flex gap-1 font-bold text-gray-700 items-center">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/logo.svg'}
              className="square object-contain object-center w-34 h-74 overflow-hidden shrink-0 max-w-full"
              alt="Logo"
            />
            <span className="text-2xl text-logo leading-[60px] self-center grow whitespace-nowrap my-auto">
              bemblin
            </span>
          </a>

          {/* Primary Navigation */}
          <nav className="hidden lg:flex gap-6 text-gray-600">
            <a href="/translation" className="hover:text-gray-700 flex items-center">
              <GlobeAltIcon className="h-6 w-6 mr-1" />
              Translation
            </a>
            <a href="/dictionary" className="hover:text-gray-700 flex items-center">
              <BookOpenIcon className="h-6 w-6 mr-1" />
              Dictionary
            </a>
            <a href="/about-us" className="hover:text-gray-700 flex items-center">
              <InformationCircleIcon className="h-6 w-6 mr-1" />
              About&nbsp;Us
            </a>
            <div className="relative">
              <button
                onClick={toggleCommunity}
                className="hover:text-gray-700 flex items-center"
              >
                <UserGroupIcon className="h-6 w-6 mr-1" />
                Community
                <ChevronDownIcon className="h-5 w-5 ml-1" />
              </button>
              {isCommunityOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20">
                  <li>
                    <a href="/community/games" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Games</a>
                  </li>
                  <li>
                    <a href="/community/lessons" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Lessons</a>
                  </li>
                  <li>
                    <a href="/community/quiz" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Quiz</a>
                  </li>
                </ul>
              )}
            </div>
            <a href="/api" className="hover:text-gray-700 flex items-center">
              <CodeBracketIcon className="h-6 w-6 mr-1" />
              API
            </a>
          </nav>
        </div>

        {/* Secondary Navigation */}
        <div className="flex items-center gap-4">
          {/* Login and Signup Buttons */}
          <a href="/login" className="hidden md:inline-block bg-blue-500 text-gray px-4 py-2 rounded-full font-bold hover:bg-blue-400 transition duration-300">
            Login
          </a>
          <a href="/signup" className="hidden md:inline-block bg-gray-300 text-gray-800 px-4 py-2 rounded-full font-bold hover:bg-gray-400 transition duration-300">
            Signup
          </a>

          {/* Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2">
            <MoonIcon className="h-6 w-6" />
            <SunIcon className="h-6 w-6" />
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden flex items-center" onClick={toggleMenu}>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
          isMenuOpen ? 'h-full' : 'h-0'
        }`}
      >
        <div className="px-8 py-4">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <a href="/translation" className="border-l-4 border-gray-600 pl-2 flex items-center">
              <GlobeAltIcon className="h-6 w-6 mr-1" />
              Translation
            </a>
            <a href="/dictionary" className="pl-2 flex items-center">
              <BookOpenIcon className="h-6 w-6 mr-1" />
              Dictionary
            </a>
            <a href="/about-us" className="pl-2 flex items-center">
              <InformationCircleIcon className="h-6 w-6 mr-1" />
              About&nbsp;Us
            </a>
            <a href="#" className="pl-2 flex items-center" onClick={toggleCommunity}>
              <UserGroupIcon className="h-6 w-6 mr-1" />
              Community
            </a>
            <a href="/api" className="pl-2 flex items-center">
              <CodeBracketIcon className="h-6 w-6 mr-1" />
              API
            </a>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <a href="/login" className="bg-blue-500 text-gray px-4 py-2 rounded-full font-bold hover:bg-blue-400 transition duration-300 text-center">
              Login
            </a>
            <a href="/signup" className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full font-bold hover:bg-gray-400 transition duration-300 text-center">
              Signup
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
