import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faBars, faBook, faInfoCircle, faUsers, faCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="font-poppins shadow-md sticky top-0 z-10 bg-white bg-opacity-90">
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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        
        <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
  <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-gray-600">
    {/* Menu items */}
    {[
      { icon: faLanguage, text: "Translation" },
      { icon: faBook, text: "Dictionary" },
      { icon: faInfoCircle, text: "AboutUs" },
      { icon: faUsers, text: "Community" },
      { icon: faCode, text: "API" }
    ].map((item, index) => (
      <li key={index}>
        <a href="#" className="hover:text-gray-300 flex items-center">
          <FontAwesomeIcon 
            icon={item.icon} 
            className="mr-1 text-2xl transition duration-600 transform hover:scale-280"
          />
          {item.text}
        </a>
      </li>
    ))}
  </ul>
</nav>


        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
                <div className="flex items-center login_button space-x-4" >
                  <button className="bg-blue-500 text-gray px-4 py-2 rounded-full font-bold hover:bg-blue-400 transition duration-300">Login</button>
                  <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full font-bold hover:bg-gray-400 transition duration-300">Signup</button>
                </div>
            </div>
    </header>
  );
};

export default Header;
