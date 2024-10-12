import React from "react";

interface ChurchProgramProps {
  imageUrl: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description?: string;
  onEdit: () => void;
  onDelete: () => void;
}

const ChurchProgramCard: React.FC<ChurchProgramProps> = ({
  imageUrl,
  title,
  date,
  time,
  venue,
  description,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden m-0">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{`${date} at ${time}`}</p>
        <p className="text-sm text-gray-500 mt-1">Venue: {venue}</p>
        {description && (
          <p className="text-gray-700 text-sm mt-2">{description}</p>
        )}
        <div className="flex justify-between mt-4 text-sm text-indigo-600">
          <button onClick={onEdit} className="hover:underline">
            Edit
          </button>
          <button onClick={onDelete} className="hover:underline">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChurchProgramCard;
