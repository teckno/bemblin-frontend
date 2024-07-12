import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faImage } from '@fortawesome/free-solid-svg-icons';

function AboutUs() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className='bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8'>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Language Learning App</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Welcome to our Language Learning App! We're excited to introduce you to our innovative language learning platform designed to make learning a new language both fun and effective. Founded by a passionate team of language enthusiasts, our goal is to break down barriers to language learning and empower individuals around the world to connect with each other through language.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            With our app, you can explore a variety of languages, including Bemba and German, with more languages on the way. Whether you're a beginner or an advanced learner, our interactive lessons, immersive exercises, and real-time translation features are tailored to meet your unique learning needs.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Our mission is to provide an accessible and engaging language learning experience that fosters cultural understanding, communication, and collaboration across borders. Through this project, we aim to create a global community of language learners who can confidently navigate and appreciate the diverse linguistic landscape of our world.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Join us on this exciting journey as we strive to make language learning an enriching and rewarding experience for everyone. Let's break down language barriers together and unlock the endless possibilities that come with multilingualism. Start your language learning adventure today!
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 mr-4">
                <FontAwesomeIcon icon={faMicrophone} className="text-5xl text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Interactive Lessons</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Engage in interactive lessons designed to enhance your language skills with real-time feedback and guidance.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 mr-4">
                <FontAwesomeIcon icon={faImage} className="text-5xl text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Immersive Exercises</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dive into immersive exercises that simulate real-world scenarios to improve your language proficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
