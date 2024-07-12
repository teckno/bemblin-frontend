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
          <a href="/" className="text-2xl text-logo leading-[60px] self-center grow whitespace-nowrap my-auto">
  bemblin
</a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:items-center md:justify-center md:mx-auto`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-gray-600">
            {[
             { icon: faLanguage, text: "Translation", link: "/translation" },
             { icon: faBook, text: "Dictionary", link: "/dictionary" },
             { icon: faInfoCircle, text: "AboutUs", link: "/aboutus" },
             
             { icon: faUsers, text: "Community", link: "/community" },
             { icon: faCode, text: "API", link: "/api" }
           ].map((item, index) => (
             <li key={index}>
               <a href={item.link} className="hover:text-gray-300 flex items-center">
                 <FontAwesomeIcon 
                   icon={item.icon} 
                   className="mr-1 text-sm transition duration-600 transform hover:scale-280"
                 />
                 {item.text}
               </a>
             </li>
            ))}
            <li className="md:hidden flex flex-col space-y-4">
            <a href="/login" className="inline-block bg-blue-500 text-gray px-4 py-2 rounded-full font-bold hover:bg-blue-400 transition duration-300">Login</a>
<a href="/signup" className="inline-block bg-gray-300 text-gray-800 px-4 py-2 rounded-full font-bold hover:bg-gray-400 transition duration-300">Signup</a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center login_button space-x-4">
        <a href="/login" className="inline-block bg-blue-500 text-gray px-4 py-2 rounded-full font-bold hover:bg-blue-400 transition duration-300">Login</a>
        <a href="/signup" className="inline-block bg-gray-300 text-gray-800 px-4 py-2 rounded-full font-bold hover:bg-gray-400 transition duration-300">Signup</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

<style jsx>{`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    nav {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`}</style>
