import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faBook, faInfoCircle, faUsers, faCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`font-poppins shadow-md sticky top-0 z-10 ${isScrolled ? 'bg-white bg-opacity-90' : 'bg-transparent'}`}>
 {/* Header */}
 <header className={`font-poppins shadow-md sticky top-0 z-10 ${isScrolled ? 'bg-white bg-opacity-90' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
           <div className="logo flex items-stretch gap-1.5 my-auto">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + '/Images/logo.svg'}
            className="square object-contain object-center w-34 h-74 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-2xl text-logo leading-[60px] self-center grow whitespace-nowrap my-auto">
            bemblin
            </div>
            
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <nav>
            
          <ul class="header-padding flex space-x-6 text-gray-600" >
                        <li>
                            <a href="#" className="hover:text-gray-300 flex items-center">
                                <FontAwesomeIcon icon={faLanguage} className="mr-1" />
                                Translation
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 flex items-center">
                                <FontAwesomeIcon icon={faBook} className="mr-1" />
                                Dictionary
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 flex items-center">
                                <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
                                About&nbsp;Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 flex items-center">
                                <FontAwesomeIcon icon={faUsers} className="mr-1" />
                                Community
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 flex items-center">
                                <FontAwesomeIcon icon={faCode} className="mr-1" />
                                API
                            </a>
                        </li>
                    </ul>
          </nav>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="flex items-center space-x-4" >
                  <button className="bg-blue-500 text-gray px-4 py-2 rounded-full font-bold hover:bg-blue-400 transition duration-300">Login</button>
                  <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full font-bold hover:bg-gray-400 transition duration-300">Signup</button>
                </div>
            </div>
        </header>

    </header>
  );
};

export default Header;
