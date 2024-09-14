import React from 'react';

interface InfoField {
  label: string;
  value: string;
}

interface InfoSectionProps {
  title: string;
  fields: InfoField[];
  className?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, fields, className }) => {
  return (
    <div className={`bg-white shadow-xl shadow-gray-100 rounded-lg p-6 w-full mb-6 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-light">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {fields.map((field, index) => (
          <div key={index}>
            <p className="text-gray-400">{field.label}</p>
            <p className="font-medium text-gray-800">{field.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
