import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

function HomePage() {
  return (
    <div className="font-poppins bg-gray-100" style={{ backgroundColor: '#023e80' }}>
      <Header />
      {/* Hero Section */}
      <section className="font-poppins bg-blue-500 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center">
                        <div className="w-1/2">
                            <h2 className="font-bold text-4xl mb-4">Learn a New Language Today!</h2>
                            <p className="text-lg mb-6">Start your language learning journey with our interactive and user-friendly platform.</p>
                            <a href="#" className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-blue-400 transition duration-300">Get Started</a>
                        </div>
                        <div className="w-1/2">
                            <img src="language_illustration.svg" alt="Language Illustration" className="w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="font-poppins py-16">
                <div className="container mx-auto px-4">
                    <h2 className="font-bold text-3xl text-gray-800 mb-8">Our Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="text-blue-500 text-3xl mb-4"><i className="fas fa-chalkboard-teacher"></i></div>
                            <h3 className="text-xl font-bold mb-2">Interactive Lessons</h3>
                            <p>Engaging lessons designed to make learning fun and effective.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="text-blue-500 text-3xl mb-4"><i className="fas fa-headphones"></i></div>
                            <h3 className="text-xl font-bold mb-2">Audio Pronunciation</h3>
                            <p>Listen to native speakers pronounce words and phrases accurately.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="text-blue-500 text-3xl mb-4"><i className="fas fa-users"></i></div>
                            <h3 className="text-xl font-bold mb-2">Community Support</h3>
                            <p>Join our community to interact with fellow language learners and tutors.</p>
                        </div>
                    </div>
                </div>
            </section>

      <Footer />
    </div>
  );
}

export default HomePage;
