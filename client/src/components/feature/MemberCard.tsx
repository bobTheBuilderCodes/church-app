import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface ChurchMemberProps {
  member: {
    name: string;
    phoneNumber: string;
    date?: string;
    ministry: string;
    id: string;
    imageAlt: string;
    imageSrc: string;
  };
}

const MemberCard: React.FC<ChurchMemberProps> = ({ member }) => {
  const navigate = useNavigate();
  return (
    <div
      key={member.id}
      className="group relative"
      onClick={() => navigate(`/members/${member.id}`)}
    >
      <div className="cursor-pointer aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt={member?.imageAlt}
          src={member?.imageSrc}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="p-4 flex justify-between bg-white rounded-b-md">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`${member?.id}`} className="text-lg font-semibold">
              {member?.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500 ">{member?.phoneNumber}</p>
        </div>
        <p className="text-sm font-medium text-green-700 bg-green-200 h-fit rounded-full px-2 py-1">
          {member?.ministry}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
