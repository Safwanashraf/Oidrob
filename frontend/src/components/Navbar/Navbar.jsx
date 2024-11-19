import React from "react";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Add New Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          + Add New
        </button>

        {/* Table View and Kanban View Buttons */}
        <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Table View
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Kanban Board
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Group and Filter Buttons */}
        <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Group
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Filter
        </button>

        {/* Notification Bell with Badge */}
        <div className="relative">
          <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a1 1 0 00-2 0v.341C10.67 5.878 10 7.132 10 8.5v5.658a2.032 2.032 0 01-.595 1.437L8 17h5m0 0v1.5a3.5 3.5 0 11-7 0V17m7 0H8"
              />
            </svg>
          </button>
          {/* Badge */}
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            12
          </span>
        </div>

        {/* User Avatar */}
        <div className="relative">
          <button className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-blue-500">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="object-cover w-full h-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;