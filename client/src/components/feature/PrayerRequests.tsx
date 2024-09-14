import React from 'react';
import PrayerRequestCard from './PrayerRequestCard';
import { prayerRequests } from '../../resources';


const PrayerRequest = () => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {prayerRequests.map((request, index) => (
        <PrayerRequestCard key={index} request={request} />
      ))}
    </div>
  );
};

export default PrayerRequest;
