import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

function Games() {
  return (
    <div className="font-poppins bg-gray-100" style={{ backgroundColor: '#023e80' }}>
      <Header />
      
      {/* Games Introduction */}
      <section className="font-poppins bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="w-1/2">
              <h2 className="font-bold text-4xl mb-4">Welcome to Word Games!</h2>
              <p className="text-lg mb-6">Enjoy fun and educational word games designed to improve your vocabulary and language skills.</p>
              <a href="#" className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-blue-400 transition duration-300">Play Now</a>
            </div>
            <div className="w-1/2">
              <img src="word_games_illustration.svg" alt="Word Games Illustration" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Games Features */}
      <section className="font-poppins py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-3xl text-gray-800 mb-8">What Our Word Games Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Feature 1: Vocabulary Challenges */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-500 text-3xl mb-4"><i className="fas fa-brain"></i></div>
              <h3 className="text-xl font-bold mb-2">Vocabulary Challenges</h3>
              <p>Test and expand your vocabulary with a variety of challenging word games and puzzles.</p>
            </div>
            {/* Feature 2: Language Skills Improvement */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-500 text-3xl mb-4"><i className="fas fa-graduation-cap"></i></div>
              <h3 className="text-xl font-bold mb-2">Language Skills Improvement</h3>
              <p>Enhance your language skills including spelling, grammar, and word recognition through engaging gameplay.</p>
            </div>
            {/* Feature 3: Multiplayer Mode */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-500 text-3xl mb-4"><i className="fas fa-users"></i></div>
              <h3 className="text-xl font-bold mb-2">Multiplayer Mode</h3>
              <p>Challenge friends or compete against other players in real-time multiplayer word game matches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="font-poppins bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-3xl mb-8">What Our Players Say</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-4 md:mb-0">
              <p className="text-lg mb-4">"These word games are addictive! I've been playing every day and my vocabulary has improved significantly."</p>
              <p className="text-sm font-bold">- Sarah</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-lg mb-4">"I love the multiplayer mode! It's so much fun competing with friends and testing our word skills."</p>
              <p className="text-sm font-bold">- Jack</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Games;
