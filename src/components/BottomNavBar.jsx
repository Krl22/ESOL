import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaGlobe,
  FaEllipsisH,
  FaComment,
} from "react-icons/fa";

const BottomNavBar = () => {
  return (
    <div className="bg-white fixed bottom-0 w-full flex justify-between items-center p-4 shadow-lg">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "text-black" : "text-gray-400"
        }
      >
        <div className="flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-110">
          <FaHome className="w-6 h-6" />
          <span>Home</span>
        </div>
      </NavLink>
      <NavLink
        to="/lessons"
        className={({ isActive }) =>
          isActive ? "text-black" : "text-gray-400"
        }
      >
        <div className="flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-110">
          <FaBook className="w-6 h-6" />
          <span>Lessons</span>
        </div>
      </NavLink>
      <NavLink
        to="/environment"
        className={({ isActive }) =>
          isActive ? "text-black" : "text-gray-400"
        }
      >
        <div className="flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-110">
          <FaGlobe className="w-6 h-6" />
          <span>Environment</span>
        </div>
      </NavLink>
      <NavLink
        to="/more"
        className={({ isActive }) =>
          isActive ? "text-black" : "text-gray-400"
        }
      >
        <div className="flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-110">
          <FaEllipsisH className="w-6 h-6" />
          <span>More</span>
        </div>
      </NavLink>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            isActive ? "text-black" : "text-gray-400"
          }
        >
          <div
            className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-110 bg-blue-500 text-white rounded-full p-3"
            style={{ marginBottom: "2rem" }}
          >
            <FaComment className="w-6 h-6" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNavBar;
