import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

function Developers() {
  return (
    <div className="flex">
      {/* Left Sidebar Menu */}
      <aside className="w-1/4 bg-blue-500 text-white p-4 font-poppins">
        <nav>
          <h2 className="text-lg font-bold mb-4">Developer Menu</h2>
          <ul>
            <li><Link to="/api-reference" className="block py-2 px-4 hover:bg-blue-400">API Reference</Link></li>
            <li><Link to="/documentation" className="block py-2 px-4 hover:bg-blue-400">Documentation</Link></li>
            <li><Link to="/contribution" className="block py-2 px-4 hover:bg-blue-400">Contribution Guidelines</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="w-3/4 p-4 font-poppins">
        {/* API Reference Section */}
        <section id="api-reference" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <p>
            {/* Your API reference content goes here */}
          </p>
        </section>

        {/* Documentation Section */}
        <section id="documentation" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Documentation</h2>
          <p>
            {/* Your documentation content goes here */}
          </p>
        </section>

        {/* Contribution Guidelines Section */}
        <section id="contribution">
          <h2 className="text-2xl font-bold mb-4">Contribution Guidelines</h2>
          <p>
            Thank you for considering contributing to our project! To get started, please follow these guidelines:
            {/* Include instructions on how to contribute */}
          </p>
        </section>
      </main>
    </div>
  );
};

export default Developers;
