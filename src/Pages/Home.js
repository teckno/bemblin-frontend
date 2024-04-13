import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faHeadphones, faUsers } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  return (
    <div className="font-poppins bg-gray-100" style={{ backgroundColor: '#023e80' }}>
      <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-purple-50 to-pink-50">
    <div className="mx-auto max-w-5xl px-6 py-10 text-center md:px-12 md:py-16 font-poppins">
        <h1 className="text-3xl leading-[52px] font-semibold md:text-4xl lg:text-5xl">Welcome to
            <span className="bg-purple-600 text-white p-0.5 rounded-lg">Bemblin</span> 
        </h1>
        <h2 className="sm:mt-2 text-3xl font-semibold">Learn Any Language, Anywhere</h2>
        <p className="mt-4 text-lg font-medium leading-2 text-gray-600 md:text-xl">Discover the power of creative inspiration online</p>
        <div className="mt-8 flex justify-center gap-2">
            <a href="/pages">
                <button className="text-md rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 px-4 py-[10px] font-semibold text-white hover:bg-gradient-to-tl hover:from-purple-500 hover:to-purple-700">
                    <div className="flex items-center justify-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
                            </svg>
                        </div>
                        Browse Inspiration | 1000+
                    </div>
                </button>
            </a>
        </div>
    </div>
</div>




            {/* Features Section */}
            <div className="bg-blue-900 py-24 sm:py-32"> {/* Background color changed to #023e80 */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Features</h2> {/* Title color changed to white */}
          <p className="mt-2 text-lg leading-8 text-gray-200"> {/* Description color changed to gray-200 */}
            Discover the features that make Tialwind exceptional.
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
      <Footer />
    </div>
  );
}

export default HomePage;
