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
  faSearch,
  faSun,
  faMoon,
  faBars
} from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
  const [activeComponent, setActiveComponent] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const userName = 'John Doe'; // Replace with actual user data
  const notifications = 3; // Replace with actual notification count

  const renderContent = () => {
    switch (activeComponent) {
      case 'dictionary':
        return <DictionaryComponent />;
      case 'translation':
        return <TranslationComponent />;
      case 'games':
        return <div className="bg-white p-4 shadow rounded">Games Component</div>;
      case 'courses':
        return <div className="bg-white p-4 shadow rounded">Courses Component</div>;
      case 'settings':
        return <div className="bg-white p-4 shadow rounded">Settings Component</div>;
      case 'logout':
        return <div className="bg-white p-4 shadow rounded">Logout Action Component</div>;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold">Scores</h3>
              <p>Your latest scores from games and tests.</p>
              <FontAwesomeIcon icon={faChartBar} className="text-4xl mt-4" />
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold">Courses Roadmap</h3>
              <div className="bg-gray-300 rounded h-2">
                <div className="bg-green-500 h-2 rounded" style={{ width: '75%' }}></div>
              </div>
              <p>75% complete</p>
              <FontAwesomeIcon icon={faMap} className="text-4xl mt-4" />
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold">Latest Words</h3>
              <ul>
                <li>Word 1</li>
                <li>Word 2</li>
                <li>Word 3</li>
              </ul>
              <FontAwesomeIcon icon={faBookOpen} className="text-4xl mt-4" />
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold">Game Levels</h3>
              <p>Current Level: Intermediate</p>
              <FontAwesomeIcon icon={faGamepad} className="text-4xl mt-4" />
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold">Calendar</h3>
              <p>Upcoming Events...</p>
              <FontAwesomeIcon icon={faCalendarAlt} className="text-4xl mt-4" />
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold">Achievements</h3>
              <p>Recent Badges Earned</p>
              <FontAwesomeIcon icon={faStar} className="text-4xl mt-4" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Top Navbar */}
      <div className="bg-gray-200 shadow-md" style={{ backgroundColor: '#023e80' }}>
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <button className="mr-4" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <FontAwesomeIcon icon={faBars} className="text-2xl text-white" />
            </button>
            <img
              src={process.env.PUBLIC_URL + '/Images/logo.svg'}
              className="h-8"
              alt="Logo"
            />
            <div className="text-2xl font-col text-logo leading-[60px] self-center grow whitespace-nowrap my-auto ml-4">
              bemblin
            </div>
          </div>
          <div className="flex items-center">
            <a href="#" className="mx-2 font-col text-gray-700 hover:text-gray-900 relative">
              <FontAwesomeIcon icon={faBell} className="mr-2" />
              Notifications
              {notifications > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </a>
            <a href="#" className="mx-2 font-col text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Profile
            </a>
          </div>
        </div>
      </div>

      {/* Sidebar and Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        <div className={`bg-white shadow-lg transform ${sidebarOpen ? 'w-64' : 'w-16'} transition-width duration-300 ease-in-out`}>
          <div className="py-4 px-6">
            <h2 className="dashboard-text text-xl font-bold flex items-center">
              <FontAwesomeIcon icon={faHome} className="mr-3 h-5 w-5" />
              <span className={`${sidebarOpen ? 'block' : 'hidden'} ml-1`}>Dashboard</span>
            </h2>
          </div>
          <nav className="mt-6">
            <ul>
              <li className="mb-4">
                <button
                  onClick={() => setActiveComponent('dictionary')}
                  className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6 w-full text-left"
                >
                  <FontAwesomeIcon icon={faBook} className="mr-3 h-5 w-5" />
                  <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Dictionary</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveComponent('translation')}
                  className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6 w-full text-left"
                >
                  <FontAwesomeIcon icon={faLanguage} className="mr-3 h-5 w-5" />
                  <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Translation</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveComponent('games')}
                  className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6 w-full text-left"
                >
                  <FontAwesomeIcon icon={faGamepad} className="mr-3 h-5 w-5" />
                  <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Games</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveComponent('courses')}
                  className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6 w-full text-left"
                >
                  <FontAwesomeIcon icon={faGraduationCap} className="mr-3 h-5 w-5" />
                  <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Courses</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveComponent('settings')}
                  className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6 w-full text-left"
                >
                  <FontAwesomeIcon icon={faCog} className="mr-3 h-5 w-5" />
                  <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Settings</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveComponent('logout')}
                  className="flex items-center text-gray-700 hover:bg-gray-200 py-2 px-6 w-full text-left"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-3 h-5 w-5" />
                  <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Logout</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-200 p-4 md:p-10 overflow-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold">Welcome back, {userName}!</h1>
            <input
              type="text"
              placeholder="Search..."
              className="mt-4 p-2 border border-gray-300 rounded w-full"
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
