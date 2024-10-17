import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DictionaryComponent from './Components/DictionaryComponent'; // Ensure this path is correct
import TranslationComponent from './Components/TranslationComponent'; // Ensure this path is correct

import {
  faBook,
  faLanguage,
  faGamepad,
  faGraduationCap,
  faCog,
  faSignOutAlt,
  faUser,
  faBell,
  faChartBar,
  faMap,
  faBookOpen,
  faCalendarAlt,
  faHome,
  faStar,
  faSun,
  faMoon,
  faBars
} from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
  const [activeComponent, setActiveComponent] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar initially closed
  const userName = 'John Doe'; // Replace with actual user data
  const notifications = 3; // Replace with actual notification count

  const primaryColor = 'rgb(2, 62, 128)';
  const primaryLight = 'rgba(2, 62, 128, 0.1)';
  const primaryLighter = 'rgba(2, 62, 128, 0.2)';
  const primaryDark = 'rgba(2, 62, 128, 0.7)';

  const renderContent = () => {
    switch (activeComponent) {
      case 'dictionary':
        return <DictionaryComponent />;
      case 'translation':
        return <TranslationComponent />;
      case 'games':
        return <div className="bg-white p-6 shadow-lg rounded-lg">Games Component</div>;
      case 'courses':
        return <div className="bg-white p-6 shadow-lg rounded-lg">Courses Component</div>;
      case 'settings':
        return <div className="bg-white p-6 shadow-lg rounded-lg">Settings Component</div>;
      case 'logout':
        return <div className="bg-white p-6 shadow-lg rounded-lg">Logout Action Component</div>;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg border-l-4" style={{ borderColor: primaryColor }}>
              <h3 className="font-semibold" style={{ color: primaryColor }}>Scores</h3>
              <p>Your latest scores from games and tests.</p>
              <FontAwesomeIcon icon={faChartBar} className="text-3xl mt-4" style={{ color: primaryColor }} />
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg border-l-4" style={{ borderColor: primaryDark }}>
              <h3 className="font-semibold" style={{ color: primaryDark }}>Courses Roadmap</h3>
              <div className="bg-gray-300 rounded-full h-2">
                <div className="h-2 rounded-full" style={{ width: '75%', backgroundColor: primaryColor }}></div>
              </div>
              <p>75% complete</p>
              <FontAwesomeIcon icon={faMap} className="text-3xl mt-4" style={{ color: primaryDark }} />
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg border-l-4" style={{ borderColor: primaryLighter }}>
              <h3 className="font-semibold" style={{ color: primaryLighter }}>Latest Words</h3>
              <ul>
                <li>Word 1</li>
                <li>Word 2</li>
                <li>Word 3</li>
              </ul>
              <FontAwesomeIcon icon={faBookOpen} className="text-3xl mt-4" style={{ color: primaryLighter }} />
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg border-l-4" style={{ borderColor: primaryDark }}>
              <h3 className="font-semibold" style={{ color: primaryDark }}>Game Levels</h3>
              <p>Current Level: Intermediate</p>
              <FontAwesomeIcon icon={faGamepad} className="text-3xl mt-4" style={{ color: primaryDark }} />
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg border-l-4" style={{ borderColor: primaryLight }}>
              <h3 className="font-semibold" style={{ color: primaryLight }}>Calendar</h3>
              <p>Upcoming Events...</p>
              <FontAwesomeIcon icon={faCalendarAlt} className="text-3xl mt-4" style={{ color: primaryLight }} />
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg border-l-4" style={{ borderColor: primaryColor }}>
              <h3 className="font-semibold" style={{ color: primaryColor }}>Achievements</h3>
              <p>Recent Badges Earned</p>
              <FontAwesomeIcon icon={faStar} className="text-3xl mt-4" style={{ color: primaryColor }} />
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Top Navbar */}
      <div className="shadow-md" style={{ backgroundColor: primaryColor }}>
        <div className="px-4 py-2 flex justify-between items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="flex items-center">
            {/* Align hamburger menu with sidebar icons */}
            <button
              className="mr-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ marginLeft: '10px' }}
            >
              <FontAwesomeIcon icon={faBars} className="text-xl text-white" />
            </button>
            <div className="dashboard-title text-logo text-white text-2xl font-bold ml-4">bemblin</div>
          </div>
          <div className="flex items-center">
            <a href="#" className="mx-2">
              <FontAwesomeIcon icon={faBell} className="text-white" style={{ width: '16px', height: '16px' }} />
            </a>
            <a href="#" className="mx-2">
              <FontAwesomeIcon icon={faUser} className="text-white" style={{ width: '16px', height: '16px' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Sidebar and Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        <div className={`bg-white shadow-lg transform ${sidebarOpen ? 'w-64' : 'w-16'} transition-width duration-300 ease-in-out flex flex-col`} style={{ marginLeft: sidebarOpen ? '0' : '10px' }}>
          <div className="flex-1">
            <nav>
              <ul>
                <li className="mb-4">
                  <button
                    onClick={() => setActiveComponent('')}
                    className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-4 w-full text-left"
                    style={{ marginLeft: '10px' }} // Align with sidebar
                  >
                    <FontAwesomeIcon icon={faHome} className="h-5 w-5" style={{ color: primaryColor, marginRight: '16px', flexShrink: 0 }} />
                    <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Dashboard</span>
                  </button>
                </li>
                <li className="mb-4">
                  <button
                    onClick={() => setActiveComponent('dictionary')}
                    className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-4 w-full text-left"
                    style={{ marginLeft: '10px' }} // Align with sidebar
                  >
                    <FontAwesomeIcon icon={faBook} className="h-5 w-5" style={{ color: primaryColor, marginRight: '16px', flexShrink: 0 }} />
                    <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Dictionary</span>
                  </button>
                </li>
                <li className="mb-4">
                  <button
                    onClick={() => setActiveComponent('translation')}
                    className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-4 w-full text-left"
                    style={{ marginLeft: '10px' }} // Align with sidebar
                  >
                    <FontAwesomeIcon icon={faLanguage} className="h-5 w-5" style={{ color: primaryLight, marginRight: '16px', flexShrink: 0 }} />
                    <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Translation</span>
                  </button>
                </li>
                <li className="mb-4">
                  <button
                    onClick={() => setActiveComponent('games')}
                    className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-4 w-full text-left"
                    style={{ marginLeft: '10px' }} // Align with sidebar
                  >
                    <FontAwesomeIcon icon={faGamepad} className="h-5 w-5" style={{ color: primaryLight, marginRight: '16px', flexShrink: 0 }} />
                    <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Games</span>
                  </button>
                </li>
                <li className="mb-4">
                  <button
                    onClick={() => setActiveComponent('courses')}
                    className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-4 w-full text-left"
                    style={{ marginLeft: '10px' }} // Align with sidebar
                  >
                    <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5" style={{ color: primaryColor, marginRight: '16px', flexShrink: 0 }} />
                    <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Courses</span>
                  </button>
                </li>
                <li className="mb-4">
                  <button
                    onClick={() => setActiveComponent('settings')}
                    className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-4 w-full text-left"
                    style={{ marginLeft: '10px' }} // Align with sidebar
                  >
                    <FontAwesomeIcon icon={faCog} className="h-5 w-5" style={{ color: primaryDark, marginRight: '16px', flexShrink: 0 }} />
                    <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Settings</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="  border-t border-gray-200">
            <button
              onClick={() => setActiveComponent('logout')}
              className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-4 w-full text-left"
              style={{ marginLeft: '10px' }} // Align with sidebar
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="h-5 w-5" style={{ color: primaryLight, marginRight: '16px', flexShrink: 0 }} />
              <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-200 p-4 md:p-6 overflow-auto">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold" style={{ color: primaryColor, fontFamily: 'Poppins, sans-serif' }}>
              Welcome back, {userName}!
            </h1>
            <input
              type="text"
              placeholder="Search..."
              className="mt-4 p-2 border border-gray-300 rounded-lg w-full"
            />
            <div className="flex items-center mt-4">
              <button onClick={() => setDarkMode(!darkMode)} className="mr-2">
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-2xl" />
              </button>
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </div>
          </div>
          {renderContent()}
        </div>
      </div>

      {/* Footer */}
      <div className={`bg-gray-300 text-center p-4 shadow-lg text-sm ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
        © 2024 bemblin. All rights reserved.
      </div>
    </div>
  );
};

export default DashboardPage;
