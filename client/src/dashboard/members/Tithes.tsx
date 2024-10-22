import React, { useState } from 'react';

interface Type {
    type?: "tithe" | "special offering"
}


const TitheRecordCard = ({type = "tithe"} : Type) => {

  return (
    <div className='bg-gray-100 p-4 rounded-lg mt-6'>
        <h5 className='mb-1 font-bold'>February Tithe</h5>
        <p className='mb-6 text-gray-600'>This is a brief description for the tithe paid by Mr. Robert Sam</p>
        <div className='flex justify-between'>
        <small className='text-gray-600'>Jan 16, 2024</small>
        <small className={`${type === "tithe" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800" } px-3 py-1  font-semibold`}>{type}</small>
        </div>
       
    </div>
  );
};

export default TitheRecordCard;
