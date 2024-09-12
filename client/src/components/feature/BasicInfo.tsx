import React from 'react';
import Button from '../ui/Button';

interface MemberProfileProps {
  member: {
    avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Paul_Adefarasin.jpg";
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
  return (
    <div className="container mx-auto px-8 text-gray-500">
      {/* Profile Header */}
      <div className="bg-white bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 border rounded-lg p-6 mb-6 flex items-center justify-between">
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
        <Button type='button' className='w-fit bg-white text-indigo-700'>Edit Profile</Button>
      </div>

      {/* Personal Information */}
      <div className="bg-white border rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray">Personal Information</h3>
         
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500">First Name</p>
            <p className="font-medium text-gray-800">{member.firstName}</p>
          </div>
          <div>
            <p className="text-gray-600">Last Name</p>
            <p className="font-medium text-gray-800">{member.lastName}</p>
          </div>
          <div>
            <p className="text-gray-600">Email Address</p>
            <p className="font-medium text-gray-800">{member.email}</p>
          </div>
          <div>
            <p className="text-gray-600">Phone</p>
            <p className="font-medium text-gray-800">{member.phone}</p>
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="bg-white border rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Address</h3>
          
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Country</p>
            <p className="font-medium text-gray-800">{member.country}</p>
          </div>
          <div>
            <p className="text-gray-600">City/State</p>
            <p className="font-medium text-gray-800">{member.city}</p>
          </div>
          <div>
            <p className="text-gray-600">Postal Code</p>
            <p className="font-medium text-gray-800">{member.postalCode}</p>
          </div>
          <div>
            <p className="text-gray-600">TAX ID</p>
            <p className="font-medium text-gray-800">{member.taxId}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
