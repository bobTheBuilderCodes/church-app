import React from 'react';
import Button from '../ui/Button';
import InfoSection from './InfoSection';

interface MemberProfileProps {
  member: {
    avatar: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bio: string;
    country: string;
    city: string;
    postalCode: string;
    taxId: string;
  };
}

const BasicInfo: React.FC<MemberProfileProps> = ({ member }) => {
  const basicInfoFields = [
    { label: 'First Name', value: member.firstName },
    { label: 'Last Name', value: member.lastName },
    { label: 'Email Address', value: member.email },
    { label: 'Phone', value: member.phone },
  ];

  const addressFields = [
    { label: 'Country', value: member.country },
    { label: 'City/State', value: member.city },
    { label: 'Postal Code', value: member.postalCode },
    { label: 'TAX ID', value: member.taxId },
  ];

  return (
    <div className="container mx-auto px-8 text-gray-500">
      {/* Profile Header */}
      <div className=" bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 border rounded-lg p-6 mb-6 flex items-center justify-between">
        <div className="flex items-center text-white">
          <img
            src={member.avatar}
            alt={`${member.firstName} ${member.lastName}`}
            className="rounded-full w-24 h-24 object-cover"
          />
          <div className="ml-4">
            <h2 className="text-2xl font-semibold">
              {member.firstName} {member.lastName}
            </h2>
            <p className="text-gray-100">{member.bio}</p>
            <p className="text-gray-50 font-light">{member.city}, {member.country}</p>
          </div>
        </div>
        <Button type='button' className='max-w-fit text-indigo-700'>Edit Profile</Button>
      </div>

      {/* Personal Information */}
      <InfoSection
        title="Personal Information"
        fields={basicInfoFields}
      />

      {/* Address Information */}
      <InfoSection
        title="Address"
        fields={addressFields}
      />
    </div>
  );
};

export default BasicInfo;
