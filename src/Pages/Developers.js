import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLanguage, faBook, faInfoCircle, faUsers, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function DevelopersPage() {
    return (
        <div>
            <div className='bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8'>
                <div className="api-side max-w-4xl mx-auto flex items-start">
                    { /* Left Sidebar Menu */}
                    <aside className="w-1/4 text-white p-4 font-poppins" style={{ fontSize: '12px' }}>
                        <nav>
                            <h2 className="text-lg font-bold mb-4">Developer Menu</h2>
                            <ul>
                                <li><Link to="/api-reference" className="block py-2 px-4 hover:bg-blue-700">API Reference</Link></li>
                                <li><Link to="/documentation" className="block py-2 px-4 hover:bg-blue-700">Documentation</Link></li>
                                <li><Link to="/contribution" className="block py-2 px-4 hover:bg-blue-700">Contribution Guidelines</Link></li>
                            </ul>
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <main className="w-3/4 p-4 font-poppins text-base">
                        <section id="api-reference" className="mb-8">
                            <h2 className="text-lg font-bold mb-4">API Reference</h2>
                            <p>
                                {/* Your API reference content goes here */}
                            </p>
                        </section>

                        <section id="documentation" className="mb-8">
                            <h2 className="text-lg font-bold mb-4">Documentation</h2>
                            <p>
                                {/* Your documentation content goes here */}
                            </p>
                        </section>

                        <section id="contribution">
                            <h2 className="text-lg font-bold mb-4">Contribution Guidelines</h2>
                            <p>
                                Thank you for considering contributing to our project! To get started, please follow these guidelines:
                                {/* Include instructions on how to contribute */}
                            </p>
                        </section>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DevelopersPage;
