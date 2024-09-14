import React from 'react';
import Button from '../ui/Button';

interface PrayerRequestCardProps {
  request: {
    memberName: string;
    description: string;
    date: string;
    avatar: string;
  };
}

const PrayerRequestCard: React.FC<PrayerRequestCardProps> = ({ request }) => {
  return (
    <div className="h-64 relative flex flex-col justify-between bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4 group">
      {/* Avatar */}
      <div className="flex items-center mb-4">
        <div className='bg-gray-100 h-12 w-12 p-4 rounded-full text-2xl mr-3 flex items-center justify-center'>EA</div>
        <div>
          <h4 className="text-lg font-semibold">{request.memberName}</h4>
          <p className="text-gray-500 text-sm">{request.date}</p>
        </div>
      </div>

      {/* Description */}
      
      <p className="text-gray-600 flex-grow">{request.description}</p>

      {/* Button */}
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button type='submit'>Mark as done</Button>
      </div>
    </div>
  );
};

export default PrayerRequestCard;
