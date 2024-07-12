// src/App.js

import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';


const App = () => {
    return (
        <div className="App">
        <Header />
      <div className="flex h-screen bg-gray-100">
          
      <Sidebar />
          <MainContent />
          
            </div>
            <Footer/>
        </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Docs</h1>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-2">
            <a href="#intro" className="text-gray-800 hover:text-blue-500">
              Introduction
            </a>
          </li>
          <li className="mb-2">
            <a href="#getting-started" className="text-gray-800 hover:text-blue-500">
              Getting Started
            </a>
          </li>
          <li className="mb-2">
            <a href="#components" className="text-gray-800 hover:text-blue-500">
              Components
            </a>
          </li>
          <li className="mb-2">
            <a href="#api" className="text-gray-800 hover:text-blue-500">
              API Reference
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <section id="intro" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p>
          Welcome to the documentation! This is the introduction section. Here you can provide an overview of your project.
        </p>
      </section>
      <section id="getting-started" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <p>
          This section will guide you through getting started with the project. Provide installation instructions, setup steps, etc.
        </p>
      </section>
      <section id="components" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Components</h2>
        <p>
          List and describe the components of your project here. Include usage examples and props information.
        </p>
      </section>
      <section id="api" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">API Reference</h2>
        <p>
          Provide detailed API reference information in this section. Describe each API endpoint, its parameters, and responses.
        </p>
      </section>
    </div>
  );
};

export default App;
