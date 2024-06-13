import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faImage } from '@fortawesome/free-solid-svg-icons';

function AboutUs() {
  return (
    <div>
      <Header />
    
      <div className='bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8'>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <h2 className="text-2xl font-bold mb-8">Language Learning App</h2>
          <p className="text-base mb-6">
            Welcome to our Language Learning App! We're excited to introduce you to our innovative language learning platform designed to make learning a new language both fun and effective. Founded by a passionate team of language enthusiasts, our goal is to break down barriers to language learning and empower individuals around the world to connect with each other through language.
          </p>
          <p className="text-base mb-6">
            With our app, you can explore a variety of languages, including Bemba and German, with more languages on the way. Whether you're a beginner or an advanced learner, our interactive lessons, immersive exercises, and real-time translation features are tailored to meet your unique learning needs.
          </p>
          <p className="text-base mb-6">
            Our mission is to provide an accessible and engaging language learning experience that fosters cultural understanding, communication, and collaboration across borders. Through this project, we aim to create a global community of language learners who can confidently navigate and appreciate the diverse linguistic landscape of our world.
          </p>
          <p className="text-base mb-6">
            Join us on this exciting journey as we strive to make language learning an enriching and rewarding experience for everyone. Let's break down language barriers together and unlock the endless possibilities that come with multilingualism. Start your language learning adventure today!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
