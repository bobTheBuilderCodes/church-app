import React from 'react';
import Navbar from '../components/ui/Navbar';

// Layout Component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
