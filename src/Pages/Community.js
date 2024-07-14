
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';


const CommunityPage = () => {
  return (
    <div className="App">
    <Header />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Welcome to Our Community</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          This is a place where like-minded people gather to share ideas, collaborate, and grow together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img src="/community-image.jpg" alt="Community Image" className="rounded-lg shadow-md w-full h-auto" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Why Join Us?</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our community provides a supportive environment where you can:
            </p>
            <ul className="list-disc text-gray-700 mb-6 ml-6">
              <li>Network with industry professionals</li>
              <li>Access exclusive resources and events</li>
              <li>Collaborate on projects and ideas</li>
              <li>Gain insights and mentorship</li>
            </ul>
            <div className="flex justify-center">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-lg">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
      
      </div>
    <Footer />
    </div>
  );
}

export default CommunityPage;
