import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileNavigationTabs = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState('home');
  const [isVisible, setIsVisible] = useState(true); // State to track visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const tabs = [
    { id: 'analytics', icon: '📊', label: 'Analytics' },
    { id: 'members', icon: '👥', label: 'Members' },
    { id: 'programs', icon: '📅', label: 'Programs' },
    { id: 'prayer-requests', icon: '🙏', label: 'Prayers' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide the navigation based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    setSelectedTab(currentPath || 'home');
  }, [location]);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 bg-white bg-opacity-20 backdrop-blur-lg text-gray-800 shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{
        backdropFilter: 'blur(10px)',
        borderRadius: '10px'
      }}
    >
      <div className="flex justify-around"> 
        {tabs.map(tab => (
          <Link to={`/${tab.id}`}
            key={tab.id}
            className={`flex-1 p-2 text-center py-3 ${selectedTab === tab.id ? 'rounded-md font-bold text-indigo-800 ' : 'bg-transparent'}`}
          >
            <div>{tab.icon}</div>
            <div className="text-sm">{tab.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigationTabs;
