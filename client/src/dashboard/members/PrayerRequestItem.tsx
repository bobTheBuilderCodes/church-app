import React, { useState } from "react";

const PrayerRequestItem = () => {
  // State to manage button toggle between "Mark as done" and "Completed"
  const [isCompleted, setIsCompleted] = useState(false);

  // Toggle the button text when clicked
  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="bg-gray-100 w-fit p-4 my-4 relative group rounded-lg">
      <p className="mb-2 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        facilis ratione praesentium eius atque rem molestiae hic quasi et
        deleniti. Blanditiis consequatur architecto expedita assumenda amet
        animi, doloremque eligendi dolorem?
      </p>

      <small className="text-gray-600">May 13, 2024</small>
      <br />

      {/* Button only shows on hover */}
      <button
        onClick={toggleCompleted}
        className={`bg-indigo-600 text-white p-2 rounded-lg mt-5 px-4 transition-opacity duration-300 ease-in-out 
        ${isCompleted ? "bg-green-500" : ""} 
    `} 
      >
        {isCompleted ? "Completed" : "Mark as done"}
      </button>
    </div>
  );
};

export default PrayerRequestItem;
