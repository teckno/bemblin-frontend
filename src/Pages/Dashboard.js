import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLanguage, faGamepad, faGraduationCap, faCog, faSignOutAlt, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './Search';

const DashboardPage = () => {
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        {/* Left Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="py-4 px-6">
            <h2 className="text-xl font-bold">Dashboard</h2>
          </div>
          <nav className="mt-6">
            <ul>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6">
                  <FontAwesomeIcon icon={faBook} className="mr-3" />
                  Dictionary
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6">
                  <FontAwesomeIcon icon={faLanguage} className="mr-3" />
                  Translation
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6">
                  <FontAwesomeIcon icon={faGamepad} className="mr-3" />
                  Games
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6">
                  <FontAwesomeIcon icon={faGraduationCap} className="mr-3" />
                  Courses
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6">
                  <FontAwesomeIcon icon={faCog} className="mr-3" />
                  Settings
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6">
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
                  Logout
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6">
                  <FontAwesomeIcon icon={faUser} className="mr-3" />
                  Profile
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6">
                  <FontAwesomeIcon icon={faBell} className="mr-3" />
                  Notification
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-200 p-10">
          {/* Your main content goes here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
