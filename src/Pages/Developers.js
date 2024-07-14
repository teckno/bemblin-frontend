import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Link } from 'react-router-dom';

function DevelopersPage() {
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
    <div>
      <Header />
    
      <div className='bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8'>
        <div className="api-side max-w-4xl mx-auto flex items-start">
        { /* Left Sidebar Menu */}
          <aside className="w-1/4 text-white p-4 font-poppins" style={{ fontSize: '12px' }}>
            <nav>
              <h2 className="text-lg font-bold mb-4">Developer Menu</h2>
              <ul>
                <li><Link to="/api-reference" className="block py-2 px-4 hover:bg-blue-700">API Reference</Link></li>
                <li><Link to="/documentation" className="block py-2 px-4 hover:bg-blue-700">Documentation</Link></li>
                <li><Link to="/contribution" className="block py-2 px-4 hover:bg-blue-700">Contribution Guidelines</Link></li>
              </ul>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="w-3/4 p-4 font-poppins text-base">
            <section id="api-reference" className="mb-8">
              <h2 className="text-lg font-bold mb-4">API Reference</h2>
              <p>
                {/* Your API reference content goes here */}
              </p>
            </section>

            <section id="documentation" className="mb-8">
              <h2 className="text-lg font-bold mb-4">Documentation</h2>
              <p>
                {/* Your documentation content goes here */}
              </p>
            </section>

            <section id="contribution">
              <h2 className="text-lg font-bold mb-4">Contribution Guidelines</h2>
              <p>
                Thank you for considering contributing to our project! To get started, please follow these guidelines:
                {/* Include instructions on how to contribute */}
              </p>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DevelopersPage;