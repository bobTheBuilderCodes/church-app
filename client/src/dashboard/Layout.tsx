import React from 'react';
import Navbar from '../components/ui/Navbar';

// Layout Component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <Navbar />
      <main className="flex-1 bg-gray-100 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
