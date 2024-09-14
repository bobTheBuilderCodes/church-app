import React from 'react';

interface CardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-xl shadow-gray-100  rounded-lg p-3 flex items-center space-x-4">
      <div className="text-indigo-700 text-3xl">
        {icon}
      </div>
      <div className="text-center">
        <h3 className="font-light text-sm text-gray-400">{title}</h3>
        <p className="mt-0 text-2xl font-bold text-left">{value}</p>
      </div>
    </div>
  );
};

export default Card;
