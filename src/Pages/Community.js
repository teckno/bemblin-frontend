import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

function Community() {
  return (
    <div className="font-poppins bg-gray-100" style={{ backgroundColor: '#023e80' }}>
      <Header />
      
      {/* Community Introduction */}
      <section className="font-poppins bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="w-1/2">
              <h2 className="font-bold text-4xl mb-4">Welcome to Our Community!</h2>
              <p className="text-lg mb-6">Connect with other language enthusiasts, ask questions, and share your knowledge.</p>
              <a href="#" className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-blue-400 transition duration-300">Join Now</a>
            </div>
            <div className="w-1/2">
              <img src="community_illustration.svg" alt="Community Illustration" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="font-poppins py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-3xl text-gray-800 mb-8">What Our Community Offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Feature 1: Discussion Forums */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-500 text-3xl mb-4"><i className="fas fa-comments"></i></div>
              <h3 className="text-xl font-bold mb-2">Discussion Forums</h3>
              <p>Engage in discussions on various language-related topics, ask questions, and share your insights.</p>
            </div>
            {/* Feature 2: Language Exchange */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-500 text-3xl mb-4"><i className="fas fa-exchange-alt"></i></div>
              <h3 className="text-xl font-bold mb-2">Language Exchange</h3>
              <p>Connect with language learners worldwide for language exchange opportunities and practice sessions.</p>
            </div>
            {/* Feature 3: Community Events */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-500 text-3xl mb-4"><i className="fas fa-calendar-alt"></i></div>
              <h3 className="text-xl font-bold mb-2">Community Events</h3>
              <p>Participate in virtual events, workshops, and language challenges organized by our community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="font-poppins bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-3xl mb-8">What Our Members Say</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-4 md:mb-0">
              <p className="text-lg mb-4">"I've made great friends and improved my language skills immensely through this community. Highly recommended!"</p>
              <p className="text-sm font-bold">- Emily, Spanish Learner</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-lg mb-4">"The language exchange feature is fantastic! I've found partners to practice with and learned so much from them."</p>
              <p className="text-sm font-bold">- Alex, French Learner</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Community;
