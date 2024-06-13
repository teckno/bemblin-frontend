import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faHeadphones, faUsers } from '@fortawesome/free-solid-svg-icons';
import CookieConsent from './Components/CookieConsent';
import '../index.css';


function HomePage() {
  return (
    <div className="font-poppins bg-gray-100" style={{ backgroundColor: '#023e80' }}>
      <Header />
     { /* Hero Section */}
        <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-white-800 font-col font-bold text-4xl xl:text-5xl">
          Welcome to 
          <span className="bemblin-title"> Bemblin</span>
            </h1>
            <p className="text-gray-500 font-col max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
          "African languages have long been undocumented in their writing.One of the goals of bemblin is to help people get on the journey of learning an African language through gamification and documenting the different languages.."
            </p>
            <div>
          
            <iframe src="https://lottie.host/embed/16510643-a031-47ea-8835-39981231e286/My7pghdpjU.json" style={{ width: '50%', height: '250px' }}></iframe>



          <p className="text-gray-800 font-col py-3">
            Subscribe to our newsletter and we'll save your time
          </p>

          <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
            />
            <button className="outline-none bg-gray-700 text-white text-center px-4 py-2 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2 sm:w-auto">
              Subscribe 
            </button>
          </form>
            </div>
            
            
            
          </div>
          <div class="phone animated-element flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
        <img src={process.env.PUBLIC_URL + '/Images/Design/13.png'} class="w-full mx-auto sm:w-10/12 lg:w-full" />
      </div>

        </section>


          <div className="py-24 sm:py-32" style={{ backgroundColor: '#023e80' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Features</h2>
        <p className="mt-2 text-lg leading-8 text-gray-200">
          Discover the features that make Bemblin exceptional.
        </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {/* Feature 1 */}
      <div className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between">
        <div>
          <div className="text-blue-500 text-4xl mb-4">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Interactive Lessons</h3>
          <p>Engaging lessons designed to make learning fun and effective.</p>
        </div>
      </div>
      {/* Feature 2 */}
      <div className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between">
        <div>
          <div className="text-blue-500 text-4xl mb-4">
            <FontAwesomeIcon icon={faHeadphones} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Audio Pronunciation</h3>
          <p>Listen to native speakers pronounce words and phrases accurately.</p>
        </div>
      </div>
      {/* Feature 3 */}
      <div className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between">
        <div>
          <div className="text-blue-500 text-4xl mb-4">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Community Support</h3>
          <p>Join our community to interact with fellow language learners and tutors.</p>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Footer Section */}
      <CookieConsent />
      <Footer />
    </div>
  );
}

export default HomePage;
