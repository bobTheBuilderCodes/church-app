import React from "react";

interface MemberInfo {
  id: string;
  name: string;
  dob: string;
  gender: string;
  phoneNumber: string;
  email: string;
  address: string;
  dateJoined: string;
}

interface BasicInfoCardProps {
  member: MemberInfo;
}

const InfoCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col mb-4">
    <p className="text-gray-600">{label}:</p>
    <strong className="text-gray-700">{value}</strong>
  </div>
);

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const BasicInfoCard: React.FC<BasicInfoCardProps> = ({ member }) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-[90vw]">
      <InfoCard label="Name" value={member.name} />
      <InfoCard label="Email" value={member.email} />
      <InfoCard label="Gender" value={member.gender} />
      <InfoCard label="Phone Number" value={member.phoneNumber} />
      <InfoCard label="Address" value={member.address} />
      <InfoCard label="Date Joined" value={formatDate(member.dateJoined)} />
    </div>
  );
};

export default BasicInfoCard;
