import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { InformationCircleIcon, GlobeAltIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-6">About Us</h1>
        <p className="text-center text-lg mb-8">
          Welcome to Dictionary Search, your ultimate destination for discovering the meanings, pronunciations, translations, and more of any word.
        </p>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <InformationCircleIcon className="h-6 w-6 mr-2 text-blue-600" /> Our Mission
          </h2>
          <p className="text-lg leading-relaxed">
            At Dictionary Search, our mission is to make language accessible and enjoyable for everyone. We strive to provide accurate, comprehensive, and user-friendly information to help you understand and use words effectively. Whether you're a student, professional, or simply a language enthusiast, we aim to support your journey with reliable resources and intuitive tools.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <GlobeAltIcon className="h-6 w-6 mr-2 text-blue-600" /> Our Vision
          </h2>
          <p className="text-lg leading-relaxed">
            We envision a world where language barriers are minimized, and knowledge is shared freely. By leveraging advanced technology and a deep understanding of linguistic principles, we aim to bridge gaps and connect people through effective communication. Our goal is to enhance language learning and provide valuable insights that empower individuals globally.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6 mr-2 text-blue-600" /> Our Team
          </h2>
          <p className="text-lg leading-relaxed">
            Our team is composed of passionate linguists, skilled developers, and dedicated professionals who work tirelessly to create a top-notch dictionary experience. With a shared commitment to excellence and innovation, we collaborate to ensure that our platform meets the highest standards of quality and functionality.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <InformationCircleIcon className="h-6 w-6 mr-2 text-blue-600" /> Contact Us
          </h2>
          <p className="text-lg leading-relaxed">
            We value your feedback and are here to help with any questions or concerns you may have. Feel free to reach out to us through our contact form or email us at support@dictionarysearch.com. Your input helps us improve and provide a better experience for all our users.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
